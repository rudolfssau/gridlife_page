import requests
from bs4 import BeautifulSoup
import csv
r = requests.get("https://www.trackdays.co.uk/track-days/brands-hatch/")
soup = BeautifulSoup(r.text, 'html.parser')
type(soup)
posts = soup.find_all(class_= "record-row clearfix")
file = open('/Users/rudolfssaukums/.bitnami/stackman/machines/xampp/volumes/root/htdocs/Gridlife_page/janis.json', 'w')
writer = csv.writer(file)
writer.writerow(["Date, Track Fromat, Track Name, Price"])
for post in posts:
    date = post.find(class_="record-txt").text.strip()
    trackFromat = post.find(class_="record-column pad-hide column-center").text.strip()
    trackName = post.find(class_="record-column column-center").text.strip()
    price = post.find(class_="column-center table-button clearfix").text.strip()
print(date + " " + trackFromat + " " + trackName + " " + price)
writer.writerow([date,"" trackFromat, trackName, price])
file.close()    