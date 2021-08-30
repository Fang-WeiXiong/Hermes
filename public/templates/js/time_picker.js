$(document).ready(function() {
  // initialise Datetimepicker and Sliders
  blackDashboard.initDateTimePicker();
  if ($('.slider').length != 0) {
    demo.initSliders();
  }
});