# # I:\Sar_loop_ai\python_scripts\image-to-code\codify-python
# import os
# import cv2
# import numpy as np
# from shapely.geometry import Point, LineString, Polygon
# import matplotlib.pyplot as plt

# # Load the input image and convert it to grayscale
# input_img = cv2.imread("box.png")
# gray_img = cv2.cvtColor(input_img, cv2.COLOR_BGR2GRAY)

# # Apply a threshold to the grayscale image to get a binary image
# _, thresh_img = cv2.threshold(gray_img, 127, 255, cv2.THRESH_BINARY)

# # Find the contours in the binary image
# contours, hierarchy = cv2.findContours(
#     thresh_img, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)

# rectangles = []
# triangles = []

# for contour in contours:
#     approx = cv2.approxPolyDP(
#         contour, 0.01 * cv2.arcLength(contour, True), True)
#     if len(approx) == 4:  # Check if it's a rectangle
#         rectangles.append(Polygon(approx.reshape((-1, 2))))
#     elif len(approx) == 3:  # Check if it's a triangle
#         triangles.append(Polygon(approx.reshape((-1, 2))))

# # Reverse the order of the rectangles and output as JSON-formatted string
# rectangles.pop(-1)
# rectangles.reverse()
# # count the number of rectangles and triangles


# def is_shape_inside(shape, rect):
#     """
#     Returns True if the shape is completely inside the rectangle rect,
#     otherwise False.
#     """
#     left, top, right, bottom = rect.bounds
#     rect_contour = np.array(rect.exterior.coords, dtype=np.int32)
#     x, y, width, height = cv2.boundingRect(rect_contour)
#     rect = [x, y, x+width, y+height]
#     shape_left, shape_top, shape_right, shape_bottom = shape.bounds
#     return (shape_left >= left and shape_top >= top and
#             shape_right <= right and shape_bottom <= bottom)


# num_rectangles = len(rectangles)
# num_triangles = len(triangles)

# # print(f"Number of rectangles: {num_rectangles}")
# # print(f"Number of triangles: {num_triangles}")

# # Create a dictionary to map each rectangle to its index
# rect_dict = {i: rect for i, rect in enumerate(rectangles)}

# # Find the rectangles containing triangles
# tri_rectangles = []
# for i, rectangle in rect_dict.items():
#     for triangle in triangles:
#         if is_shape_inside(triangle, rectangle):
#             tri_rectangles.append(i)
#             break

# # Replace rectangles containing triangles with images
# div_temp = "<div style='height:#h#px;width:#w#px; background-color: #color#; position : fixed; left : #x#px; top : #y#px;'></div>"
# div_str = ""
# for i, rect in rect_dict.items():
#     left, top, right, bottom = rect.bounds
#     if i in tri_rectangles:
#         # Replace rectangle with image
#         img = cv2.imread('a.jpg')
#         height, width, _ = img.shape
#         div_str += "<img src='#img#' style='height:#h#px;width:#w#px; background-size:cover; position : fixed; left : #x#px; top : #y#px;' />".replace("#h#", str(bottom-top)).replace("#w#", str(right-left)).replace(
#             "#x#", str(left)).replace("#y#", str(top)).replace("#img#", 'a.jpg')
#     else:
#         # Add rectangle as div
#         div_str += div_temp.replace("#h#", str(bottom-top)).replace("#w#", str(right-left)).replace(
#             "#x#", str(left)).replace("#y#", str(top)).replace("#color#", 'red')

# with open("code/index2.html", "w") as wFile:
#     wFile.write("""<!DOCTYPE html>
# <html lang="en">
# <head>
#     <meta charset="UTF-8">
#     <meta http-equiv="X-UA-Compatible" content="IE=edge">
#     <meta name="viewport" content="width=device-width, initial-scale=1.0">
#     <title>Document</title>
# </head>
# <body style="position : relative">
#     #div# 
# </body>
# </html>""".replace("#div#", div_str))

# I:\Sar_loop_ai\python_scripts\image-to-code\codify-python
import os
import cv2
import numpy as np
from shapely.geometry import Point, LineString, Polygon
import matplotlib.pyplot as plt

# Load the input image and convert it to grayscale
input_img = cv2.imread("page.png")
gray_img = cv2.cvtColor(input_img, cv2.COLOR_BGR2GRAY)

