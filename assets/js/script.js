
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


var schedule = {
    entry9AM: "",
    entry10AM: "",
    entry11AM: "Sample entry",
    entry12PM: "",
    entry1PM: "",
    entry2PM: "Another sample entry",
    entry3PM: "",
    entry4PM: "",
    entry5PM: ""  
  };

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


function saveDefaultSchedule() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

function saveSchedule(event) {

    let item = event.target;

//   $(item).parent().prev().val('testing');
    let parentEl = $(item).parent().prev().attr('id');
    let entry = $(item).parent().prev().val().trim();
    console.log(parentEl);
    console.log(entry);

  switch (parentEl) {

    case 'input-9AM':
        schedule.entry9AM=entry;
        break;
    case 'input-10AM':
        schedule.entry10AM=entry;
        break;           

    case 'input-11AM':
        schedule.entry11AM=entry;
        break;     

    case 'input-12PM':
        schedule.entry12PM=entry;
        break;     

    case 'input-1PM':
        schedule.entry1PM=entry;
        break;     

    case 'input-2PM':
        schedule.entry2PM=entry;
        break;     

    case 'input-3PM':
        schedule.entry3PM=entry;
        break;     

    case 'input-4PM':
        schedule.entry4PM=entry;
        break;     

    case 'input-5PM':
        schedule.entry5PM=entry;
        break;     

  }
  localStorage.setItem("schedule", JSON.stringify(schedule));
}


function renderSchedule() {
    let tempTime="";
    let tempEntry="";

    let savedSchedule = JSON.parse(localStorage.getItem("schedule"));
    if (savedSchedule !== null) {
        
        $('#input-9AM').val(savedSchedule.entry9AM);
        $('#input-10AM').val(savedSchedule.entry10AM);
        $('#input-11AM').val(savedSchedule.entry11AM);
        $('#input-12PM').val(savedSchedule.entry12PM);
        $('#input-1PM').val(savedSchedule.entry1PM);
        $('#input-2PM').val(savedSchedule.entry2PM);
        $('#input-3PM').val(savedSchedule.entry3PM);
        $('#input-4PM').val(savedSchedule.entry4PM);
        $('#input-5PM').val(savedSchedule.entry5PM);
    
    }
}


$('.container').on('click',saveSchedule);

function main() {
    loadCurrentTime();
    //saveDefaultSchedule();
    renderSchedule();
}

main();