from bs4 import BeautifulSoup
import os
import requests
import base64
from urllib.parse import urljoin
import time

scrapList = ["plants", "animals", "birds", "ocean-animals",
             "ocean-fish", "domestic-animal", "mountain-animal"]
for lst in scrapList:
    url = f"https://unsplash.com/s/photos/{lst}"

    httpCount, dataCount, serverCount = 0, 0, 0

    folder_name = input("Enter folder name : ")

    folder_path = f"images/{folder_name}"
    print(folder_path)
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
