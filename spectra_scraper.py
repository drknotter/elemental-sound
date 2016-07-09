#!/usr/bin/python

import urllib, urllib2, re, string, subprocess, sys, sqlite3
from BeautifulSoup import BeautifulSoup, NavigableString
from datetime import datetime

def getStringFromContents(c):
    s = '';
    for item in c:
        if isinstance(item,NavigableString):
            s += item;
    return s;

content = urllib2.urlopen('http://physics.nist.gov/PhysRefData/Handbook/Tables/'+sys.argv[1]+'table2.htm').read();
soup = BeautifulSoup(content);

tables = soup.findAll('table',{'border':'0','cellpadding':'0','cellspacing':'0','bgcolor':'#FFFFEE'});
trs = [];
for tag in tables:
    trs.extend(tag.findAll('tr',{'rowspan':None,'colspan':None,'bgcolor':None,'align':None}));
tds = [];
for tag in trs:
    tds.extend(tag.findAll('td',{'rowspan':None,'colspan':None}));

tds = map(lambda tag: getStringFromContents(tag.contents), tds);
tds = map(lambda item: re.sub('&nbsp;','',item), tds);
tds = map(lambda item: re.sub('\s','',item), tds);
tds = map(lambda item: re.sub(',','',item), tds);
tds[0:-1:4] = map(lambda item: re.sub('[bBcCdDhHlLrRsSuUwWpP]','',item), tds[0:-1:4]);

lines = [tds[4*l:4*l+3] for l in range(len(tds)/4)];

length = len(lines);
i = 0;
while( i < length ):
    if( re.search('\*',lines[i][0]) ):
        while( lines[i+1][0] == lines[i][0] ):
            del lines[i+1];
            length -= 1;
        lines[i][0] = re.sub('\*','',lines[i][0]);
    i += 1;

for ion in set(tds[2:-1:4]):
    f = open(ion+'.data','w');
    for i in range(len(lines)):
        if( lines[i][2] == ion and lines[i][0] != '' ):
            f.write('% .12e % .12e\n' % (float(lines[i][1]),float(lines[i][0])));
