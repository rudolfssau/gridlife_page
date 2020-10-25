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
    finalDate = {"Date": completeDate_n}


# Finds all of the venue names (example: Brand Hatch)


nameOfVenue = []
name = soup.find_all("div", {"class": "record-column"})
for row in name:
    if "Hatch" in row.text:
        nameOfVenue = {"Venue": row.text.strip()}


# Finds all of the track names (example: Indy circuit)


trackName = []
value  = soup.find_all(class_="record-column column-center")
for row in value:
    if "circuit" in row.text.strip():
        trackName = {"Track": row.text.strip()}


# Finds all of the track formats (example: Open Pitlane Track Day)


trackFormat = []
for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "Pitlane" in format.text:
        trackFormat = {"Format": format.text.strip()}

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "p/h" in format.text:
        trackFormat = {"Format": format.text.strip()}

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "Track Day" in format.text:
        trackFormat = {"Format": format.text.strip()}

# Assign a variable to each of the elements (Compiles all of the lists)

trackFormat = [trackFormat for format in soup.find_all("div", {"class": "record-column pad-hide column-center"})]
finalDate = [finalDate for days in soup.find_all(class_="ddd-hide")]
trackName = [trackName for row in value if "circuit" in row.text.strip()]
nameOfVenue = [nameOfVenue for row in name if "Hatch" in row.text.strip()]

# Join each variable together in a specific order

zipped_values = list(zip(finalDate, nameOfVenue, trackFormat, trackName))

# Dumps it into a JSON file

with open("JSON_Data/mergedfiles.json", "w") as write_file:
        json.dump(zipped_values, write_file, indent=4)