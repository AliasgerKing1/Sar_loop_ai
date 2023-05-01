import os
import requests
from bs4 import BeautifulSoup
import base64
from urllib.parse import urljoin
import time
import pandas as pd
scrapKeywords = pd.read_excel("data/scrapKeywords.xlsx")
scrapList = pd.read_excel("data/scrapList.xlsx")

for index, row in scrapList.iterrows():
    for lst in scrapKeywords['search_list'] :  
        print(row)
        # Prompt user for folder name
        # folder_name = lst
        # folder_path = os.path.abspath(os.path.join("dribble", folder_name))

        # # Create folder if it doesn't exist
        # if not os.path.exists(folder_path):
        #     os.makedirs(folder_path)

        # # Prompt user for website link 
        # link = f"https://dribbble.com/search/{lst}"

        # httpCount, dataCount, serverCount = 0, 0, 0

        # # Get list of already downloaded images
        # downloaded_images = os.listdir(folder_path)
        # last_index = 0
        # for image in downloaded_images:
        #     try:
        #         index = int(image.split(".")[0][5:])
        #         if index > last_index:
        #             last_index = index
        #     except:
        #         pass

        # url = link
        # try:
        #     response = requests.get(url)
        #     response.raise_for_status()
        # except requests.exceptions.HTTPError as http_err:
        #     print(f"HTTP error occurred: {http_err}")
        #     exit()
        # except Exception as err:
        #     print(f"An error occurred: {err}")
        #     exit()

        # html_content = response.content

        # soup = BeautifulSoup(html_content, 'html.parser')
        # div_by_data_test = None
        # for x in soup.find_all("div"):
        #     if x.get("id") == "main":
        #         div_by_data_test = x
        #         count = last_index + 1
        #         img_tags = x.find_all("img")
        #         for img_tag in img_tags:
        #             src = img_tag.get("src")
        #             if src:
        #                 if src and src.startswith("http"):
        #                     httpCount +=1
        #                     full_src = src
        #                 elif src.startswith("data:image/"):
        #                     dataCount +=1
        #                     # Base64-encoded image data
        #                     parts = src.split(",")
        #                     data = parts[1]
        #                     ext = parts[0].split(";")[0][len("data:image/"):]
        #                     if ext == "gif" :
        #                         continue
        #                     filename = time.strftime("%Y%m%d-%H%M%S") + f"_image{count}.{ext}"
        #                     file_path = os.path.abspath(os.path.join(folder_path, filename))
        #                     try:
        #                         with open(file_path, "wb") as f:
        #                             f.write(base64.b64decode(data))
        #                     except Exception as err:
        #                         print(f"An error occurred while saving {filename}: {err}")
        #                     else:
        #                         print(f"Saved {filename}")
        #                         count += 1
        #                     continue
        #                 else:
        #                     serverCount += 1
        #                     full_src = urljoin(url, src)

        #                 try:
        #                     response2 = requests.get(full_src)
        #                     response2.raise_for_status()
        #                 except requests.exceptions.HTTPError as http_err:
        #                     print(f"HTTP error occurred: {http_err}")
        #                     continue
        #                 except Exception as err:
        #                     print(f"An error occurred: {err}")
        #                     continue

        #                 filename = time.strftime("%Y%m%d-%H%M%S") + f"_image{count}.jpg"
        #                 # print(filename)
        #                 file_path = os.path.abspath(os.path.join(folder_path, filename))
        #                 try:
        #                     with open(file_path, "wb") as f:
        #                         f.write(response2.content)
        #                 except Exception as err:
        #                     print(f"An error occurred while saving {filename}: {err}")
        #                 else:
        #                     print(f"Saved {filename}")
        #                     count += 1
                            
        #         print(httpCount)
        #         print(dataCount)
        #         print(serverCount)
        #         break

