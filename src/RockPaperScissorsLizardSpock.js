function Rules(){}
function Rock(){
  this.type = "Rock";
};
function Scissors(){
  this.type = "Scissors";
}
function Lizard(){}
function Paper(){}
function Spock(){}

Rules.prototype.winningChoiceOf =
  function(choiceOne, choiceTwo){
    return choiceOne;
  }