$(document).ready(function(){
    $('button').click(function(){
        var month = $('input[name=month]').val();
        month = add_leading_zero(month * 8);  // must multiply or all dates are blue
        var day = $('input[name=day]').val();
        day = add_leading_zero(day * 3);
        var year = $('input[name=year]').val();
        var color = '#' + month + day + year;  // build the color from the date
        
        console.log(color);  // for debugging
        
        $('#birthdayColor').css("background-color",color);  // set the color
    });
});

function add_leading_zero(two_digit_num) {
    return ("0" + two_digit_num).slice(-2);
}