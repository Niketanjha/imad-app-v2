console.log('Loaded!');


//This is for adding button
var button = document.getElementById('counter');
button.oneclick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

var request = newXMLHttpRequest();
request.onereadyStatechange=function(){
    if(request.readyState---XMLHttpRequest.DONE){
        if(request.status===200){
            request.responseText;
        }
    }
}; 

