
$(document).ready(function(){
    chrome.storage.sync.get('total',function(budget){
        $('#total').text(budget.total);
    });
    $('#spendamount').click(function(){
        chrome.storage.sync.get('total',function(budget){
            var newTotal=0;
            if(budget.total){
                newTotal+=parseInt(budget.total);
            }
            var amount=$('#amount').val();
            if(amount){
                newTotal+=parseInt(amount);
            }    
            chrome.storage.sync.set({'total':newTotal});
            $('#total').text(newTotal);
            $('#amount').val('');
        });

    });
    $('#reset').click(function(){
        
            chrome.storage.sync.set({'total':0});
            $('#total').text(0);
            $('#amount').val('');
        });

});