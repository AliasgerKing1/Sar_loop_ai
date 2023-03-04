
# from bs4 import BeautifulSoup
# import os
# import shutil
# import requests
# import base64
# from urllib.parse import urljoin
# import time

# if not os.path.exists("molla"):
#     os.mkdir("molla")
# # Set the URL of the website to scrape
# website_url = "https://portotheme.com/html/molla/index-1.html"

# # Send a GET request to the website and parse the HTML content
# response = requests.get(website_url)
# soup = BeautifulSoup(response.content, 'html.parser')

# # code for get html files

# # only for index.html
# with open("molla/index.html", 'w', encoding='utf-8') as f:
#     f.write(response.content.decode('utf-8'))


# # Load the HTML file
# with open('molla/index.html') as f:
#     html = f.read()

# img_tags = soup.find_all("img")
# for img_tag in img_tags:
#     src = img_tag.get("src")
#     if not src:
#         continue

#     # Extract the folder path from the image URL
#     path = os.path.dirname(src)

#     # Create the directories for each subfolder
#     root_dir = "molla"
#     current_dir = root_dir
#     for folder in path.split("/"):
#         if not folder:
#             continue
#         current_dir = os.path.join(current_dir, folder)
#         os.makedirs(current_dir, exist_ok=True)

#     # Download the image to the correct folder
#     full_src = urljoin(website_url, src)
#     response = requests.get(full_src, stream=True)
#     filename = os.path.basename(src)
#     file_path = os.path.join(current_dir, filename)
#     with open(file_path, 'wb') as f:
#         shutil.copyfileobj(response.raw, f)

# # code for get css files
# os.mkdir("molla/assets/css")
# # Find all CSS links in the HTML content
# css_links = soup.find_all('link', rel='stylesheet')

# # Loop through the CSS links and retrieve the CSS code
# for css_link in css_links:
#     css_url = css_link['href']
#     if not css_url.startswith(('http', 'https')):
#         css_url = urljoin(website_url, css_url)
#     css_response = requests.get(css_url)
#     css_code = css_response.text

#     # Extract the filename from the URL and create a new file with that name
#     filename = css_url.split('/')[-1].split('?')[0]
#     filename = filename.replace(':', '_').replace(',', '')
#     with open(f"molla/assets/css/{filename}", 'w', encoding='utf-8') as f:
#         f.write(css_code)


# # code for get js files
# os.mkdir("molla/assets/js")

# js_links = soup.find_all('script')

# # Loop through the JS links and retrieve the JS code
# for js_link in js_links:
#     if js_link.has_attr('src'):
#         js_url = js_link['src']
#         if not js_url.startswith(('http', 'https')):
#             js_url = urljoin(website_url, js_url)
#         js_response = requests.get(js_url)
#         js_code = js_response.text

#         # Extract the filename from the URL and create a new file with that name
#         filename3 = js_url.split('/')[-1]
#         with open(f"molla/assets/js/{filename3}", 'w', encoding='utf-8') as f:
#             f.write(js_code)
#             print("Scraping completed!")


from bs4 import BeautifulSoup
import os
import shutil
import requests
from urllib.parse import urljoin
import re
import tinycss2

if not os.path.exists("molla"):
    os.mkdir("molla")
if not os.path.exists("molla/assets"):
    os.mkdir("molla/assets")
if not os.path.exists("molla/assets/css"):
    os.mkdir("molla/assets/css")
if not os.path.exists("molla/assets/js"):
    os.mkdir("molla/assets/js")
if not os.path.exists("molla/assets/icons"):
    os.mkdir("molla/assets/icons")

# Set the URL of the website to scrape
website_url = "https://portotheme.com/html/molla/index-1.html"

# Send a GET request to the website and parse the HTML content
response = requests.get(website_url)
soup = BeautifulSoup(response.content, 'html.parser')

# code for get html files

# only for index.html
with open("molla/index.html", 'w', encoding='utf-8') as f:
    f.write(response.content.decode('utf-8'))

# Find all image tags in the HTML content
img_tags = soup.find_all("img")
for img_tag in img_tags:
    src = img_tag.get("src")
    if not src:
        continue

    # Extract the folder path from the image URL
    path = os.path.dirname(src)

    # Create the directories for each subfolder
    root_dir = "molla"
    current_dir = root_dir
    for folder in path.split("/"):
        if not folder:
            continue
        current_dir = os.path.join(current_dir, folder)
        os.makedirs(current_dir, exist_ok=True)

