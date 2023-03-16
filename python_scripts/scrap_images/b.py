from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from urllib.parse import urljoin

# set the path of the ChromeDriver executable
chrome_driver_path = 'C:\Program Files\Google\Chrome\Application\chromedriver.exe'

# create a Service object using the ChromeDriver executable path
service = Service(chrome_driver_path)

# create a webdriver instance using the Service object
driver = webdriver.Chrome(service=service)

# set the base URL of the website you want to crawl
base_url = 'https://portotheme.com/html/molla/index-1.html'

# create a list to store the URLs of all the pages on the website
urls = [base_url]

# use a loop to navigate to each page on the website and take a screenshot
for url in urls:
    driver.get(url)
    driver.save_screenshot(url.replace(base_url, '').replace('/', '') + 'image.png')
    links_container = driver.find_element_by_css_selector('body') # change this to the element that contains the links on your website
    links = links_container.find_elements_by_css_selector('a[href^="/"], a[href^="https://portotheme.com"]')
    for link in links:
        href = link.get_attribute('href')
        full_url = urljoin(base_url, href)
        if full_url not in urls:
            urls.append(full_url)

# close the webdriver
driver.quit()
