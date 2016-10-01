from flask import Flask, request
from bs4 import BeautifulSoup
import urllib.request

import cherrypy
import json
app = Flask(__name__)
@app.route('/lyric', methods=['GET'])
def getLyric():
    print('asdfasdfadsf')
    url = request.args.get('geniusurl')
    if (not url.find("http")):
        url = 'http://' + url
    header = urllib.request.Request(url, headers={'User-Agent' : "Magic Browser"})
    html_source = urllib.request.urlopen(header)
    soup = BeautifulSoup(html_source, 'html.parser')
    bad = 'googletag'
    lyrics = soup.find('div','song_body-lyrics')
    message = lyrics.get_text()
    for item in message.split('\n'):
        if (bad in item):
            strip = (item.strip()[0:91])
    message = message.replace(strip, '\n')
    message = message.replace('\n', '<br>')
    message = '<p>' + message + '</p>'
    print(message)
    return message

if __name__ == '__main__':
    app.run()