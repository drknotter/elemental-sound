#!/usr/bin/python 

import os, sys

fin = open(sys.argv[1],'r')
lines = fin.readlines()
fin.close()

fout = open(sys.argv[1]+'.csv','w')
fout.write('wavelength,amplitude\n');
for line in lines:
    data = line.split()
    fout.write('%s,%s\n' % tuple(data))
fout.close()
