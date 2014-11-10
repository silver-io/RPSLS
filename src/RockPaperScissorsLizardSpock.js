function Rules(){}
function Rock(){
  this.type = "Rock";
};
function Scissors(){
  this.type = "Scissors";
}
function Lizard(){
  this.type = "Lizard";
}
function Paper(){
  this.type = "Paper";
}
function Spock(){
  this.type = "Spock";
}
function Draw() {};

Rules.prototype.winningChoiceOf =
  function(choiceOne, choiceTwo){
    if(choiceOne.type === choiceTwo.type)
      return new Draw;
    else if(choiceOne.type === 'Rock')
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