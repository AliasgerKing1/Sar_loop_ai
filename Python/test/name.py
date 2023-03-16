import torch
import requests
from PIL import Image
from torchvision import transforms
import gradio as gr

model = torch.hub.load('pytorch/vision:v0.6.0',
                       'resnet18', pretrained=True).eval()


# Download human-readable labels for ImageNet.
with open("labels.txt", "r") as file:
    lines = file.readlines()
labels = [line.strip() for line in lines]


def predict(inp):
    inp = transforms.ToTensor()(inp).unsqueeze(0)
    with torch.no_grad():
        prediction = torch.nn.functional.softmax(model(inp)[0], dim=0)
        confidences = {labels[i]: float(prediction[i]) for i in range(1000)}
    return confidences


gr.Interface(fn=predict,
             inputs=gr.Image(type="pil"),
             outputs=gr.Label(num_top_classes=3)).launch()


# https://modelzoo.co/category/computer-vision
# https://www.tensorflow.org/resources/models-datasets
# https://pytorch.org/hub/
# https://paperswithcode.com/
# https://huggingface.co/
# https://pypi.org/project/pretrainedmodels/
# https://www.kaggle.com/datasets
# https://datasetsearch.research.google.com/
# https://github.com/awesomedata/awesome-public-datasets
