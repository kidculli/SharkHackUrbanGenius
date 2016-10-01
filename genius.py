from bs4 import BeautifulSoup
import urllib.request

class Genius:

    def __init__(self):
        self.URL = ''
        self.html_source = ''

    def get_URL(self, URL):
        self.URL = URL
        self.header = urllib.request.Request(self.URL, headers={'User-Agent' : "Magic Browser"})
        self.html_source = urllib.request.urlopen(self.header)
        self.soup = BeautifulSoup(self.html_source, 'html.parser')

    def get_lyrics(self):
        lyrics = self.soup.find('div','song_body-lyrics')
        print(lyrics.get_text())

lyrics = Genius()

if (!(URL.find("http"))):
    lyrics.get_URL('http://' + URL)
else:
    lyrics.get_URL(URL)
lyrics.get_lyrics()
