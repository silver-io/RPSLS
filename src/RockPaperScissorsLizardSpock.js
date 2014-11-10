function Rules(){}
function Rock(){}
function Scissors(){}
function Lizard(){}

Rules.prototype.winningChoiceOf =
  function(choiceOne, choiceTwo){
    return choiceOne;
  }