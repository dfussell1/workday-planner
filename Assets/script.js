// button onClick to save event to calendar
$(function () {
  $('.saveBtn').on('click', saveDesc);

  // function to save event to calendar 
  function saveDesc() {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('.description').val());
  };
  
  var timeBlockEl = $('.time-block');
  
  // function to apply 'past', 'present', or 'future' classes to each timeblock by comparing the calendar hour to the current hour 
  timeBlockEl.each(function() {
    var currentHour = parseInt($(this).attr('id'));
    var calHour = dayjs().hour();
    parseInt($(this).attr('id'));
    if (currentHour < calHour) {
      $(this).addClass('past');
    } else if (currentHour === calHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
});

// function to display time in header with DayJS
function displayTime() {
  const currentTime = dayjs().format('dddd, MMMM D, YYYY @ hh:mm:ss a');
  $('#currentDay').text(currentTime);
}

// display saved event from localStorage onto calendar
$("#0 .description").val(localStorage.getItem('0'));
$("#1 .description").val(localStorage.getItem('1'));
$("#2 .description").val(localStorage.getItem('2'));
$("#3 .description").val(localStorage.getItem('3'));
$("#4 .description").val(localStorage.getItem('4'));
$("#5 .description").val(localStorage.getItem('5'));
$("#6 .description").val(localStorage.getItem('6'));
$("#7 .description").val(localStorage.getItem('7'));
$("#8 .description").val(localStorage.getItem('8'));
$("#9 .description").val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#17 .description").val(localStorage.getItem('17'));
$("#18 .description").val(localStorage.getItem('18'));
$("#19 .description").val(localStorage.getItem('19'));
$("#20 .description").val(localStorage.getItem('20'));
$("#21 .description").val(localStorage.getItem('21'));
$("#22 .description").val(localStorage.getItem('22'));
$("#23 .description").val(localStorage.getItem('23'));

// call function to display time and update the current time continuously 
displayTime();
setInterval(displayTime, 1000);