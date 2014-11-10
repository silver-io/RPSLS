describe('Rock Paper Scissors Lizard Spock', function() {

  describe('rules of the game', function() {

    describe('Rock', function(){
      it('beats scissors', function(){
        rules = new Rules;
        rock = new Rock;
        scissors = new Scissors;
        expect(rules.winningChoiceOf(rock, scissors)).toEqual(rock);
      });

      it('beats lizard', function(){
        rules = new Rules;
        rock = new Rock;
        lizard = new Lizard;
        expect(rules.winningChoiceOf(rock, lizard)).toEqual(rock);
      });

      it('loses to paper', function(){
        rules = new Rules;
        rock = new Rock;
        paper = new Paper;
        expect(rules.winningChoiceOf(paper, rock)).toEqual(paper);
      });

    });

  });
});