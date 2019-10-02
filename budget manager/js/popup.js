
$(document).ready(function(){
    chrome.storage.sync.get(['total','limit'],function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    });
    $('#spendamount').click(function(){
        chrome.storage.sync.get(['total','limit'],function(budget){
            var newTotal=0;
            if(budget.total){
                newTotal+=parseInt(budget.total);
            }
            var amount=$('#amount').val();
            if(amount){
                newTotal+=parseInt(amount);
            }    
            chrome.storage.sync.set({'total':newTotal},function(){
           if(amount && newTotal>=budget.limit){
               var notifoflimit = {
                   type: 'basic',
                   iconUrl: '/logo/48.png',
                   title: 'Limit reached !',
                   message:'uh oh ! looks like you have reached your limit' 
               };
            chrome.notifications.create('limitNotif',notifoflimit);
           }
        });
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