$(document).ready(function(){
    var index = 0;
    var colors = ["#F6E7F7", "#D1D0D7", "#EFFAB4", "#FFC48C", "#D1F2A5", "#F8DAFB", "#DADDFB", "#DAFBF8", "#FFFCDD", "#FFD8D8", "#C9DF8A"];  
    console.log("test");
    
    for (var i = 0; i < colors.length; i++) {
        var newDiv = $("<div>");
        $("#box-placement").append(newDiv);
        newDiv.attr("class", "color-divs");
        newDiv.css("background-color", colors[i]);
    }
    
    $("#set_random_btn").click(function() {
        var color_index = Math.floor(Math.random() * colors.length);
        $("body").css("background-color", colors[color_index]);
        clearInterval(backgroundInterval);
    });
    
    $("#set_specific_btn").click(function() {
        var new_index = $('input[name=background-number]').val();
        new_index = new_index % colors.length;
        $("body").css("background-color", colors[new_index]);
        clearInterval(backgroundInterval);
    });
    
    var backgroundInterval = setInterval(changeColor, 2000);
    
    function changeColor() {
        if (index === colors.length) {
            index = 0;
        }
        $("body").css("background-color", colors[index]);
        index++;
    }
    
});
    /*
    $('#birthday_btn').click(function(){
        var month = $('input[name=month]').val();
        month = add_leading_zero(month * 8);  // must multiply or all dates are blue
        var day = $('input[name=day]').val();
        day = add_leading_zero(day * 3);
        var year = $('input[name=year]').val();
        var color = '#' + month + day + year;  // build the color from the date
        
        console.log(color);  // for debugging
        
        $('#birthdayColor').css("background-color",color);  // set the color
    });

    function add_leading_zero(num) {
        return ("0" + num).slice(-2);
    }
    
    */
    
