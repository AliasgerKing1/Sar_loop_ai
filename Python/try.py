import cv2
import numpy as np

# Load the image
img = cv2.imread("image.png")

# Convert the image to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Apply thresholding to binarize the image
thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)[1]

# Find contours in the image
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

# Initialize variables to keep track of the header and the previous division's end
header = None
prev_end = 0

# Loop through the contours to find the divisions
for contour in contours:
    x, y, w, h = cv2.boundingRect(contour)
    area = cv2.contourArea(contour)
    perimeter = cv2.arcLength(contour, True)
    aspect_ratio = float(w)/h
    
    # Check if the contour matches the desired pattern for the header
    if area > 5000 and aspect_ratio > 5.0:
        header = (x, y, w, h)  # Save the header coordinates
        continue  # Skip to the next contour
    
    # Check if the header has been found yet
    if header is None:
        continue  # Skip to the next contour
    
    # Check if the contour is a division
    if y > header[1] + header[3] and x < prev_end:
        continue  # Skip to the next contour
        
    # Get the average color of the division
    mask = np.zeros(thresh.shape, dtype=np.uint8)
    cv2.drawContours(mask, [contour], -1, 255, -1)
    avg_color = cv2.mean(img, mask=mask)[:3]
    
    # Check if the division color is different from the header color
    header_crop = img[header[1]:header[1]+header[3], header[0]:header[0]+header[2]]
    header_color = cv2.mean(header_crop)[:3]
    if np.abs(avg_color - header_color).sum() < 30:
        continue  # Skip to the next contour
    
    # Save the division image to a file
    division = img[y:y+h, x:x+w]
    cv2.imwrite(f"division_{x}.png", division)
    prev_end = x + w
    
cv2.imshow("image", img)
cv2.waitKey()
