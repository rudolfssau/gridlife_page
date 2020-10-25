from bs4 import BeautifulSoup
import json
import requests

r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')


# Finds all of the days and the dd/mm/yy (example: Tue 27/10/20)


finalDate = []
for days in soup.find_all(class_="ddd-hide"):
    dateFormated = days.nextSibling
    nameOfDate = days.text.strip()
    completeDate_n = nameOfDate + dateFormated
    finalD = {"Date": completeDate_n}
    finalDate.append(finalD)


# Finds all of the venue names (example: Brand Hatch)


nameOfVenue = []
name = soup.find_all("div", {"class": "record-column"})
for row in name:
    if "Hatch" in row.text:
        nameOfV = {"Venue": row.text.strip()}
        nameOfVenue.append(nameOfV)


# Finds all of the track names (example: Indy circuit)


trackName = []
value  = soup.find_all(class_="record-column column-center")
for row in value:
    if "circuit" in row.text.strip():
        trackN = {"Track": row.text.strip()}
        trackName.append(trackN)


# Finds all of the track formats (example: Open Pitlane Track Day)


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


# Joins each variable together in a specific order


zipped_values = list(zip(finalDate, nameOfVenue, trackName, trackFormat))
print(zipped_values)


# Dumps it into a local JSON file


with open("JSON_Data/trackInfo.json", "w") as write_file:
        json.dump(zipped_values, write_file, indent=4)









