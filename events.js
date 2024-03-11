$(document).ready(function(){
    $('.sname,.sclass,.scountry').focus(function(){
        $(this).css('background-color','grey');
    });
    $('.sname,.sclass,.scountry').blur(function(){
        $(this).css('background-color','yellow');
    });
    $('.scountry').change(function(){
       var a = $(this).val();
       $('#test').html(a);
    });
    $('.sname,.sclass').select(function(){
        $(this).css('background-color','yellow');
    });
    $('.sform').submit(function(){
        // $(this).css('background-color','yellow');
        console.log("Form Submitted");
    });
});