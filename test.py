from bs4 import BeautifulSoup
import json
import requests

r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')

# Finds all of the days and the dd/mm/yy (example: Tue 27/10/20)

numberOfDay = []
days = soup.find_all(class_="record-column mob-col")
for day in days:
    exactday = day.find_all("div", {"class": "record-txt"})
    for day in exactday:
        numberOfDay.append (day.text)
        print(numberOfDay)

# Finds all of the Venues (example: Brands Hatch)

nameOfVenues = []
for venueName in soup.find_all("div", {"class": "record-column"}):
    if "Hatch" in venueName.text:
        nameOfVenues.append (venueName.text.strip())
        print(nameOfVenues)

# Finds all of the names of the track (example: Indy Circuit)

trackNames = []
for trackName in soup.find_all(class_="record-column column-center"):
    if "circuit" in trackName.text:
        trackNames.append (trackName.text.strip())
        print(trackNames)

# Finds all of the specific track formats (example: 4 Groups p/h)

formats = []
for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "Pitlane" in format.text:
        formats.append (format.text.strip())
        print(formats)

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "p/h" in format.text:
        formats.append (format.text.strip())
        print(formats)

for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
    if "Track Day" in format.text:
        formats.append (format.text.strip())
        print(formats)


finishedFormat = ["Date", "Track Name", "Track Venue Name", "Track Fromat"]
trackInfo = ([{"Date":numberOfDay}], {"Track_Name":trackNames}, {"Name_Of_Venue":nameOfVenues}, {"Track_Format":formats})

Date = [{"Date":numberOfDay}]
Track_Name = {"Track_Name":trackNames}
Venue_Name = {"Venue_Name":nameOfVenues}
Track_Format = {"Track_Format":formats}

with open("JSON_Data/Date.json", "w") as write_file:
    json.dump(Date, write_file, indent=4)
with open("JSON_Data/Track_Name.json", "w") as write_file:
    json.dump(Track_Name, write_file, indent=4)
with open("JSON_Data/Venue_Name.json", "w") as write_file:
    json.dump(Venue_Name, write_file, indent=4)
with open("JSON_Data/Track_Format.json", "w") as write_file:
    json.dump(Track_Format, write_file, indent=4)
with open("JSON_Data/JSON_Data/trackinfo.json", "w") as write_file:
    json.dump(trackInfo, write_file, indent=4)


