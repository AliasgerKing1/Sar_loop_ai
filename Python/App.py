
from bs4 import BeautifulSoup
import os
import shutil
import requests
import base64
from urllib.parse import urljoin
import time
import pandas as pd

df = pd.read_excel("data/scrapList.xlsx")

scrapList = df.values.tolist()
g_folder_name = ""
for lst in scrapList:
    url = f"https://unsplash.com/s/photos/{lst}"

    httpCount, dataCount, serverCount = 0, 0, 0

    folder_name = input("Enter folder name : ")
    g_folder_name = folder_name
    folder_path = os.path.abspath(os.path.join("images", folder_name))

    if not os.path.exists(folder_path):
        os.mkdir(folder_path)

    downloaded_images = os.listdir(folder_path)
    last_index = 0
    for image in downloaded_images:
        try:
            index = int(image.split(".")[0][5:])
            if index > last_index:
                last_index = index
        except:
            pass
    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.exceptions.HTTPError as http_err:
        print(f"http error occures : {http_err}")
        exit()
    except Exception as err:
        print(f"another type of error : {err}")

    html_content = response.content
    soup = BeautifulSoup(html_content, "html.parser")
    div_by_data_test = None

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
                        ext = parts[0].split(";")[0][len("data:image/"):]
                        filename = time.strftime(
                            "%Y%m%d-%H%M%S") + f"_image{count}.{ext}"
                        file_path = os.path.abspath(
                            os.path.join(folder_path, filename))
                        try:
                            with open(file_path, "wb") as f:
                                f.write(base64.b64decode(data))
                        except Exception as err:
                            print(
                                f"An error occurred while saving {filename}: {err}")
                        else:
                            print(f"Saved {filename}")
                            count += 1
                        continue
                    else:
                        serverCount += 1
                        full_src = urljoin(url, src)
                    try:
                        response2 = requests.get(full_src)
                        response2.raise_for_status()
                    except requests.exceptions.HTTPError as http_err:
                        print(f"HTTP error occurred: {http_err}")
                        continue
                    except Exception as err:
                        print(f"An error occurred: {err}")
                        continue
                    filename = time.strftime(
                        "%Y%m%d-%H%M%S") + f"_image{count}.jpg"
                    file_path = os.path.abspath(
                        os.path.join(folder_path, filename))
                    try:
                        with open(file_path, "wb") as f:
                            f.write(response2.content)
                    except Exception as err:
                        print(
                            f"An error occurred while saving {filename}: {err}")
                    else:
                        print(f"Saved {filename}")
                        count += 1
            print(httpCount)
            print(dataCount)
            print(serverCount)
            break


for lst in scrapList:
    folder_path = os.path.abspath(os.path.join("images", g_folder_name))

    if os.path.exists(folder_path):
        for image_file in os.listdir(folder_path):
            image_path = os.path.join(folder_path, image_file)
            # get the size of the image in bytes
            image_size = os.path.getsize(image_path)
            # check if image size is less than 5 KB
            if image_size < 5000:
                # remove the image
                os.remove(image_path)
    else:
        print(f"{folder_name} directory not found")
