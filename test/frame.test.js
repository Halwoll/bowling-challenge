const Frame = require('../lib/frame');

beforeEach(() => {
  game = new Frame();
});

describe('Frame', () => {
  it('checks to see if there is a new instance of the Frame class', () => {
    expect(game).toBeInstanceOf(Frame);
  });

  it('gives me 0 points to start the game', () => {
    expect(game.startScore).toBe(0);
  });

  it('gives me a maximum score of 10 per frame', () => {
    expect(game.maxScore).toBe(10);
  });

  // it('gives me 2 rolls per frame', () => {
  //   expect(game.rolls).toBe(roll1 + roll2);
  // });

  // it('gives me the individual score for each roll', () => {
  // expect(game.rollScore).toBe();
  // });


  // it('sums the score of both rolls in the frame', () => {
  //   expect(game.frameScore).toBe(roll1 + roll2);
  // });

  // it('gives me a strike if I get a maxScore on my first roll', () => {
  //   expect(game.method).toReturn("Strike!");
  // });

  // it('gives me a spare if I get a maxScore on both rolls', () => {
  //   expect(game.method).toReturn("Spare!");
  // });
});

  // game.method needs to get changed to reflect new method/object name as .method is just a placeholder
