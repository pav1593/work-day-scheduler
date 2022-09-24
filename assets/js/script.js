// grabs the date display element
let timedateEl = $('#currentDay');

// creates the storage object to store entries prefilled with some defaults for testing
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

  // uses the moment 3rd party API to get and format the day/date display
setInterval (function() {
    let timedate = moment().format("dddd, MMMM Do");
    $(timedateEl).text(timedate);
},1000);

//this function renders the color scheme for the time-blocks
function loadCurrentTime() {

   let currentHour = moment().hour();
//    let currentHour = 12; //used for testing logic below for coloring timeblocks outside of working hours
   
    // if current time outside of 9-5pm then it shades all GRAY
   if (currentHour>17 || currentHour<9) {
        $('.container').children().addClass('past');
    } else {
        
        // otherwise it shades the past hours in GRAY, PRESENT hour in RED and remaining hours in GREEN

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

// function can be used to save defaults in the browser to display intially but is not required to use the app
function saveDefaultSchedule() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

// this function gets called by the event listener when one of the time entry buttons are pressed in order to save the new entry in that field
function saveSchedule(event) {

    let item = event.target;

    // traverses the DOM from the button pressed to the INPUT form in order to grab the correct time entry input value and udpate the JSON stored locally
    let parentEl = $(item).parent().prev().attr('id');
    let entry = $(item).parent().prev().val().trim();


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

// this function recalls the JSON store locally, if any, and renders the values to the time slots on the schedule
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

// listener for save button clicks to save the respective entry
$('.container').on('click',saveSchedule);

// main function kicks off the app by rendering the color schema and then rendering any store JSON values
function main() {
    loadCurrentTime();
   // saveDefaultSchedule(); // funciton used for testing and loading default values
    renderSchedule();
}
main();