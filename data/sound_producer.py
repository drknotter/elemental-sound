#!/usr/bin/python

import wave, sys
from math import *

fin = open(sys.argv[1],'r')
lines = fin.readlines()
fin.close()

frequencies = []
amplitudes = []

for line in lines:
    data = line.split()
    frequencies.append(2000.0/float(data[0]))
    amplitudes.append(log(float(data[1])))

m = max(amplitudes)
amplitudes = [a/m for a in amplitudes]

signal = []
for i in range(60,8000*61):
    t = i/8000.0
    v = 0
    for j in range(len(frequencies)):
        v += (1.0-exp(-5.0*t))*amplitudes[j]*sin(frequencies[j]*2*pi*660.0*t)
    signal.append(v)
    if( i%8000 == 0 ):
        sys.stdout.write('%i '%(i/8000));
        sys.stdout.flush();
sys.stdout.write('\n');

m = max([abs(s) for s in signal])
signal = [s/(2.0*m) for s in signal]

signal = [s*(2**15-1) for s in signal]

ssignal = ''
for s in signal:
    ssignal += wave.struct.pack('h',s)

wavfile = wave.open(sys.argv[1]+'.wav','wb')
wavfile.setparams((1,2,8000,8000*60,'NONE','noncompressed'))
wavfile.writeframes(ssignal)
wavfile.close()
