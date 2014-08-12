
var currentTime = 0.0;
var intervalObject = null;
function doSomething() {
    
}
function startTimer() {
    if (intervalObject != null) {
        clearInterval(intervalObject);
        intervalObject = null;
        $('.btnStart').html('Start');
    }
    else {
        intervalObject = setInterval(function () { timerTick() }, 100);
        $('.btnStart').html('Stop');
    }
};
function timerTick() {
    currentTime += .1;
    $('.timer-label').html(currentTime.toFixed(2));
    $('.computed-height').html(((currentTime * currentTime) * 16).toFixed(2));
    $('.computed-height-meters').html(((currentTime * currentTime) * 16 * 0.3).toFixed(2));
    if (currentTime>=5) {
        $('.message-box').html("dude! are you serious? that's pretty high!")
    }
    else {
        $('.message-box').html('');
    }
}
$(document).ready(function () {
    $('.tbl').hide();
    $('.about-page').hide();
    $('.hdr').click(function () {
        $(this).next().slideToggle('fast');
    });
    $('.about-page-link').click(function () {
        $('.about-page').slideToggle('fast');
    });
    $('.btnStart').click(function () {
        startTimer();
    });
    $('.btnReset').click(function () {
        $('.btnStart').html('Start');
        $('.timer-label').html('0.00');
        $('.computed-height').html('0.00');
        $('.computed-height-meters').html('0.00');
        currentTime = 0.0;
        $('.message-box').html('');
    });
    // $('.hexit').click(function (){
    // $('.tblExit').slideToggle('fast');
    // });
    // $('.hedit').click(function (){
    // $('.tblEdit').slideToggle('fast');
    // });


});