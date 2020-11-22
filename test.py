from bs4 import BeautifulSoup
import csv
import requests

r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')

day = soup.find_all(class_="ddd-hide")
venue = soup.find_all("div", {"class": "record-column"})
track_Name = soup.find_all(class_="record-column column-center")
track_Format = soup.find_all("div", {"class": "record-column pad-hide column-center"})

rows = soup.find_all(class_="trackdays-table-left")
print(rows)
for row in rows:
    days = row.select(".record-txt .ddd-hide")
    dayz = days.nextSibling
    print(days)

# <div class="record-txt"><span class="ddd-hide">Mon</span> 07/12/20</div>