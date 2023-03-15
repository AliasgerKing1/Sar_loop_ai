# from PIL import Image

# def different_colors(rect1, rect2):
#     """Return True if the two rectangles have different colors."""
#     return rect1.getpixel((0, 0)) != rect2.getpixel((0, 0))

# # Load the image
# img = Image.open('div.png')

# # Iterate over the rows of the image
# prev_rect = None
# for y in range(img.height):
#     # Iterate over the rectangles in the row
#     for x in range(img.width):
#         rect = img.crop((x, y, x+1, y+1))
#         if prev_rect is None:
#             # First rectangle in the row, start a new image
#             prev_rect = rect
#             output_img = Image.new(rect.mode, (1, 1), rect.getpixel((0, 0)))
#         elif different_colors(rect, prev_rect):
#             # Different color than previous rectangle, save previous image
#             output_img.save('images/output{}.png'.format(y))
#             # Start a new image with the current rectangle
#             output_img = Image.new(rect.mode, (1, 1), rect.getpixel((0, 0)))
#             prev_rect = rect
#         else:
#             # Same color as previous rectangle, add to current image
#             rect = rect.convert(output_img.mode) # convert to same mode
#             output_img = Image.alpha_composite(output_img, rect)

# # Save the final image
# output_img.save('images/output{}.png'.format(y))

import cv2
import numpy as np

# Load the input image and convert it to grayscale
input_img = cv2.imread('image.png')
gray_img = cv2.cvtColor(input_img, cv2.COLOR_BGR2GRAY)

# Apply a threshold to the grayscale image to get a binary image
_, thresh_img = cv2.threshold(gray_img, 127, 255, cv2.THRESH_BINARY)

# Find the contours in the binary image
contours, hierarchy = cv2.findContours(thresh_img, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
# print("hira",hierarchy)
# print("count",contours)
# Loop through the contours and check if each contour is a rectangle
ct=[]
for contour in contours:
    # print("count",contour)
    approx = cv2.approxPolyDP(contour, 0.01 * cv2.arcLength(contour, True), True)
    print(len(approx))
    if len(approx) == 4:
        print("hk")
        x, y, w, h = cv2.boundingRect(contour)
        ct.append([x,y,w,h])
        cv2.rectangle(input_img, (x, y), (x + w, y + h), (0, 255, 0), 2)
# print(x,y,w,h)
# Display the input image with the detected rectangles
ct.pop(-1)
ct.reverse()
print(ct)
cv2.imshow('Detected Rectangles', input_img)
cv2.waitKey(0)
cv2.destroyAllWindows()
