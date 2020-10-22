from bs4 import BeautifulSoup
import json
import requests

r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')

# Finds all of the days and the dd/mm/yy (example: Tue 27/10/20)

finalDate = []
for days in soup.find_all(class_="ddd-hide"):
    dateFormated = days.nextSibling
    nameOfDate = days.text
    completeDate_n = nameOfDate + dateFormated
    finalDates = {"Date": completeDate_n}
    finalDate.append(finalDates)

# Finds all of the Venues (example: Brands Hatch)

nameOfVenue = []
for venueName in soup.find_all("div", {"class": "record-column"}):
    if "Hatch" in venueName.text:
        nameOfV = {"Venue": venueName.text.strip()}
        nameOfVenue.append(nameOfV)

# Finds all of the names of the track (example: Indy Circuit)

trackNames = []
for trackName in soup.find_all(class_="record-column column-center"):
    if "circuit" in trackName.text:
        trackN = {"Track": trackName.text.strip()}
        trackNames.append(trackN)
        print(trackNames)

# Finds all of the specific track formats (example: 4 Groups p/h)

trackFormat = []
for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "Pitlane" in format.text:
        fmat = {"Format": format.text.strip()}
        trackFormat.append(fmat)

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "p/h" in format.text:
        fmat = {"Format": format.text.strip()}
        trackFormat.append(fmat)

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "Track Day" in format.text:
        fmat = {"Format": format.text.strip()}
        trackFormat.append(fmat)

with open("JSON_Data/Date.json", "w") as write_file:
        json.dump(finalDate, write_file, indent=4)
with open("JSON_Data/Track_Name.json", "w") as write_file:
        json.dump(trackNames, write_file, indent=4)
with open("JSON_Data/Venue_Name.json", "w") as write_file:
        json.dump(nameOfVenue, write_file, indent=4)
with open("JSON_Data/Track_Format.json", "w") as write_file:
        json.dump(trackFormat, write_file, indent=4)


