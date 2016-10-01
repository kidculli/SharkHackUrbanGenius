from bs4 import BeautifulSoup
import urllib.request
import sys

class Genius:

    def __init__(self, URL):
        self.URL = URL
        self.html_source = ''

    def get_URL(self, URL):
        self.header = urllib.request.Request(self.URL, headers={'User-Agent' : "Magic Browser"})
        self.html_source = urllib.request.urlopen(self.header)
        self.soup = BeautifulSoup(self.html_source, 'html.parser')

    def get_lyrics(self):
        bad = 'googletag'
        lyrics = self.soup.find('div','song_body-lyrics')
        message = lyrics.get_text()
        for item in message.split('\n'):
            if (bad in item):
                strip = (item.strip()[0:91])
        print(message.replace(strip,'\n'))




#URL = 'http://genius.com/Beyonce-sorry-lyrics'
URL = sys.argv[1]
lyrics = Genius(URL)

if (not URL.find("http")):
    lyrics.get_URL('http://' + URL)
else:
    lyrics.get_URL(URL)
lyrics.get_lyrics()
