function Rules(){}
function Rock(){}
function Scissors(){}
function Lizard(){}
function Paper(){}

Rules.prototype.winningChoiceOf =
  function(choiceOne, choiceTwo){
    return choiceOne;
  }