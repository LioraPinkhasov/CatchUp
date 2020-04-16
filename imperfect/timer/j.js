var Timer = (function() {
    function Timer() {};
    
    Timer.prototype.countDown = function(time) {
        var id = setInterval(function() {
          document.getElementById("done").disabled = true;
            $('#counter').text(time);
            // stop timer at 0
            if (time < 10) {
              $('.timer-box').toggleClass('warning');
            }
            if (time === 0) { 
              clearInterval(id);
              document.getElementById("done").disabled = false;
            }
            time--;
        }, 1000);
    };
    return Timer;
})();

var $start = $('#start');
function waitfunc() {
  document.getElementById("done").disabled = true;
};
function doneClik() {
  document.getElementById("done").innerHTML = "מזל טוב סיימת את האתגר";
}
var t = new Timer;

$(document).ready(function() {
    $start.click(function() {
        var time = 5//1 * 60;
        t.countDown(time);
    });
});