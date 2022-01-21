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
        });

        //Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        
        //Step 2 - Create an HTML element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">
        This is the Article Paragraph</p>`;

        //Step 3 - Configure new element
        MainParagraph.setAttribute("id","MainParagraph");
        MainParagraph.setAttribute("class","mt-3");
        let FirstString = "Adding some awesome stuff ";
        let SecondString = `${FirstString} to the main paragraph.`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class","container");

    

        //Step 4 - Perform insertion / deletion

        //Example of Insert After / Append
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

        //Example of Insert Before
        //MainContent.before(MainParagraph);

        //Example of deletion

        //AboutUsButton.remove();

        //ES6 HTML5 => Template Strings => "Super Strings"
        
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