
from bs4 import BeautifulSoup
import os
import shutil
import requests
import base64
from urllib.parse import urljoin
import time
import pandas as pd
# read the scrapList excel file
scrapList = pd.read_excel("data/scrapList.xlsx")
scrapKeywords = pd.read_excel("data/scrapKeywords.xlsx")
g_folder_name = ""
# loop through the rows of the Excel file
for index, row in scrapList.iterrows():
    for keyword in scrapKeywords["search_list"]:
        keyword_directory = keyword
        # check if the website name matches
        if row["website_name"] == "behance":
            # concatenate the keyword with the website link
            url = f"{row['website_link']}".replace(
                '#keyword#', str(keyword.replace(" ", "+")))
            print(url)
        elif row["website_name"] == "awwwards":
            # concatenate the keyword with the website link
            url = f"{row['website_link']}".replace(
                '#keyword#', str(keyword.replace(" ", "+")))
            print(url)

        # define the Pinterest search URL with placeholders for the keywords
        elif row["website_name"] == "pinterest":
            url_template = 'https://in.pinterest.com/search/pins/?q=#keyword#&rs=typed'

            # split the keywords by comma and replace #keyword#, #keyword2#, etc. with each word
            keywords = keyword.split(' ')
            url = url_template
            url = url.replace(f'#keyword#', '%20'.join(keywords))
            # replace any remaining #keyword# placeholders with the first keyword
            url = url.replace(
                '#keyword#', keywords[0].strip().replace(' ', '%20'))
            print(url)

        elif row["website_name"] == "designspiration":
            url_template2 = 'https://www.designspiration.com/search/saves/?q=#keyword#'

            # split the keywords by comma and replace #keyword#, #keyword2#, etc. with each word
            keywords2 = keyword.split(' ')
            url = url_template2
            url = url.replace(f'#keyword#', '%20'.join(keywords2))
            # replace any remaining #keyword# placeholders with the first keyword
            url = url.replace(
                '#keyword#', keywords2[0].strip().replace(' ', '%20'))
            print(url)
            
        # elif row["website_name"] == "unsplash":
        #     # concatenate the keyword with the website link
        #     url = f"{row['website_link']}".replace(
        #         '#keyword#', str(keyword.replace(" ", "-")))
        #     print(url)
            
        elif row["website_name"] == "muzil":
            url_template3 = 'https://search.muz.li/search/#keyword#'

            # split the keywords by comma and replace #keyword#, #keyword2#, etc. with each word
            keywords3 = keyword.split(' ')
            url = url_template3
            url = url.replace(f'#keyword#', '%20'.join(keywords3))
            # replace any remaining #keyword# placeholders with the first keyword
            url = url.replace(
                '#keyword#', keywords3[0].strip().replace(' ', '%20'))
            print(url)

        httpCount, dataCount, serverCount = 0, 0, 0
        for lst in scrapList["website_name"]:
            folder_name = lst
            g_folder_name = folder_name
            folder_path = os.path.abspath(os.path.join(
                "images", str(folder_name), str(keyword_directory)))
            if not os.path.exists(folder_path):
                os.makedirs(folder_path)

            downloaded_images = os.listdir(folder_path)
            last_index = 0
            # for image in downloaded_images:
            #     # try:
            #     index = int(image.split(".")[0][5:])
            #     if index > last_index:
            #         last_index = index
                # except:
                #     pass
            # try:
            print(url)
            response = requests.get(url)
            response.raise_for_status()
            # except requests.exceptions.HTTPError as http_err:
            #     print(f"http error occures : {http_err}")
            #     exit()
            # except Exception as err:
            #     print(f"another type of error : {err}")

            html_content = response.content
            soup = BeautifulSoup(html_content, "html.parser")
            div_by_data_test = None
            for index, row in scrapList.iterrows():
                if row["website_name"] == "unsplash" :
                    for x in soup.find_all("div"):
                        if x.get("data-test") == "search-photos-route":
                            div_by_data_test = x
                            count = last_index + 1
                            img_tags = x.find_all("img")
                            for img_tag in img_tags:
                                src = img_tag.get("src")
                                if src:
                                    if src and src.startswith("http"):
                                        httpCount += 1
                                        full_src = src
                                    elif src.startswith("data:image/"):
                                        dataCount += 1
                                        parts = src.split(",")
                                        data = parts[1]
                                        ext = parts[0].split(
                                            ";")[0][len("data:image/"):]
                                        filename = time.strftime(
                                            "%Y%m%d-%H%M%S") + f"_image{count}.{ext}"
                                        file_path = os.path.abspath(
                                            os.path.join(folder_path, filename))
                                        # try:
                                        with open(file_path, "wb") as f:
                                            f.write(base64.b64decode(data))
                                        # except Exception as err:
                                        #     print(
                                        #         f"An error occurred while saving {filename}: {err}")
                                        # else:
                                        print(f"Saved {filename}")
                                        print(url)
                                        count += 1
                                        continue
                                    else:
                                        serverCount += 1
                                        full_src = urljoin(url, src)
                                    # try:
                                    response2 = requests.get(full_src)
                                    response2.raise_for_status()
                                    # except requests.exceptions.HTTPError as http_err:
                                    #     print(f"HTTP error occurred: {http_err}")
                                    #     continue
                                    # except Exception as err:
                                    #     print(f"An error occurred: {err}")
                                    #     continue
                                    filename = time.strftime(
                                        "%Y%m%d-%H%M%S") + f"_image{count}.jpg"
                                    file_path = os.path.abspath(
                                        os.path.join(folder_path, filename))
                                    # try:
                                    with open(file_path, "wb") as f:
                                        f.write(response2.content)
                                    # except Exception as err:
                                    #     print(
                                    #         f"An error occurred while saving {filename}: {err}")
                                    # else:
                                    print(f"Saved {filename}")
                                    print(url)
                                    count += 1
                            print(httpCount)
                            print(dataCount)
                            print(serverCount)
                            break
                elif row["website_name"] == "designspiration" :
                    for x in soup.find_all("div"):
                        if x.get("class") == "content gridItems":
                            div_by_data_test = x
                            count = last_index + 1
                            img_tags = x.find_all("img")
                            for img_tag in img_tags:
                                src = img_tag.get("src")
                                if src:
                                    if src and src.startswith("http"):
                                        httpCount += 1
                                        full_src = src
                                    elif src.startswith("data:image/"):
                                        dataCount += 1
                                        parts = src.split(",")
                                        data = parts[1]
                                        ext = parts[0].split(
                                            ";")[0][len("data:image/"):]
                                        filename = time.strftime(
                                            "%Y%m%d-%H%M%S") + f"_image{count}.{ext}"
                                        file_path = os.path.abspath(
                                            os.path.join(folder_path, filename))
                                        # try:
                                        with open(file_path, "wb") as f:
                                            f.write(base64.b64decode(data))
                                        # except Exception as err:
                                        #     print(
                                        #         f"An error occurred while saving {filename}: {err}")
                                        # else:
                                        print(f"Saved {filename}")
                                        print(url)
                                        count += 1
                                        continue
                                    else:
                                        serverCount += 1
                                        full_src = urljoin(url, src)
                                    # try:
                                    response2 = requests.get(full_src)
                                    response2.raise_for_status()
                                    # except requests.exceptions.HTTPError as http_err:
                                    #     print(f"HTTP error occurred: {http_err}")
                                    #     continue
                                    # except Exception as err:
                                    #     print(f"An error occurred: {err}")
                                    #     continue
                                    filename = time.strftime(
                                        "%Y%m%d-%H%M%S") + f"_image{count}.jpg"
                                    file_path = os.path.abspath(
                                        os.path.join(folder_path, filename))
                                    # try:
                                    with open(file_path, "wb") as f:
                                        f.write(response2.content)
                                    # except Exception as err:
                                    #     print(
                                    #         f"An error occurred while saving {filename}: {err}")
                                    # else:
                                    print(f"Saved {filename}")
                                    print(url)
                                    count += 1
                            print(httpCount)
                            print(dataCount)
                            print(serverCount)
                            break
                        
                elif row["website_name"] == "muzil" :
                    for x in soup.find_all("div"):
                        if x.get("class") == "big similar":
                            div_by_data_test = x
                            count = last_index + 1
                            img_tags = x.find_all("img")
                            for img_tag in img_tags:
                                src = img_tag.get("src")
                                if src:
                                    if src and src.startswith("http"):
                                        httpCount += 1
                                        full_src = src
                                    elif src.startswith("data:image/"):
                                        dataCount += 1
                                        parts = src.split(",")
                                        data = parts[1]
                                        ext = parts[0].split(
                                            ";")[0][len("data:image/"):]
                                        filename = time.strftime(
                                            "%Y%m%d-%H%M%S") + f"_image{count}.{ext}"
                                        file_path = os.path.abspath(
                                            os.path.join(folder_path, filename))
                                        # try:
                                        with open(file_path, "wb") as f:
                                            f.write(base64.b64decode(data))
                                        # except Exception as err:
                                        #     print(
                                        #         f"An error occurred while saving {filename}: {err}")
                                        # else:
                                        print(f"Saved {filename}")
                                        print(url)
                                        count += 1
                                        continue
                                    else:
                                        serverCount += 1
                                        full_src = urljoin(url, src)
                                    # try:
                                    response2 = requests.get(full_src)
                                    response2.raise_for_status()
                                    # except requests.exceptions.HTTPError as http_err:
                                    #     print(f"HTTP error occurred: {http_err}")
                                    #     continue
                                    # except Exception as err:
                                    #     print(f"An error occurred: {err}")
                                    #     continue
                                    filename = time.strftime(
                                        "%Y%m%d-%H%M%S") + f"_image{count}.jpg"
                                    file_path = os.path.abspath(
                                        os.path.join(folder_path, filename))
                                    # try:
                                    with open(file_path, "wb") as f:
                                        f.write(response2.content)
                                    # except Exception as err:
                                    #     print(
                                    #         f"An error occurred while saving {filename}: {err}")
                                    # else:
                                    print(f"Saved {filename}")
                                    print(url)
                                    count += 1
                            print(httpCount)
                            print(dataCount)
                            print(serverCount)
                            break
                elif row["website_name"] == "behance" :
                    for x in soup.find_all("div"):
                        if x.get("class") == "Projects-grid-tRQ Projects-topSectioncovers-mNa":
                            div_by_data_test = x
                            count = last_index + 1
                            img_tags = x.find_all("img")
                            for img_tag in img_tags:
                                src = img_tag.get("src")
                                if src:
                                    if src and src.startswith("http"):
                                        httpCount += 1
                                        full_src = src
                                    elif src.startswith("data:image/"):
                                        dataCount += 1
                                        parts = src.split(",")
                                        data = parts[1]
                                        ext = parts[0].split(
                                            ";")[0][len("data:image/"):]
                                        filename = time.strftime(
                                            "%Y%m%d-%H%M%S") + f"_image{count}.{ext}"
                                        file_path = os.path.abspath(
                                            os.path.join(folder_path, filename))
                                        # try:
                                        with open(file_path, "wb") as f:
                                            f.write(base64.b64decode(data))
                                        # except Exception as err:
                                        #     print(
                                        #         f"An error occurred while saving {filename}: {err}")
                                        # else:
                                        print(f"Saved {filename}")
                                        print(url)
                                        count += 1
                                        continue
                                    else:
                                        serverCount += 1
                                        full_src = urljoin(url, src)
                                    # try:
                                    response2 = requests.get(full_src)
                                    response2.raise_for_status()
                                    # except requests.exceptions.HTTPError as http_err:
                                    #     print(f"HTTP error occurred: {http_err}")
                                    #     continue
                                    # except Exception as err:
                                    #     print(f"An error occurred: {err}")
                                    #     continue
                                    filename = time.strftime(
                                        "%Y%m%d-%H%M%S") + f"_image{count}.jpg"
                                    file_path = os.path.abspath(
                                        os.path.join(folder_path, filename))
                                    # try:
                                    with open(file_path, "wb") as f:
                                        f.write(response2.content)
                                    # except Exception as err:
                                    #     print(
                                    #         f"An error occurred while saving {filename}: {err}")
                                    # else:
                                    print(f"Saved {filename}")
                                    print(url)
                                    count += 1
                            print(httpCount)
                            print(dataCount)
                            print(serverCount)
                            break
                elif row["website_name"] == "pinterest" :
                    for x in soup.find_all("div"):
                        if x.get("class") == "vbI XiG":
                            div_by_data_test = x
                            count = last_index + 1
                            img_tags = x.find_all("img")
                            for img_tag in img_tags:
                                src = img_tag.get("src")
                                if src:
                                    if src and src.startswith("http"):
                                        httpCount += 1
                                        full_src = src
                                    elif src.startswith("data:image/"):
                                        dataCount += 1
                                        parts = src.split(",")
                                        data = parts[1]
                                        ext = parts[0].split(
                                            ";")[0][len("data:image/"):]
                                        filename = time.strftime(
                                            "%Y%m%d-%H%M%S") + f"_image{count}.{ext}"
                                        file_path = os.path.abspath(
                                            os.path.join(folder_path, filename))
                                        # try:
                                        with open(file_path, "wb") as f:
                                            f.write(base64.b64decode(data))
                                        # except Exception as err:
                                        #     print(
                                        #         f"An error occurred while saving {filename}: {err}")
                                        # else:
                                        print(f"Saved {filename}")
                                        print(url)
                                        count += 1
                                        continue
                                    else:
                                        serverCount += 1
                                        full_src = urljoin(url, src)
                                    # try:
                                    response2 = requests.get(full_src)
                                    response2.raise_for_status()
                                    # except requests.exceptions.HTTPError as http_err:
                                    #     print(f"HTTP error occurred: {http_err}")
                                    #     continue
                                    # except Exception as err:
                                    #     print(f"An error occurred: {err}")
                                    #     continue
                                    filename = time.strftime(
                                        "%Y%m%d-%H%M%S") + f"_image{count}.jpg"
                                    file_path = os.path.abspath(
                                        os.path.join(folder_path, filename))
                                    # try:
                                    with open(file_path, "wb") as f:
                                        f.write(response2.content)
                                    # except Exception as err:
                                    #     print(
                                    #         f"An error occurred while saving {filename}: {err}")
                                    # else:
                                    print(f"Saved {filename}")
                                    print(url)
                                    count += 1
                            print(httpCount)
                            print(dataCount)
                            print(serverCount)
                            break
                elif row["website_name"] == "awwwards" :    
                    for y in soup.find_all("ul") :
                        if y.get("class") == "grid-sites js-ajax-entries":
                            div_by_data_test = y
                            count = last_index + 1
                            img_tags = y.find_all("img")
                            for img_tag in img_tags:
                                src = img_tag.get("src")
                                if src:
                                    if src and src.startswith("http"):
                                        httpCount += 1
                                        full_src = src
                                    elif src.startswith("data:image/"):
                                        dataCount += 1
                                        parts = src.split(",")
                                        data = parts[1]
                                        ext = parts[0].split(
                                            ";")[0][len("data:image/"):]
                                        filename = time.strftime(
                                            "%Y%m%d-%H%M%S") + f"_image{count}.{ext}"
                                        file_path = os.path.abspath(
                                            os.path.join(folder_path, filename))
                                        # try:
                                        with open(file_path, "wb") as f:
                                            f.write(base64.b64decode(data))
                                        # except Exception as err:
                                        #     print(
                                        #         f"An error occurred while saving {filename}: {err}")
                                        # else:
                                        print(f"Saved {filename}")
                                        print(url)
                                        count += 1
                                        continue
                                    else:
                                        serverCount += 1
                                        full_src = urljoin(url, src)
                                    # try:
                                    response2 = requests.get(full_src)
                                    response2.raise_for_status()
                                    # except requests.exceptions.HTTPError as http_err:
                                    #     print(f"HTTP error occurred: {http_err}")
                                    #     continue
                                    # except Exception as err:
                                    #     print(f"An error occurred: {err}")
                                    #     continue
                                    filename = time.strftime(
                                        "%Y%m%d-%H%M%S") + f"_image{count}.jpg"
                                    file_path = os.path.abspath(
                                        os.path.join(folder_path, filename))
                                    # try:
                                    with open(file_path, "wb") as f:
                                        f.write(response2.content)
                                    # except Exception as err:
                                    #     print(
                                    #         f"An error occurred while saving {filename}: {err}")
                                    # else:
                                    print(f"Saved {filename}")
                                    print(url)
                                    count += 1
                            print(httpCount)
                            print(dataCount)
                            print(serverCount)
                            break
                # for folder_name in scrapKeywords["search_list"]:
                #     folder_path = os.path.abspath(os.path.join(
                #         "images", str(g_folder_name), str(folder_name),))
                #     print(folder_path)
                #     if os.path.exists(folder_path):
                #         for image_file in os.listdir(folder_path):
                #             image_path = os.path.join(folder_path, image_file)
                #             # get the size of the image in bytes
                #             image_size = os.path.getsize(image_path)
                #             # check if image size is less than 5 KB
                #             if image_size < 8500:
                #                 # remove the image
                #                 os.remove(image_path)
                #     else:
                #         print(f"{folder_name} directory not found")