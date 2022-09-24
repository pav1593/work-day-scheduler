
let timedateEl = $('#currentDay');
let input9 = $('#input-9AM');
let input10 = $('#input-10AM');
let input11 = $('#input-11AM');
let input12 = $('#input-12PM');
let input13 = $('#input-1PM');
let input14 = $('#input-2PM');
let input15 = $('#input-3PM');
let input16 = $('#input-4PM');
let input17 = $('#input-5PM');

let button9 = $('#b-9AM');
let button10 = $('#b-10AM');
let button11 = $('#b-11AM');
let button12 = $('#b-12PM');
let button13 = $('#b-1PM');
let button14 = $('#b-2PM');
let button15 = $('#b-3PM');
let button16 = $('#b-4PM');
let button17 = $('#b-5PM');


setInterval (function() {
    let timedate = moment().format("dddd, MMMM Do");
    $(timedateEl).text(timedate);
},1000);

function loadCurrentTime() {

//    let currentHour = moment().hour();
   let currentHour = 12; //used for testing logic below for coloring timeblocks
   

   if (currentHour>17 || currentHour<9) {
        $('.container').children().addClass('past');
    } else {
        
        let tempTime="";

        for(let i=9;i<currentHour;i++) {
            if (i<12) {
                tempTime = '#input-'+i+'AM';
             } else if (i===12) {
                tempTime = '#input-12PM';
            } else {
                tempTime = '#input-'+(i-12)+'PM';
            }
            $(tempTime).addClass('past');
        }

        let currentTime = '#input-'+currentHour-12+'PM';
        if (currentHour<12) {
            tempTime = '#input-'+i+'AM';
         } else if (currentHour===12) {
            tempTime = '#input-12PM';
        } else {
            tempTime = '#input-'+(currentHour-12)+'PM';
        }
        $(tempTime).addClass('present');

        for(let i=currentHour+1;i<18;i++) {
            if (i<12) {
                tempTime = '#input-'+i+'AM';
             } else if (i===12) {
                tempTime = '#input-12PM';
            } else {
                tempTime = '#input-'+(i-12)+'PM';
            }
            $(tempTime).addClass('future');
        }
   }


}

function main() {
    loadCurrentTime();
}

main();