# Apply a threshold to the grayscale image to get a binary image
_, thresh_img = cv2.threshold(gray_img, 127, 255, cv2.THRESH_BINARY)

# Find the contours in the binary image
contours, hierarchy = cv2.findContours(
    thresh_img, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)

rectangles = []
triangles = []
circle = []
div_str = ""

def is_contour_inside_rect(contour, rect):
    x,y,w,h = rect
    rect_area = w*h
    contour_area = cv2.contourArea(contour)
    # Check if the contour area is less than the rectangle area
    # and the bounding rectangle of the contour is inside the rectangle
    if contour_area < rect_area and rect[0] <= x and rect[1] <= y and rect[0]+rect[2] >= x+w and rect[1]+rect[3] >= y+h:
        return True
    else:
        return False

for contour in contours:
    approx = cv2.approxPolyDP(contour, 0.01 * cv2.arcLength(contour, True), True)
    if len(approx) == 4:  # Check if it's a rectangle
        # Get the coordinates of the four corners of the rectangle
        x1, y1 = approx[0][0]
        x2, y2 = approx[1][0]
        x3, y3 = approx[2][0]
        x4, y4 = approx[3][0]
        rectangles.append(Polygon(approx.reshape((-1, 2))))
    elif len(approx) == 3:  # Check if it's a triangle
        triangles.append(Polygon(approx.reshape((-1, 2))))
    elif len(approx) >= 5 and len(approx) <= 20:  # Check if it's a circle
        area = cv2.contourArea(contour)
        perimeter = cv2.arcLength(contour, True)
        circularity = 4 * np.pi * area / (perimeter ** 2)
        if circularity > 0.7:  # Set a threshold for circularity
            center, radius = cv2.minEnclosingCircle(contour)
            circle.append((center, radius))
            x, y = int(center[0]), int(center[1])
            r = int(radius)

            div_str += f"<button style='height:{2*r}px;width:{2*r}px;background-color:green;position:fixed;left:{x-r}px;top:{y-r}px;'></button>"
# Reverse the order of the rectangles and output as JSON-formatted string
rectangles.pop(-1)

rectangles.reverse()
# count the number of rectangles and triangles


def is_shape_inside(shape, rect):
    """
    Returns True if the shape is completely inside the rectangle rect,
    otherwise False.
    """
    left, top, right, bottom = rect.bounds
    rect_contour = np.array(rect.exterior.coords, dtype=np.int32)
    x, y, width, height = cv2.boundingRect(rect_contour)
    rect = [x, y, x+width, y+height]
    shape_left, shape_top, shape_right, shape_bottom = shape.bounds
    return (shape_left >= left and shape_top >= top and
            shape_right <= right and shape_bottom <= bottom)


num_rectangles = len(rectangles)
num_triangles = len(triangles)

# print(f"Number of rectangles: {num_rectangles}")
# print(f"Number of triangles: {num_triangles}")

# Create a dictionary to map each rectangle to its index
rect_dict = {i: rect for i, rect in enumerate(rectangles)}
# Find the rectangles containing triangles
tri_rectangles = []
for i, rectangle in rect_dict.items():
    for triangle in triangles:
        if is_shape_inside(triangle, rectangle):
            tri_rectangles.append(i)
            break

# Replace rectangles containing triangles with images
div_temp = "<div style='height:#h#px;width:#w#px; background-color: #color#; position : fixed; left : #x#px; top : #y#px;'></div>"
for i, rect in rect_dict.items():
    left, top, right, bottom = rect.bounds
    if i in tri_rectangles:
        # Replace rectangle with image
        img = cv2.imread('a.jpg')
        height, width, _ = img.shape
        div_str += "<img src='#img#' style='height:#h#px;width:#w#px; background-size:cover; position : fixed; left : #x#px; top : #y#px;' />".replace("#h#", str(bottom-top)).replace("#w#", str(right-left)).replace(
            "#x#", str(left)).replace("#y#", str(top)).replace("#img#", 'a.jpg')
    # elif 
    else:
        # Add rectangle as div
        div_str += div_temp.replace("#h#", str(bottom-top)).replace("#w#", str(right-left)).replace(
            "#x#", str(left)).replace("#y#", str(top)).replace("#color#", 'blue')

# # Write the HTML output to file
with open("code/index.html", "w") as wFile:
    wFile.write("""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible
" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="position : relative">
    #div# 
</body>
</html>""".replace("#div#", div_str))
