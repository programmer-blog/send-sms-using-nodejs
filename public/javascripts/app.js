
$(function(){
    $('#sendsms').on('click', function(){
        let mobile = $("#mobile").val();
        if(mobile){
            $.post( "/send", { mobile: mobile })
            .done(function( data ) {
                if(data['success']){
                    $("#error").removeClass('alert-danger d-none').addClass( "alert-success").html('Message sent successfuly');
                }else{
                    $("#error").removeClass('alert-success d-none').addClass( "alert-danger").html('Message sending failed. Try again');
                } 
                
            });
        }else{

           $("#error").removeClass('d-none');
        }
    });
});