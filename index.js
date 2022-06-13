// Your code goes here
//document.getElementById("text");

function callBack(){
    document.getElementById("text").textContent = "This is really cool!";
}
    document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
        console.log(callBack());
        
        });   


    









        // document.getElementById("text").textContent = "This is really cool!";


    // document.addEventListener("DOMContentLoaded", function() {
    //     console.log("The DOM has loaded");
    //   });
    //   console.log(
    //     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
        
