function s = make_sound(Fs,T,fname)

    fid = fopen(fname,'r');
    data = fscanf(fid,'%f',[2,inf]);
    fclose(fid);
        
    frequencies = 1./data(1,:)*2000;
    amplitudes = log(data(2,:))/max(log(data(2,:)));
    
    t = 0:1/Fs:T;
    s = zeros(size(t));
    for i=1:length(frequencies)
        s = s + amplitudes(i)*sin(frequencies(i)*2*pi*t*880);
    end

end