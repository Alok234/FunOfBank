

var username= document.getElementById("username");
var password= document.getElementById("password");


 

function login(){ 
    var user = username.value;
    var pass = password.value;
   
     var account= "rahim5254";
     var acPass = 12345678;

     if( user==account &&  pass==acPass){
        alert("WELLCOME OUR BANK . MAKE MONEY AND BE HAPPY ALL THE TIME.")
        window.open("../html/hisab.html");
        username.value=""; 
       password.value=""; 
      //   console.log("ka");
     }
      else {
     alert("HEY YOU ARE WORNG . ACCOUNT NO : rahim5254 AND PASSWORD :12345678");
     console.log("hey you are worng");
      }

      
}
