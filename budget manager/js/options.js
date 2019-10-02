$(document).ready(function(){
    $('#setlimit').click(function(){
        var limit=$('#limit').val();
        if(limit){
            chrome.storage.sync.set({'limit':limit},function(){
                var notifoflimitset = {
                    type : 'basic',
                    iconUrl :'/logo/48.png',
                    title : 'limit updated!',
                    message :'Limit is updated by you'
                }
                chrome.notifications.create('limitresetnotif',notifoflimitset);
            });
        }
    });

}) ;