from urllib.request import urlopen
from bs4 import BeautifulSoup
import json
import requests


r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')

# writer.writerow(["Date, Track Fromat, Track Name, Price"])

# Finds all of the days and the dd/mm/yy (example: Tue 27/10/20)

days = soup.find_all(class_="record-column mob-col")
for day in days:
    exactday = day.find_all("div", {"class": "record-txt"})
    for day in exactday:
        print(day.text)

# Finds all of the Venues (example: Brands Hatch)

for venueName in soup.find_all("div", {"class": "record-column"}):
    if "Hatch" in venueName.text:
        venueName.text.strip()

# Finds all of the names of the track (example: Indy Circuit)

for trackName in soup.find_all(class_="record-column column-center"):
    if "circuit" in trackName.text:
        trackName.text.strip()

# Finds all of the specific track formats (example: 4 Groups p/h)

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "Pitlane" in format.text:
        format.text.strip()

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "p/h" in format.text:
        format.text.strip()

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "Track Day" in format.text:
        format.text.strip()

finishedFormat = ["Date", "Track Name", "Track Venue Name", "Track Fromat"]

with open("tracklistinfo.json", "w") as writeJSON:
    json.dump(finishedFormat, writeJSON, ensure_ascii=False)
