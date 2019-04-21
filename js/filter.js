$(document).ready(function(){
    $('#search').focus(function(){
        $('#filter').addClass('focused');
    });
    
    $('#search').focusout(function(){
        $('#filter').removeClass('focused');
    });
});