$(document).ready(function(){
    $('button').click(function(){
        var month = $('input[name=month]').val();
        month = add_leading_zero(month * 8);
        var day = $('input[name=day]').val();
        day = add_leading_zero(day * 3);
        var year = $('input[name=year]').val();
        var color = '#' + month + day + year;
        console.log(color);
        $('#birthdayColor').css("background-color",color);
    });
});

function add_leading_zero(two_digit_num) {
    return ("0" + two_digit_num).slice(-2);
}