#     # Download the image to the correct folder
#     full_src = urljoin(website_url, src)
#     response = requests.get(full_src, stream=True)
#     filename = os.path.basename(src)
#     file_path = os.path.join(current_dir, filename)
#     with open(file_path, 'wb') as f:
#         shutil.copyfileobj(response.raw, f)

# # Find all CSS links in the HTML content
# css_links = soup.find_all('link', rel='stylesheet')

# # Loop through the CSS links and retrieve the CSS code
# for css_link in css_links:
#     css_url = css_link['href']
#     if not css_url.startswith(('http', 'https')):
#         css_url = urljoin(website_url, css_url)
#     css_response = requests.get(css_url)
#     css_code = css_response.text

#     # Extract the filename from the URL and create a new file with that name
#     filename = css_url.split('/')[-1].split('?')[0]
#     filename = filename.replace(':', '_').replace(',', '')

#     # Download the CSS file to the appropriate directory
#     with open(f"molla/assets/css/{filename}", 'w', encoding='utf-8') as f:
#         f.write(css_code)

# # Find all background images in the CSS code and download them to the same directory as the CSS file
# background_urls = re.findall(r'background-image: url\((.*?)\)', css_code)
# for url in background_urls:
#     if not url.startswith(('http', 'https')):
#         url = urljoin(css_url, url)
#     response = requests.get(url, stream=True)
#     filename = os.path.basename(url)
#     file_path = os.path.join(os.path.dirname(f.name), filename)
#     with open(file_path, 'wb') as f:
#         shutil.copyfileobj(response.raw, f)

icons = soup.find_all("i")
for icon in icons:
    ico_class = icon.get("class")[0]
    icon_url = f"https://portotheme.com/html/molla/assets/images/icons/{ico_class}.png"  # Replace with actual URL
    response = requests.get(icon_url)
    with open(f"molla/assets/icons/{ico_class}.png", "wb") as f:
        f.write(response.content)


# icon_css_links = []

# # Loop through the icon CSS files and retrieve the icon URLs
# for css_link in icon_css_links:
#     css_url = css_link['href']
#     if not css_url.startswith(('http', 'https')):
#         css_url = urljoin(website_url, css_url)
#     css_response = requests.get(css_url)
#     css_code = css_response.text

#     # Extract the filename from the URL and create a new file with that name
#     filename = css_url.split('/')[-1].split('?')[0]
#     filename = filename.replace(':', '_').replace(',', '')

#     # Parse the CSS code to extract the icon URLs
#     css_ast = tinycss2.parse_stylesheet(css_code)
#     icon_urls = []

#     for rule in css_ast:
#         if rule.type == 'at-rule' and rule.lower_at_keyword == 'import':
#             # recursively parse the imported CSS file(s)
#             import_url = rule.prelude[0].value
#             if not import_url.startswith(('http', 'https')):
#                 import_url = urljoin(css_url, import_url)
#             import_response = requests.get(import_url)
#             import_code = import_response.text
#             import_ast = tinycss2.parse_stylesheet(import_code)
#             for import_rule in import_ast:
#                 if import_rule.type == 'qualified-rule':
#                     icon_urls += re.findall(r'url\((.*?)\)', import_rule.content)

#         elif rule.type == 'qualified-rule':
#             if 'content' in rule.content and 'url' in rule.content:
#                 icon_urls += re.findall(r'url\((.*?)\)', rule.content)

#     # Download the icon files to the appropriate directory
#     for icon_url in icon_urls:
#         if not icon_url.startswith(('http', 'https')):
#             icon_url = urljoin(css_url, icon_url)
#         icon_response = requests.get(icon_url, stream=True)
#         icon_filename = os.path.basename(icon_url)
#         icon_file_path = os.path.join("molla/assets/icons", icon_filename)
#         with open(icon_file_path, 'wb') as f:
#             shutil.copyfileobj(icon_response.raw, f)


# # Find all JS links in the HTML content
# js_links = soup.find_all('script', src=True)

# for js_link in js_links:
#     js_url = js_link['src']
#     if not js_url.startswith(('http', 'https')):
#         js_url = urljoin(website_url, js_url)
#     js_response = requests.get(js_url)
#     js_code = js_response.text

#     # Extract the filename from the URL and create a new file with that name
#     filename = js_url.split('/')[-1].split('?')[0]
#     filename = filename.replace(':', '_').replace(',', '')

#     # Download the JavaScript file to the appropriate directory
#     with open(f"molla/assets/js/{filename}", 'w', encoding='utf-8') as f:
#         f.write(js_code)

# print("Scraping completed!")
