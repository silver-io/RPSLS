describe('Rock Paper Scissors Lizard Spock', function() {

  beforeEach(function(){
    rock = new Rock;
    paper = new Paper;
    scissors = new Scissors;
    lizard = new Lizard;
    spock = new Spock;

  });

  describe('types of gestures', function(){
      it('Rock', function(){
        expect(rock.type).toEqual('Rock');
      });
      it('Paper', function(){
        expect(paper.type).toEqual('Paper')
      });
      it('Scissors', function(){
        expect(scissors.type).toEqual('Scissors');
      });
      it('Lizard', function(){
        expect(lizard.type).toEqual('Lizard')
      });
      it('Spock', function(){
        expect(spock.type).toEqual('Spock')
      });
  });

  describe('rules of the game', function() {
    beforeEach(function(){
      rules = new Rules;
    });

    describe('Rock', function(){
      it('beats scissors', function(){
        expect(rules.winningChoiceOf(rock, scissors)).toEqual(rock);
      });

      it('beats lizard', function(){
        lizard = new Lizard;
        expect(rules.winningChoiceOf(rock, lizard)).toEqual(rock);
      });

      it('loses to paper', function(){
        expect(rules.losingChoiceOf(rock, paper)).toEqual(rock);
      });

      it('loses to spock', function(){
        rules = new Rules;
        expect(rules.losingChoiceOf(rock, spock)).toEqual(rock);
      });

      it('Rock draws with Rock', function(){
        draw = new Draw;
        expect(rules.winningChoiceOf(rock, rock)).toEqual(draw);
      });

    describe('Paper', function(){
      it('beats rock', function(){
        expect(rules.winningChoiceOf(paper, rock)).toEqual(paper)

      });

    });

    });

  });
});