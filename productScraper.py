from bs4 import BeautifulSoup
import json
import requests

r = requests.get("https://shop.grid.life/")
soup = BeautifulSoup(r.text, 'html.parser')

janis = soup.find(class_="grid grid--uniform grid--view-items")
print(janis)