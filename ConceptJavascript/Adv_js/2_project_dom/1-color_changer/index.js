const greyButton = document.getElementById("grey");
       const whiteButton = document.getElementById("white");
       const blueButton = document.getElementById("blue");
       const yellowButton = document.getElementById("yellow");

       greyButton.addEventListener("click",function()
       {
        document.body.style.backgroundColor = "grey"
       })

       whiteButton.addEventListener("click",function()
       {
        document.body.style.backgroundColor = "white"
       })
       blueButton.addEventListener("click",function()
       {
        document.body.style.backgroundColor = "blue"
       })
       yellowButton.addEventListener("click",function()
       {
        document.body.style.backgroundColor = "yellow"
       })
