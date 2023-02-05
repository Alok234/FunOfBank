
// the  code of deposit and withdraw............



var depo= document.getElementById("dp");
var withdrow= document.getElementById("wt");
var total = document.getElementById("total");

 var demo = 500;
 total.innerHTML=demo;
 
function deposit(){
    
    demo = demo + parseInt(depo.value);
    total.innerHTML=demo;

     depo.value="";
     
};

function witdraw(){
      
    demo = demo - parseInt(withdrow.value);
    total.innerHTML=demo;
    
    withdrow.value="";
     
};
