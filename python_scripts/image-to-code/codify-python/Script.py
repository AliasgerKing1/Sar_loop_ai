import os
import cv2
import numpy as np
import sys
import json

# Get the path to the input image from command-line arguments
# input_path = sys.argv[1]

# Load the input image and convert it to grayscale
# input_img = cv2.imread(input_path)
input_img = cv2.imread("div.png")
gray_img = cv2.cvtColor(input_img, cv2.COLOR_BGR2GRAY)

# Apply a threshold to the grayscale image to get a binary image
_, thresh_img = cv2.threshold(gray_img, 127, 255, cv2.THRESH_BINARY)

# Find the contours in the binary image
contours, hierarchy = cv2.findContours(
    thresh_img, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)

# Loop through the contours and check if each contour is a rectangle
ct = []
for contour in contours:
    approx = cv2.approxPolyDP(
        contour, 0.01 * cv2.arcLength(contour, True), True)
    if len(approx) == 4:
        x, y, w, h = cv2.boundingRect(contour)
        ct.append([x, y, w, h])

# Reverse the order of the rectangles and output as JSON-formatted string
ct.pop(-1)
ct.reverse()
# print(json.dumps(ct))
print(ct)
# path = os.path.abspath("code")
div_temp = "<div style='height:#h#px;width:#w#px;background-color:rgb(85,25,#c#); position : fixed; left : #x#px; top : #y#px;'></div>"
div_str = ""
for i in ct:
    div_str+=div_temp.replace("#h#", str(i[3])).replace("#w#", str(i[2])).replace("#x#", str(i[0])).replace("#y#", str(i[1])).replace("#c#", str(i[0]*10))
with open("code/index.html", "w") as wFile :
    wFile.write("""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="position : relative">
    #div# 
</body>
</html>""".replace("#div#", div_str))