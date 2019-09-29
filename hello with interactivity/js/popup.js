$(document).ready(function ready(){
    $('#name').keyup(function(){
        $('#greet').text('Hello '+$('#name').val());
    });
});