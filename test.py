import requests
from bs4 import BeautifulSoup
import csv
r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')
days = soup.find_all(class_="record-column mob-col")
for day in days:
    exactday = day.find_all("div", {"class": "record-txt"})
    for day in exactday:
        print(day.text)

for venueName in soup.find_all("div", {"class": "record-column"}):
    if "Hatch" in venueName.text:
        print(venueName.text.strip())

for trackName in soup.find_all(class_="record-column column-center"):
    if "circuit" in trackName.text:
        print(trackName.text.strip())
