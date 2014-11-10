function Rules(){}
function Rock(){
  this.type = "Rock";
};
function Scissors(){
  this.type = "Scissors";
}
function Lizard(){}
function Paper(){
  this.type = "Paper";
}
function Spock(){}

Rules.prototype.winningChoiceOf =
  function(choiceOne, choiceTwo){
    if(choiceOne.type === 'Rock')
      return choiceOne;
    else
      return choiceTwo;
  }

Rules.prototype.losingChoiceOf =
  function(choiceOne, choiceTwo){
    if(choiceOne.type === 'Rock')
      return choiceOne;
    else
      return choiceTwo;
  }