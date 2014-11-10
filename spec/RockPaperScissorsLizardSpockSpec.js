describe('Rock Paper Scissors Lizard Spock', function() {

  beforeEach(function(){
    rock = new Rock;
    scissors = new Scissors;
  });

  describe('types of gestures', function(){
      it('Rock', function(){
        expect(rock.type).toEqual('Rock');
      });
      it('Scissors', function(){
        expect(scissors.type).toEqual('Scissors');

      });
  });

  describe('rules of the game', function() {

    describe('Rock', function(){
      it('beats scissors', function(){
        rules = new Rules;
        expect(rules.winningChoiceOf(rock, scissors)).toEqual(rock);
      });

      it('beats lizard', function(){
        rules = new Rules;
        lizard = new Lizard;
        expect(rules.winningChoiceOf(rock, lizard)).toEqual(rock);
      });

      it('loses to paper', function(){
        rules = new Rules;
        paper = new Paper;
        expect(rules.winningChoiceOf(paper, rock)).toEqual(paper);
      });

      it('loses to spock', function(){
        rules = new Rules;
        spock = new Spock;
        expect(rules.winningChoiceOf(spock, rock)).toEqual(spock);
      });

    });

  });
});