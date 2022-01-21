//IIFE -- Immediately invoked function express
//AKA anonymous self-executing function
(function()
{
    function DisplayHome()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        })
    }
    //named function
    function Start()
    {
        console.log("Hello, World!");

        switch(document.title)
        {
            case "Home Page":
                DisplayHome();
                break;
        }
    }

    window.addEventListener("load", Start());

})();