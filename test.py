from bs4 import BeautifulSoup
import json
import requests

r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')

days = soup.find_all(class_="ddd-hide")

print(days)
# for row in rows:


# <div class="record-txt"><span class="ddd-hide">Mon</span> 07/12/20</div>
# with open("Trackname_table/test.json", "w") as write_file:
#                 json.dump(janis, write_file, indent=4)