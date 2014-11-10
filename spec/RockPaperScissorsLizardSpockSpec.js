describe('Rock Paper Scissors Lizard Spock', function() {

  describe('rules of the game', function() {

    describe('Rock', function(){
      it('beats scissors', function(){
        rules = new Rules;
        rock = new Rock;
        scissors = new Scissors;

        expect(rules.winningChoiceOf(rock, scissors)).toEqual(rock);

      });

    });

  });
});