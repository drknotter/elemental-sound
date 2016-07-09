#!/usr/bin/python

import os,sys
from math import *

def wavelength_to_hue(w):
    if( w > 620.0 ): #620->30, 750->0, red
        return 30.0*(1.0-(w-620.0)/130.0)
    elif( w > 590.0 ): #590->45, 620->30, orange
        return 15.0*(1.0-(w-590.0)/30.0)+30.0
    elif( w > 570.0 ): #570->75, 590->45, yellow
        return 30.0*(1.0-(w-570.0)/20.0)+45.0
    elif( w > 495.0 ): #495->150, 570->75, green
        return 75.0*(1.0-(w-495.0)/75.0)+75.0
    elif( w > 476.0 ): #476->195, 570->150, cyan
        return 45.0*(1.0-(w-476.0)/94.0)+150.0
    elif( w > 450.0 ): #450->270, 476->195, blue
        return 75.0*(1.0-(w-450.0)/26.0)+195.0
    else: #380->300, 450->270, violet
        return 30.0*(1.0-(w-380.0)/70.0)+270.0

fin = open(sys.argv[1],'r')
lines = fin.readlines()
fin.close()

data = [line.split() for line in lines]

fout = open(sys.argv[1]+'.csv','w')
fout.write('percent,R,G,B\n')

wavelengths = range(380,781,8)
lightness = []
for wavelength in wavelengths:
    lightness.append(0)
    for d in data:
        w,p = float(d[0])/10.0,float(d[1])
        if( abs(w-wavelength) < 8 ):
            lightness[-1] += p*(1.0-abs((wavelength-w)/8.0))
    lightness[-1] = log(lightness[-1]+1)

lMax = max(lightness)
if( lMax <= 0.0 ):
    for i in range(0,101,2):
        fout.write('%i,0,0,0\n'%i)
    fout.close()
else:
    for i in range(len(wavelengths)):

        hue = wavelength_to_hue(wavelengths[i])/60.0
        L = lightness[i]/(2.0*lMax)
        chroma = 1.0-abs(2.0*L-1.0)
        X = chroma*(1.0-abs(hue%2.0-1.0))
        
        if( hue < 1.0 ):
            r,g,b = chroma,X,0
        elif( hue < 2.0 ):
            r,g,b = X,chroma,0
        elif( hue < 3.0 ):
            r,g,b = 0,chroma,X
        elif( hue < 4.0 ):
            r,g,b = 0,X,chroma
        elif( hue < 5.0 ):
            r,g,b = X,0,chroma
        else:
            r,g,b = chroma,0,X

        m = L-0.5*chroma
        r,g,b = int(255*(r+m)),int(255*(g+m)),int(255*(b+m))
        
        fout.write('%f,%i,%i,%i\n' % (2.0*(wavelengths[i]-380.0)/8.0,r,g,b))

    fout.close()
