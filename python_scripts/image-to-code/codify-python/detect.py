# I:\Sar_loop_ai\python_scripts\image-to-code\codify-python
# https://api.ocr.space/parse/imageurl?apikey=K81110801288957d&file=C:\Sar_loop_ai\python_scripts\image-to-code\codify-python\a.jpg&isOverlayRequired=true
# https://3482-2409-4081-ab80-84a1-fda5-acd5-9a25-b427.ngrok-free.app/cut_image/

# import cv2
# import os

# def detect_and_cut_rectangles(image_path, output_directory):
#     # Load the image
#     image = cv2.imread(image_path)

#     # Convert the image to grayscale
#     gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

#     # Apply adaptive thresholding to obtain a binary image
#     _, threshold = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

#     # Find contours in the binary image
#     contours, _ = cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

#     # Create the output directory if it doesn't exist
#     if not os.path.exists(output_directory):
#         os.makedirs(output_directory)

#     # Cut and save each detected rectangle as a separate image
#     for i, contour in enumerate(contours):
#         # Approximate the contour to a polygon
#         perimeter = cv2.arcLength(contour, True)
#         approx = cv2.approxPolyDP(contour, 0.04 * perimeter, True)

#         # Check if the polygon has four sides (a rectangle)
#         if len(approx) == 4:
#             # Get the bounding box of the rectangle
#             x, y, width, height = cv2.boundingRect(approx)

#             # Crop the rectangle from the original image
#             cropped_image = image[y:y+height, x:x+width]

#             # Save the cropped image as a separate file
#             output_path = os.path.join(output_directory, f"rectangle_{i+1}.png")
#             cv2.imwrite(output_path, cropped_image)
#             print(f"Saved rectangle {i+1} as {output_path}")

# # Example usage
# image_path = "new.png"
# output_directory = "cut_image"
# detect_and_cut_rectangles(image_path, output_directory)


import cv2
import os
import requests

anchor = []
anchor2 = []
anchor3 = []
def detect_and_cut_rectangles(image_path, output_directory):
    # Load the image
    image = cv2.imread(image_path)
    
    # Get the width and height
    width1, height1, channels = image.shape
    anchor.append(width1*0.6)
    anchor.append(height1*0.4)
    anchor2.append(width1*0.4)
    anchor2.append(height1*0.4)
    anchor3.append(width1*0.5)
    anchor3.append(height1*0.4)
    
    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply adaptive thresholding to obtain a binary image
    _, threshold = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    # Find contours in the binary image
    contours, _ = cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Create the output directory if it doesn't exist
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # Store the rectangles' information in a list
    rectangles = []

    # Cut and save each detected rectangle as a separate image
    for i, contour in enumerate(contours):
        # Approximate the contour to a polygon
        perimeter = cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, 0.04 * perimeter, True)

        # Check if the polygon has four sides (a rectangle)
        if len(approx) == 4:
            # Get the bounding box of the rectangle
            x, y, width, height = cv2.boundingRect(approx)

            # Crop the rectangle from the original image
            cropped_image = image[y:y+height, x:x+width]

            # Save the cropped image as a separate file
            output_path = os.path.join(output_directory, f"rectangle_{i+1}.png")
            cv2.imwrite(output_path, cropped_image)
            print(f"Saved rectangle {i+1} as {output_path}")

            # Store the rectangle's information
            rectangle_info = {
                'x': x,
                'y': y,
                'width': width,
                'height': height,
                'output_path': output_path
            }
            rectangles.append(rectangle_info)

    return rectangles


