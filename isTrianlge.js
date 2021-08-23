var input = document.querySelectorAll('.angle-input');
var checkButton = document.querySelector("#check-button");
var message= document.querySelector("#display-message");
checkButton.addEventListener("click",function clickHandler()
{
    isTriangle();


})
function isTriangle()
{
    var sum = sumOfTriangles(Number(input[0].value),Number(input[1].value),Number(input[2].value))
    if(sum == 180)
    {
        displayMessage("yipee it is a trianlge");
    }
    else
    {
        displayMessage("ooo no it is not a triangle");
    }

}

 function sumOfTriangles(angle1, angle2, angle3)
 {
     var sum =angle1 + angle2 + angle3;
     return sum;
 }
 function displayMessage(msg)
 {
   message.innerText =msg
 }