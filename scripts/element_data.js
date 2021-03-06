var tableMap = [[  0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  1],
                [  2,  3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  4,  5,  6,  7,  8,  9],
                [ 10, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12, 13, 14, 15, 16, 17],
                [ 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
                [ 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
                [ 54, 55, -1, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],
                [ 86, 87, -1,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117],
                [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                [ -1, -1, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, -1],
                [ -1, -1, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100,101,102, -1]];

var elementData = [{symbol: "H",   ions: 1, atomicNumber:   1, color: 0},
									 {symbol: "He",  ions: 2, atomicNumber:   2, color: 1},
                   {symbol: "Li",  ions: 2, atomicNumber:   3, color: 2},
                   {symbol: "Be",  ions: 2, atomicNumber:   4, color: 3},
                   {symbol: "B",   ions: 2, atomicNumber:   5, color: 4},
                   {symbol: "C",   ions: 2, atomicNumber:   6, color: 0},
                   {symbol: "N",   ions: 2, atomicNumber:   7, color: 0},
                   {symbol: "O",   ions: 2, atomicNumber:   8, color: 0},
                   {symbol: "F",   ions: 2, atomicNumber:   9, color: 5},
                   {symbol: "Ne",  ions: 2, atomicNumber:  10, color: 1},
                   {symbol: "Na",  ions: 2, atomicNumber:  11, color: 2},
                   {symbol: "Mg",  ions: 2, atomicNumber:  12, color: 3},
                   {symbol: "Al",  ions: 2, atomicNumber:  13, color: 6},
                   {symbol: "Si",  ions: 2, atomicNumber:  14, color: 4},
                   {symbol: "P",   ions: 2, atomicNumber:  15, color: 0},
                   {symbol: "S",   ions: 2, atomicNumber:  16, color: 0},
                   {symbol: "Cl",  ions: 2, atomicNumber:  17, color: 5},
                   {symbol: "Ar",  ions: 2, atomicNumber:  18, color: 1},
                   {symbol: "K",   ions: 2, atomicNumber:  19, color: 2},
                   {symbol: "Ca",  ions: 2, atomicNumber:  20, color: 3},
                   {symbol: "Sc",  ions: 2, atomicNumber:  21, color: 7},
                   {symbol: "Ti",  ions: 2, atomicNumber:  22, color: 7},
                   {symbol: "V",   ions: 2, atomicNumber:  23, color: 7},
                   {symbol: "Cr",  ions: 2, atomicNumber:  24, color: 7},
                   {symbol: "Mn",  ions: 2, atomicNumber:  25, color: 7},
                   {symbol: "Fe",  ions: 2, atomicNumber:  26, color: 7},
                   {symbol: "Co",  ions: 2, atomicNumber:  27, color: 7},
                   {symbol: "Ni",  ions: 2, atomicNumber:  28, color: 7},
                   {symbol: "Cu",  ions: 2, atomicNumber:  29, color: 7},
                   {symbol: "Zn",  ions: 2, atomicNumber:  30, color: 7},
                   {symbol: "Ga",  ions: 2, atomicNumber:  31, color: 6},
                   {symbol: "Ge",  ions: 2, atomicNumber:  32, color: 4},
                   {symbol: "As",  ions: 2, atomicNumber:  33, color: 4},
                   {symbol: "Se",  ions: 2, atomicNumber:  34, color: 0},
                   {symbol: "Br",  ions: 2, atomicNumber:  35, color: 5},
                   {symbol: "Kr",  ions: 2, atomicNumber:  36, color: 1},
                   {symbol: "Rb",  ions: 2, atomicNumber:  37, color: 2},
                   {symbol: "Sr",  ions: 2, atomicNumber:  38, color: 3},
                   {symbol: "Y",   ions: 2, atomicNumber:  39, color: 7},
                   {symbol: "Zr",  ions: 2, atomicNumber:  40, color: 7},
                   {symbol: "Nb",  ions: 2, atomicNumber:  41, color: 7},
                   {symbol: "Mo",  ions: 2, atomicNumber:  42, color: 7},
                   {symbol: "Tc",  ions: 2, atomicNumber:  43, color: 7},
                   {symbol: "Ru",  ions: 2, atomicNumber:  44, color: 7},
                   {symbol: "Rh",  ions: 2, atomicNumber:  45, color: 7},
                   {symbol: "Pd",  ions: 2, atomicNumber:  46, color: 7},
                   {symbol: "Ag",  ions: 2, atomicNumber:  47, color: 7},
                   {symbol: "Cd",  ions: 2, atomicNumber:  48, color: 7},
                   {symbol: "In",  ions: 2, atomicNumber:  49, color: 6},
                   {symbol: "Sn",  ions: 2, atomicNumber:  50, color: 6},
                   {symbol: "Sb",  ions: 2, atomicNumber:  51, color: 4},
                   {symbol: "Te",  ions: 2, atomicNumber:  52, color: 4},
                   {symbol: "I",   ions: 2, atomicNumber:  53, color: 5},
                   {symbol: "Xe",  ions: 2, atomicNumber:  54, color: 1},
                   {symbol: "Cs",  ions: 2, atomicNumber:  55, color: 2},
                   {symbol: "Ba",  ions: 2, atomicNumber:  56, color: 3},
                   {symbol: "La",  ions: 2, atomicNumber:  57, color: 8},
                   {symbol: "Ce",  ions: 2, atomicNumber:  58, color: 8},
                   {symbol: "Pr",  ions: 2, atomicNumber:  59, color: 8},
                   {symbol: "Nd",  ions: 2, atomicNumber:  60, color: 8},
                   {symbol: "Pm",  ions: 2, atomicNumber:  61, color: 8},
                   {symbol: "Sm",  ions: 2, atomicNumber:  62, color: 8},
                   {symbol: "Eu",  ions: 2, atomicNumber:  63, color: 8},
                   {symbol: "Gd",  ions: 2, atomicNumber:  64, color: 8},
                   {symbol: "Tb",  ions: 2, atomicNumber:  65, color: 8},
                   {symbol: "Dy",  ions: 2, atomicNumber:  66, color: 8},
                   {symbol: "Ho",  ions: 2, atomicNumber:  67, color: 8},
                   {symbol: "Er",  ions: 2, atomicNumber:  68, color: 8},
                   {symbol: "Tm",  ions: 2, atomicNumber:  69, color: 8},
                   {symbol: "Yb",  ions: 2, atomicNumber:  70, color: 8},
                   {symbol: "Lu",  ions: 2, atomicNumber:  71, color: 8},
                   {symbol: "Hf",  ions: 2, atomicNumber:  72, color: 7},
                   {symbol: "Ta",  ions: 2, atomicNumber:  73, color: 7},
                   {symbol: "W",   ions: 2, atomicNumber:  74, color: 7},
                   {symbol: "Re",  ions: 2, atomicNumber:  75, color: 7},
                   {symbol: "Os",  ions: 2, atomicNumber:  76, color: 7},
                   {symbol: "Ir",  ions: 2, atomicNumber:  77, color: 7},
                   {symbol: "Pt",  ions: 2, atomicNumber:  78, color: 7},
                   {symbol: "Au",  ions: 2, atomicNumber:  79, color: 7},
                   {symbol: "Hg",  ions: 2, atomicNumber:  80, color: 7},
                   {symbol: "Tl",  ions: 2, atomicNumber:  81, color: 6},
                   {symbol: "Pb",  ions: 2, atomicNumber:  82, color: 6},
                   {symbol: "Bi",  ions: 2, atomicNumber:  83, color: 6},
                   {symbol: "Po",  ions: 1, atomicNumber:  84, color: 4},
                   {symbol: "At",  ions: 0, atomicNumber:  85, color: 5},
                   {symbol: "Rn",  ions: 1, atomicNumber:  86, color: 1},
                   {symbol: "Fr",  ions: 0, atomicNumber:  87, color: 2},
                   {symbol: "Ra",  ions: 2, atomicNumber:  88, color: 3},
                   {symbol: "Ac",  ions: 2, atomicNumber:  89, color: 9},
                   {symbol: "Th",  ions: 2, atomicNumber:  90, color: 9},
                   {symbol: "Pa",  ions: 2, atomicNumber:  91, color: 9},
                   {symbol: "U",   ions: 2, atomicNumber:  92, color: 9},
                   {symbol: "Np",  ions: 1, atomicNumber:  93, color: 9},
                   {symbol: "Pu",  ions: 2, atomicNumber:  94, color: 9},
                   {symbol: "Am",  ions: 2, atomicNumber:  95, color: 9},
                   {symbol: "Cm",  ions: 2, atomicNumber:  96, color: 9},
                   {symbol: "Bk",  ions: 2, atomicNumber:  97, color: 9},
                   {symbol: "Cf",  ions: 2, atomicNumber:  98, color: 9},
                   {symbol: "Es",  ions: 2, atomicNumber:  99, color: 9},
                   {symbol: "Fm",  ions: 0, atomicNumber: 100, color: 9},
                   {symbol: "Md",  ions: 0, atomicNumber: 101, color: 9},
                   {symbol: "No",  ions: 0, atomicNumber: 102, color: 9},
                   {symbol: "Lr",  ions: 0, atomicNumber: 103, color: 9},
                   {symbol: "Rf",  ions: 0, atomicNumber: 104, color: 7},
                   {symbol: "Db",  ions: 0, atomicNumber: 105, color: 7},
                   {symbol: "Sg",  ions: 0, atomicNumber: 106, color: 7},
                   {symbol: "Bh",  ions: 0, atomicNumber: 107, color: 7},
                   {symbol: "Hs",  ions: 0, atomicNumber: 108, color: 7},
                   {symbol: "Mt",  ions: 0, atomicNumber: 109, color: 7},
                   {symbol: "Ds",  ions: 0, atomicNumber: 110, color: 7},
                   {symbol: "Rg",  ions: 0, atomicNumber: 111, color: 7},
                   {symbol: "Cn",  ions: 0, atomicNumber: 112, color: 7},
                   {symbol: "Uut", ions: 0, atomicNumber: 113, color: 6},
                   {symbol: "Fl",  ions: 0, atomicNumber: 114, color: 6},
                   {symbol: "Uup", ions: 0, atomicNumber: 115, color: 6},
                   {symbol: "Lv",  ions: 0, atomicNumber: 116, color: 6},
                   {symbol: "Uus", ions: 0, atomicNumber: 117, color: 5},
                   {symbol: "Uuo", ions: 0, atomicNumber: 118, color: 1}
                   ];

var colorMap = ["khaki","thistle","lightpink","lightsalmon","plum","lightsteelblue","darkgrey","lightgreen","paleturquoise","mediumturquoise"];
var hilightedColorMap = ["white","white","white","white","white","white","white","white","white","white"];
