
let timedateEl = $('#currentDay');

setInterval (function() {
    let timedate = moment().format("dddd, MMMM Do");
    $(timedateEl).text(timedate);
},1000);
