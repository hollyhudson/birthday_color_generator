/* url for avatar image:
http://i.imgur.com/87kIXSN.jpg
*/
$(document).ready(function() {
    
    $('#post').click(function(){
        var to_post = $("#message").val();
        console.log("yo" + to_post + "the rest");
        var element = '<div class="posts"><img src="http://i.imgur.com/87kIXSN.jpg" alt="avatar"><span>  ' + to_post + '  </span></div>';
        $('#wall').prepend(element);
    });
    $('#hundreds').click(function(){
        for (var i = 0; i < 100; i++) {
            $('#images').append('<img src="https://catlovers2015.files.wordpress.com/2015/05/90725-colorful-kittens.jpg" alt="colorful kittens">');
        }
    });
    
});
