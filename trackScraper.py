from bs4 import BeautifulSoup
import json
import requests

r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')


# Finds all of the days and the dd/mm/yy (example: Tue 27/10/20)

dateForDiv = []
finalDate = []
for days in soup.find_all(class_="ddd-hide"):
    dateFormated = days.nextSibling
    nameOfDate = days.text.strip()
    completeDate_n = nameOfDate + dateFormated
    dfD = {"DateShortened": nameOfDate + " " + dateFormated[1] + dateFormated[2]}
    finalD = "Date: " + completeDate_n
#   For displaying the full date "'Date': 'Mon 14/12/20'":
    finalDate.append(finalD)
#   For displaying "Mon 12" for the element when not hovering over it:
    dateForDiv.append(dfD)


# Finds all of the venue names (example: Brand Hatch)


nameOfVenue = []
item_nameOfVenue = {}
name = soup.find_all("div", {"class": "record-column"})
for row in name:
    if "Hatch" in row.text:
        item_nameOfVenue["Venue Name"] = row.text.strip()
        nameOfVenue.append(item_nameOfVenue)

# print(item_nameOfVenue)
janis = [row.text.strip() for row in name]
print(janis)
# Finds all of the track names (example: Indy circuit)


# trackName = []
# item_trackName = {}
# value  = soup.find_all(class_="record-column column-center")
# for row in value:
#     if "circuit" in row.text.strip():
#         item_trackName["Track Name"] = row.text.strip()
#         trackName.append(item_trackName)
#
#
# # Finds all of the track formats (example: Open Pitlane Track Day)
#
#
# trackFormat = []
# for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
#     if "Pitlane" in format.text:
#         fmat = "Format: " + format.text.strip()
#         trackFormat.append(fmat)
#
# for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
#     if "p/h" in format.text:
#         fmat = "Format: " + format.text.strip()
#         trackFormat.append(fmat)
#
# for format in soup.find_all("div", {"class": "record-column pad-hide column-center"}):
#     if "Track Day" in format.text:
#         fmat = "Format: " + format.text.strip()
#         trackFormat.append(fmat)

with open("Trackname_table/test.json", "w") as write_file:
        json.dump(janis, write_file, indent=4)


# file = open("Trackname_table/trackInfo.csv", "w")
# writer = csv.writer(file)
#
# writer.writerow(["Track Name", "Date", "Venue", "Format"])
#
# writer.writerow([trackName, finalDate, nameOfVenue, trackFormat])
#
# file.close()










