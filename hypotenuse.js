var sideLength = document.querySelectorAll(".side-length");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#display-message");

checkButton.addEventListener("click",function clickHandler()
{
    // console.log("clicked");
    var sum = sumOfSquares(Number(sideLength[0].value),Number(sideLength[1].value));
    var lengthOfHypotenuse = Math.sqrt(sum);
    showMessage(`the length of the hypotenuse is ${lengthOfHypotenuse} cm`);
})
function sumOfSquares(a,b)
{
    var sum = a*a + b*b
    return sum;
}
function showMessage(msg)
{
    message.innerText= msg;
}