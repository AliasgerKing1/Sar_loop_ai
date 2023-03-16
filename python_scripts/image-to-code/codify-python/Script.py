import cv2
import numpy as np
import sys
import json

# Get the path to the input image from command-line arguments
input_path = sys.argv[1]

# Load the input image and convert it to grayscale
input_img = cv2.imread(input_path)
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
print(json.dumps(ct))