# Generate HTML code based on the detected text
div_str = ""
navUl = 0
nav_text = ["", "about", "contact", "services", "shop", "tournaments", "pricing"]
# Example usage
image_path = "test2.png"
output_directory = "cut_image"
rectangles = detect_and_cut_rectangles(image_path, output_directory)
for i, rectangle in enumerate(rectangles):
    # print(f"Rectangle {i+1}:")
    # print(f"Position: ({rectangle['x']}, {rectangle['y']})")
    # print(f"Width: {rectangle['width']}")
    # print(f"Height: {rectangle['height']}")
    # print(f"Saved image path: {rectangle['output_path']}")
    response = requests.get(f"https://api.ocr.space/parse/imageurl?apikey=K85315406988957&url=https://1687-183-87-13-12.ngrok-free.app/cut_image/rectangle_{i+1}.png")


    if response.status_code == 200:
        # Success: Extract text from the response
        response_data = response.json()
        parsed_text = response_data['ParsedResults'][0]['ParsedText']
        text = parsed_text.strip()
        print("detected text -", text)
        if text == "head" :
            # print(rectangles[i]['x'])
            div_str += "<h1 style='height:#h#px;width:#w#px; position : fixed; left : #x#px; top : #y#px;'>heading</h1>".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width'])).replace(
            "#x#", str(rectangles[i]['x'])).replace("#y#", str(rectangles[i]['y']))
        elif text == "para" :
            # print(rectangles[i])
            div_str += "<p style='height:#h#px;width:#w#px; position : fixed; left : #x#px; top : #y#px;'>para</p>".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width'])).replace(
            "#x#", str(rectangles[i]['x'])).replace("#y#", str(rectangles[i]['y']))
        elif text == "button" :
            # print(rectangles[i])
            div_str += "<button type='button' style='height:#h#px;width:#w#px; position : fixed; left : #x#px; top : #y#px; background : #9C27B0; border : none; border-radius : 50%; color : #fff;'>button</button>".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width'])).replace(
            "#x#", str(rectangles[i]['x'])).replace("#y#", str(rectangles[i]['y']))
        elif text == "sbutton" :
            # print(rectangles[i])
            div_str += "<button type='submit' style='height:#h#px;width:#w#px; position : fixed; left : #x#px; top : #y#px; background : #9C27B0; border : none; border-radius : 50%; color : #fff;'>submit</button>".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width'])).replace(
            "#x#", str(rectangles[i]['x'])).replace("#y#", str(rectangles[i]['y']))
        elif text == "image" :
            # print(rectangles[i])
            div_str += "<img src='a.jpg' style='height:#h#px;width:#w#px; />".replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width']))
        elif text == "anchor":
            if rectangles[i]['y'] < anchor[1] and rectangles[i]['x'] > anchor[0]:
                if navUl == 0:
                    div_str += """<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0"> <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>"""
                else:
                    div_str += """<li class="nav-item">
          <a class="nav-link" href="#">#txt#</a>
        </li>""".replace("#txt#", nav_text[i])
        # .replace("#h#", str(rectangles[i]['height'])).replace("#w#", str(rectangles[i]['width'])).replace("#x#", str(rectangles[i]['x'])).replace("#y#", str(rectangles[i]['y']))
                navUl += 1
            elif rectangles[i]['y'] < anchor2[1] and rectangles[i]['x'] < anchor2[0]:
                if navUl == 0:
                    div_str += """<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>"""
                else:
                    div_str += """<li class="nav-item">
          <a class="nav-link" href="#">#txt#</a>
        </li>""".replace("#txt#", nav_text[i])
                navUl += 1

            elif rectangles[0]['y'] < anchor3[1] and rectangles[0]['x'] < anchor3[0] and rectangles[-1]['x'] > anchor3[0]:
                if navUl == 0:
                    div_str += """<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav justify-content-center mb-2 mb-lg-0" > <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>"""
                else:
                    div_str += """<li class="nav-item">
          <a class="nav-link" href="#">#txt#</a>
        </li>""".replace("#txt#", nav_text[i])
                navUl += 1

    else :
        print("wait times end")
     
# # Write the HTML output to file
with open("code/index.html", "w") as wFile:
    wFile.write("""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible
" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--bootstrap css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" .>
    <title>Document</title>
</head>
<body>
    #div# 
            <!--bootstrap js-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>""".replace("#div#", div_str))
