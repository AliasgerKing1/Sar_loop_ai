from PIL import Image

image = Image.open("image.png")

width, height = image.size

threshold = 50

sections = []
top = 0
for y in range(height):
    bottom = y
    color_top = image.getpixel((0, top))
    color_bottom = image.getpixel((0, bottom))
    color_diff = sum(abs(color_top[i] - color_bottom[i]) for i in range(3))
    if color_diff > threshold:
        sections.append((top, bottom))
        top = bottom
sections.append((top, height))

for i, (top, bottom) in enumerate(sections):
    section_image = image.crop((0, top, width, bottom))
    section_image.save(f"section{i}.png")

