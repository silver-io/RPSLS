describe('Rock Paper Scissors Lizard Spock', function() {

  beforeEach(function(){
    rock = new Rock;
    paper = new Paper;
    scissors = new Scissors;

  });

  describe('types of gestures', function(){
      it('Rock', function(){
        expect(rock.type).toEqual('Rock');
      });
      it('Scissors', function(){
        expect(scissors.type).toEqual('Scissors');
      });
      it('Paper', function(){
        expect(paper.type).toEqual('Paper')
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

      // it('loses to spock', function(){
      //   rules = new Rules;
      //   spock = new Spock;
      //   expect(rules.winningChoiceOf(rock, spock)).toEqual(spock);
      // });

    });

  });
});