const mainTitle = document.getElementById("main_title");
const title = document.getElementById("title_input");
let input = document.querySelectorAll("input");
let myButton = document.querySelector("button");
let noun = document.getElementById("noun").value;
let verb = document.getElementById("verb").value;
let adjective = document.getElementById("adjective").value;
let storyResult = document.getElementById("story_result");
let container = document.querySelector("form");

myButton.onclick = function()
{
    event.preventDefault();
    if(check(input) == true)
    {
        alert("Please fill in all fields");
    }
    else
    {
        container.style["display"] = "none";
        storyResult.innerText = "Last night I ate a " + noun + " and today I just had to " + verb + ". What a " + adjective + " day!";
    }
}

function check(numbers)
{
    let noInput = 0;
    for(let i = 0; i < input.length; i++)
    {
        if(input[i].value == "")
        {
            noInput = noInput + 1;
        }
    }
    if((noInput <= 4) && (noInput != 0))
    {
        return true;
    }
    else
    {
        return false;
    }
}