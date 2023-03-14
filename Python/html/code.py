from PIL import Image

def different_colors(rect1, rect2):
    """Return True if the two rectangles have different colors."""
    return rect1.getpixel((0, 0)) != rect2.getpixel((0, 0))

# Load the image
img = Image.open('div.png')

# Iterate over the rows of the image
prev_rect = None
for y in range(img.height):
    # Iterate over the rectangles in the row
    for x in range(img.width):
        rect = img.crop((x, y, x+1, y+1))
        if prev_rect is None:
            # First rectangle in the row, start a new image
            prev_rect = rect
            output_img = Image.new(rect.mode, (1, 1), rect.getpixel((0, 0)))
        elif different_colors(rect, prev_rect):
            # Different color than previous rectangle, save previous image
            output_img.save('images/output{}.png'.format(y))
            # Start a new image with the current rectangle
            output_img = Image.new(rect.mode, (1, 1), rect.getpixel((0, 0)))
            prev_rect = rect
        else:
            # Same color as previous rectangle, add to current image
            rect = rect.convert(output_img.mode) # convert to same mode
            output_img = Image.alpha_composite(output_img, rect)

# Save the final image
output_img.save('images/output{}.png'.format(y))
