console.log('Loaded!');


//This is for adding button
var button = document.getElementById('counter');
button.oneclick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};
