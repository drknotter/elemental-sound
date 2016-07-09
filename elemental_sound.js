//window.addEventListener('resize',fit,false);

var paper = Raphael("paper",400,300);

function fit(e) {
		
}

/*
var w = Math.max(window.innerWidth-5,534);
var h = Math.max(window.innerHeight-5,300);
var viewMode = 0;

var modes = ["Standard","Left Step"];
var canvasModeDims = [[1090,580],
											[1930,550]];

var modeButtonPosMap = [[3.5,0],
												[3.5,0]];

var elementPosMap = [[[0,0],[17,0],[0,1],[1,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],[0,2],[1,2],[12,2],[13,2],[14,2],[15,2],[16,2],[17,2],[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[11,3],[12,3],[13,3],[14,3],[15,3],[16,3],[17,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],[12,4],[13,4],[14,4],[15,4],[16,4],[17,4],[0,5],[1,5],[2,7.5],[3,7.5],[4,7.5],[5,7.5],[6,7.5],[7,7.5],[8,7.5],[9,7.5],[10,7.5],[11,7.5],[12,7.5],[13,7.5],[14,7.5],[15,7.5],[16,7.5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5],[16,5],[17,5],[0,6],[1,6],[2,8.5],[3,8.5],[4,8.5],[5,8.5],[6,8.5],[7,8.5],[8,8.5],[9,8.5],[10,8.5],[11,8.5],[12,8.5],[13,8.5],[14,8.5],[15,8.5],[16,8.5],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6]],
										 [[30,0],[31,0],[30,1],[31,1],[24,2],[25,2],[26,2],[27,2],[28,2],[29,2],[30,2],[31,2],[24,3],[25,3],[26,3],[27,3],[28,3],[29,3],[30,3],[31,3],[14,4],[15,4],[16,4],[17,4],[18,4],[19,4],[20,4],[21,4],[22,4],[23,4],[24,4],[25,4],[26,4],[27,4],[28,4],[29,4],[30,4],[31,4],[14,5],[15,5],[16,5],[17,5],[18,5],[19,5],[20,5],[21,5],[22,5],[23,5],[24,5],[25,5],[26,5],[27,5],[28,5],[29,5],[30,5],[31,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6],[18,6],[19,6],[20,6],[21,6],[22,6],[23,6],[24,6],[25,6],[26,6],[27,6],[28,6],[29,6],[30,6],[31,6],[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[12,7],[13,7],[14,7],[15,7],[16,7],[17,7],[18,7],[19,7],[20,7],[21,7],[22,7],[23,7],[24,7],[25,7],[26,7],[27,7],[28,7],[29,7],[30,7],[31,7]]];

var colorMap = ["khaki","thistle","lightpink","lightsalmon","plum","lightsteelblue","darkgrey","lightgreen","paleturquoise","mediumturquoise"];
var clickedColorMap = ["white","white","white","white","white","white","white","white","white","white"];

var elements = [{symbol: "H",   ions: 1, atomicNumber:   1, color: 0},
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
								{symbol: "Po",  ions: 2, atomicNumber:  84, color: 4},
								{symbol: "At",  ions: 2, atomicNumber:  85, color: 5},
								{symbol: "Rn",  ions: 2, atomicNumber:  86, color: 1},
								{symbol: "Fr",  ions: 0, atomicNumber:  87, color: 2},
								{symbol: "Ra",  ions: 2, atomicNumber:  88, color: 3},
								{symbol: "Ac",  ions: 2, atomicNumber:  89, color: 9},
								{symbol: "Th",  ions: 2, atomicNumber:  90, color: 9},
								{symbol: "Pa",  ions: 2, atomicNumber:  91, color: 9},
								{symbol: "U",   ions: 2, atomicNumber:  92, color: 9},
								{symbol: "Np",  ions: 2, atomicNumber:  93, color: 9},
								{symbol: "Pu",  ions: 2, atomicNumber:  94, color: 9},
								{symbol: "Am",  ions: 2, atomicNumber:  95, color: 9},
								{symbol: "Cu",  ions: 2, atomicNumber:  96, color: 9},
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

var canvas = d3.select("body").append("svg")
		.attr("class","canvas")
		.attr("width",w)
		.attr("height",h);

var periodicTable = canvas.append("g");

//var audio = [new buzz.sound(""),new buzz.sound(""),new buzz.sound(""),new buzz.sound(""),new buzz.sound(""),new buzz.sound(""),new buzz.sound(""),new buzz.sound(""),new buzz.sound(""),new buzz.sound("")];
var audio = d3.select("body").selectAll("audio").data([{enabled: 0,symbol: ""},{enabled: 0,symbol: ""},{enabled: 0,symbol: ""},{enabled: 0,symbol: ""},{enabled: 0,symbol: ""},{enabled: 0,symbol: ""},{enabled: 0,symbol: ""},{enabled: 0,symbol: ""},{enabled: 0,symbol: ""},{enabled: 0,symbol: ""}])
 		.enter().append("audio")
 		.property("volume",0);

var modeButton = canvas.append("g")
		.attr("class","modeButton")
		.attr("cursor","pointer")
		.on("click",modeClick);
modeButton.append("rect")
		.attr("x",-55).attr("y",-25)
		.attr("width",110).attr("height",50)
		.attr("fill","steelblue");
modeButton.append("text")
		.attr("x",0)
		.attr("y",0)
		.attr("dy","0.35em")
		.attr("text-anchor","middle")
		.attr("font-family","sans-serif")
		.attr("font-size","20")
		.attr("fill","white")
		.text(modes[(viewMode+1)%2]);

modeButton.map(function(d,i) {
				return {pos: modeButtonPosMap[viewMode]};
		}).attr("transform",function(d,i) { 
						return "translate("+(d.pos[0]*60+35)+","+(d.pos[1]*60+35)+")"; 
				});

periodicTable.selectAll("g.element").data(elements)
		.enter().append("g")
		.attr("class","element")
		.attr("cursor",function(d) { return d.ions>0 ? "pointer" : "default"; })
		.on("click",clickElement)
		.call(d3.behavior.drag()
					.on("drag",dragElement)
					.on("dragend",dragEndElement))
		.append("rect")
		.attr("x",-25).attr("y",-25)
		.attr("width",50).attr("height",50)
		.attr("fill",function(d) { return d.ions > 0 ? colorMap[d.color] : "#e8e8e8"; });

periodicTable.selectAll("g.element").append("text")
		.attr("x",0).attr("y",0)
		.attr("dy","0.33em")
		.attr("text-anchor","middle")
		.attr("font-family","sans-serif")
		.attr("font-size","26")
		.attr("fill",function(d) { return d.ions>0 ? "#000" : "#555"; })
		.text(function(d) { return d.symbol; });

periodicTable.selectAll("g.element")
		.map(function(d,i) {
						return {symbol: d.symbol,
										ions: d.ions,
										atomicNumber: d.atomicNumber,
										color: d.color,
										pos: elementPosMap[viewMode][i],
										clicked: 0}; })
		.attr("transform",function(d,i) { 
						return "translate("+(d.pos[0]*60+35)+","+(d.pos[1]*60+35)+")"; 
				});

// canvas.select("g.modeButton")
// 		.map(function(d,i) {
// 						return { pos: modeButtonPosMap[viewMode] }; })
// 		.attr("transform",function(d,i) { 
// 						return "translate("+(d.pos[0]*60+35)+","+(d.pos[1]*60+35)+")"; 
// 				});

fit();

function fit() {
		var w = Math.max(window.innerWidth-5,534);
		var h = Math.max(window.innerHeight-5,300);
		var scale = Math.min(w/canvasModeDims[viewMode][0],h/canvasModeDims[viewMode][1]);
		var translateX = 0.5*(w-canvasModeDims[viewMode][0]*scale);
		var translateY = 0.5*(h-canvasModeDims[viewMode][1]*scale);

		d3.select("svg").attr("width",w).attr("height",h)		
		periodicTable.transition().duration(500)
				.attr("transform",function() { return "translate("+translateX+","+translateY+"),scale("+scale+")"; });

}
		
function modeClick() {
		viewMode = (viewMode+1)%2;
		periodicTable.selectAll("g.element")
				.map(function(d,i) {
								return {symbol: d.symbol,
												ions: d.ions,
												atomicNumber: d.atomicNumber,
												color: d.color,
												pos: elementPosMap[viewMode][i],
												clicked: d.clicked}; })
				.transition().duration(1000)
				.attr("transform",function(d,i) { 
								return "translate("+(d.pos[0]*60+35)+","+(d.pos[1]*60+35)+")"; 
						});
		canvas.select("g.modeButton").select("text")
				.text(modes[(viewMode+1)%2]);
		canvas.select("g.modeButton")
				.map(function(d,i) {
								return { pos: modeButtonPosMap[viewMode] }; })
				.transition().duration(1000)
				.attr("transform",function(d,i) { 
								return "translate("+(d.pos[0]*60+35)+","+(d.pos[1]*60+35)+")"; 
						});
		fit();
}

function clickElement(d1,i1) {
		var element = periodicTable.selectAll("g.element").filter(function(d2,i2){return i1==i2 && d2.ions > 0;});
		if( !element.empty() ) {

				var candidateAudio = audio.filter(function(d){return !d.enabled || d.symbol == d1.symbol;});
				if( !candidateAudio.empty() ) {

						var thisAudio = candidateAudio.filter(function(d) {return d.symbol == d1.symbol;});
						if( !thisAudio.empty() ) {
								d3.select(thisAudio.node()).map(function(d){return{enabled:0,symbol:""};})
										.property("volume",0);
								thisAudio[0][0].pause();
						} else {
								var newAudio = d3.select(candidateAudio.node());
								newAudio.map(function(d){return{enabled:1,symbol:d1.symbol};})
										.property("volume",1)
										.attr("loop","")
										.attr("src","sounds/"+d1.symbol+"I.wav");
								newAudio[0][0].play();
						}

						element.map(function(d,i) {
										return {symbol: d.symbol,
														ions: d.ions,
														atomicNumber: d.atomicNumber,
														color: d.color,
														pos: d.pos,
														clicked: (d.clicked+1)%2}; });
						
						
						d3.timer(function() {
										var element = periodicTable.selectAll("g.element").filter(function(d2,i2){return i1==i2 && d2.ions > 0;});
										var interp = d3.interpolateRgb(colorMap[d1.color],clickedColorMap[d1.color]);
										var foo = interp(0.5);
										if( element[0][0].__data__.clicked == 0 ) {
												element.select("rect").transition().delay(250)
														.attr("fill",colorMap[d1.color])
														.attr("stroke-width",0);
												return true;
										}
										var t = Date.now();
										element.select("rect")
												.attr("fill",function(d) {
																return interp(0.5*(1-Math.cos(2*Math.PI*t/1000)));
												})
												.attr("stroke-width",2)
												.attr("stroke",function(d) {
																return interp(0.5*(1+Math.cos(2*Math.PI*t/1000)));
												})
										
								});
				}
		}
}

function dragElement(d) {
		var coords = d3.select(this).attr("transform").match(/([\d\.]+)/g);
		var dx = d3.event.dx;
		d3.select(this)
				.attr("transform",function(d){
								var foo = "translate("+(Number(coords[0])+d3.event.dx)+","+(Number(coords[1])+d3.event.dy)+")";
								return foo;
						});
}

function dragEndElement(d) {
		var isInArea = false;
		if( !isInArea ) {
				d3.select(this)
						.map(function(d,i) {
										return {symbol: d.symbol,
														ions: d.ions,
														atomicNumber: d.atomicNumber,
														color: d.color,
														pos: elementPosMap[viewMode][d.atomicNumber-1],
														clicked: d.clicked}; })
						.transition().duration(500)
						.attr("transform",function(d){
										return "translate("+(d.pos[0]*60+35)+","+(d.pos[1]*60+35)+")";
								});
		}
}

function getAudio(symbol) {
		// for( var i=0; i<audio.length; i++ ) {
		// 		if( audio[i].get
		// }
}
*/