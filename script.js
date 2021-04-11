/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var content = document.getElementById("content1");
content.addEventListener("click", function(){

    window.setTimeout(function(){

        // Move to a new location or you can do something else
        //window.location.href = "https://www.google.com";
        window.location.href = "PostItMessage.html"

    }, 1000);

});


