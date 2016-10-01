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
        lyrics = self.soup.find('div','song_body-lyrics')
        message = lyrics.get_text()
        print(lyrics.get_text())


#song = sys.stdin.read()
URL = 'http://genius.com/Beyonce-sorry-lyrics'
#print9 (song)
#print ('hi')
lyrics = Genius(URL)

if (not URL.find("http")):
    lyrics.get_URL('http://' + URL)
else:
    lyrics.get_URL(URL)
lyrics.get_lyrics()
