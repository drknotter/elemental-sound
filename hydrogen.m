function h = hydrogen(n,Fs,T)

    t = [0:1/Fs:T];
    h = zeros(size(t));
    for i=2:n
        h = h + sin((1-1/i^2)*2*pi*t*440) + sin((1/4-1/(i+1)^2)*2*pi*t*440);
    end

end