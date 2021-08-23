var baseLength = document.querySelector("#base-length");
var heightLength =document.querySelector("#height-length");
var checkButton =document.querySelector("#check-button");
var message =document.querySelector("#display-message");
checkButton.addEventListener("click",function clickHandle()
{
    // console.log("clicked");
    var base = baseLength.value;
    var height =heightLength.value;
    var area = calculateArea(base,height);
    displayMessage(`The area of the triangle is ${area}`);

} );
function calculateArea( base,height)
{
    var area = 0.5 *base*height;
    return area;
}
function displayMessage(msg)
{
   message.innerText =msg;
}
