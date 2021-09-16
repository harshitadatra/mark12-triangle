const formInput =document.querySelector(".quiz-form");
const message =document.querySelector("#display-message");
const checkButton = document.querySelector("#check-button")
const correctAnswers =["90","rightAngled"];
 checkButton.addEventListener("click", function clickHandler()
 {
    calculateScore();


 });
 function calculateScore(e)
 {
     
     var formResults = new FormData(formInput);
     var score=0;
     var index=0;
     for(let values of formResults.values())
     {
         if(values == correctAnswers[index])
         {
             score= score+1;
             index=index+1;
         }
     }
    showMessage (`the score is ${score}`);

 }
  function showMessage(msg)
  {
      message.innerText = msg;
  }
 

 