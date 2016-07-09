var sounds;
var nRows, nCols;
var soundType = 0;
var splitFraction = 0.2;

$(function() {

        sounds = new Array();
        sounds.push({});
        sounds.push({});

        // load the sounds
        for( var i=0; i<elementData.length; i++ ) {
            if( elementData[i].ions > 0 ) {
                sounds[0][i] = new Audio();
                sounds[0][i].preload = 'none';
                sounds[0][i].src = "sounds/"+elementData[i].symbol+"I.ogg";
                sounds[0][i].loop = true;
            }
            if( elementData[i].ions > 1 ) {
                sounds[1][i] = new Audio();
                sounds[1][i].preload = 'none';
                sounds[1][i].src = "sounds/"+elementData[i].symbol+"II.ogg";
                sounds[1][i].loop = true;
            }
        }
        
        // build the table
        nRows = tableMap.length; nCols = -1;
        $('body').append('<table></table>');
        for( var i=0; i<tableMap.length; i++ ) {
            $('table').append('<tr></tr>');
            for( var j=0; j<tableMap[i].length; j++ ) {
                if( j+1 > nCols ) nCols = j+1;
                $('tr').last().append('<td></td>');
                if( tableMap[i][j] != -1 ) {
                    $('td').last().html(elementData[tableMap[i][j]].symbol+'<div>'+elementData[tableMap[i][j]].atomicNumber+'</div>');
                    $('td').last().data(elementData[tableMap[i][j]]);
                }
            }
        }
        $('td').addClass('element');

        $($($('tr')[1]).children('td')[4]).remove();
        var button = $($($('tr')[1]).children('td')[3]);
        button.attr('colspan',2);
        button.html('Neutral');
        button.removeClass('element');
        button.addClass('toggleIonButton')
        
        // add styling
        $('table').css({'margin':'auto','font-family':'sans-serif'});
        $('td.element').css('cursor',function(i){return $(this).data('ions')>0?'pointer':'auto';});
        $('td.element > div').css({'font-size':'50%','line-height':'60%'});
        $('td').css({'text-align':'center'});
        button.css({'background-color':'darkgray','cursor':'pointer'});

        // add event handlers
        $(window).resize(fit);
        $('td.element').on('click',toggleSound);
        button.on('click',toggleIons);

        fit();
        
    });

function fit() {

    var w = (window.innerWidth)/(nCols+(nCols+1)*splitFraction);
    var h = (window.innerHeight)/(nRows+(nRows+1)*splitFraction);

    var l = w<h ? w : h;
    
    $('table').css({'padding':(splitFraction*l/2)+'px','border-spacing':'0px'});
    $('td').css({'padding':'0px','font-size':(l/2)+'px',
                'width':(l)+'px','height':(l)+'px','border':(splitFraction*l/2)+'px solid white'});
    $('td.element').css('background-color',function(i){return getColor($(this));});

}

function getColor(e) {
    var ions = e.data('ions');
    if( ions == undefined )
        return 'transparent';
    if( ions > soundType )
        return colorMap[e.data('color')];
    return 'lightgray';    
}

function toggleSound(e) {

    var element = $(e.target);
    var elementIndex = element.data('atomicNumber')-1;
    var numIons = element.data('ions');

    if( soundType < numIons ) {
        if( sounds[soundType][elementIndex].paused ) {
            element.css('background-color','transparent');
            element.css('border-color',function(i){return getColor(element);});
            sounds[soundType][elementIndex].play();
        } else {
            element.css('border-color','white');
            element.css('background-color',function(i){return getColor(element);});
            sounds[soundType][elementIndex].pause();
        }
    }

}

function toggleIons(e) {

    if( soundType == 0 ) {
        for( var i in sounds[0] ) {
            sounds[0][i].pause();
        }
        $('.toggleIonButton').html('Ionized');
        soundType = 1;
    } else if( soundType == 1 ) {
        for( var i in sounds[1] ) {
            sounds[1][i].pause();
        }
        $('.toggleIonButton').html('Neutral');
        soundType = 0;
    }

    fit();

}