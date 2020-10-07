import requests
from bs4 import BeautifulSoup
import csv
r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')
days = soup.find_all(class_="record-column mob-col")
for day in days:
    exactday = day.find_all(class_="ddd-hide")
    for day in exactday:
        print(day.text)
# days_numbered_0 = soup.find_all(class_="ddd-hide")
# for day_nr in days_numbered:
#     days_numbered = days_numbered_0
#     for day_nr in days_numbered:
#             print(days_numbered.text)
# trackName_obj = soup.find(class_="record-column column-center").findNext(class_='record-txt')
# for trackNames in trackName_obj:
#     trackName = trackName_obj.text.strip()
#     for trackNames in trackName[0:8]:
#             print(trackName)
for track in soup.find_all(class_="record-column column-center"):
    trackFormat = track.find_all(class_="record-txt")[1]
    for track in trackFormat:
        print(trackFormat)


# for trackFromats in trackFormat_obj:
#     trackFormat = trackFormat_obj
# print(trackFormat.text)
#     trackFormat = trackFormat_obj.text.strip()
#     for trackFromats in trackFormat[0:8]:
#             print(trackFormat)
