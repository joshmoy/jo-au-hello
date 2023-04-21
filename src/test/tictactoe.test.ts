import { grid, Tictactoe } from "../main/tictactoe";

describe("When playing tictactoe", () => {
  let tictactoe: Tictactoe;

  beforeEach(() => {
    tictactoe = new Tictactoe();
  });

  it("should ensure X is played first", () => {
    tictactoe.play(grid.topLeft);
    expect(tictactoe.played()).toEqual("X");
  });

  it("should ensure O is played after X", () => {
    tictactoe.play(grid.topLeft);
    tictactoe.play(grid.topMiddle);
    expect(tictactoe.played()).toEqual("O");
  });

  it("should ensure X is played after X and O has been played", () => {
    tictactoe.play(grid.topLeft);
    tictactoe.play(grid.topMiddle);
    tictactoe.play(grid.topRight);
    expect(tictactoe.played()).toEqual("X");
  });

  it("should ensure a player can not play in a position that is not available", () => {
    expect(tictactoe.play("leftMiddle")).toEqual("Invalid Position");
  });

  it("should ensure a player can not play in a position that has been played", () => {
    tictactoe.play(grid.topLeft);
    expect(tictactoe.play(grid.topLeft)).toEqual("Position Unavailable");
  });

  it("should ensure that the result position is updated when a player that plays X", () => {
    tictactoe.play(grid.topLeft);
    expect(tictactoe.gridResult[grid.topLeft]).toEqual("X");
  });

  it("should ensure that the result position is updated when a player that plays O", () => {
    tictactoe.play(grid.topLeft);
    tictactoe.play(grid.topRight);
    expect(tictactoe.gridResult[grid.topRight]).toEqual("O");
  });

  it("should say there's a draw if all positions have been filled with no winner", () => {
    tictactoe.play(grid.topLeft);
    tictactoe.play(grid.topMiddle);
    tictactoe.play(grid.topRight);
    tictactoe.play(grid.centerLeft);
    tictactoe.play(grid.centerMiddle);
    tictactoe.play(grid.centerRight);
    tictactoe.play(grid.bottomLeft);
    tictactoe.play(grid.bottomMiddle);

    expect(tictactoe.play(grid.bottomRight)).toEqual("The game is a draw");
  });

  it("should say 'X wins' if player one gets a horizontal match", () => {
    tictactoe.play(grid.topLeft);
    tictactoe.play(grid.centerLeft);
    tictactoe.play(grid.topMiddle);
    tictactoe.play(grid.centerMiddle);

    expect(tictactoe.play(grid.topRight)).toEqual("X wins");
  });

  it("should say 'X wins' if player one gets a vertical match", () => {
    tictactoe.play(grid.topLeft);
    tictactoe.play(grid.topMiddle);
    tictactoe.play(grid.centerLeft);
    tictactoe.play(grid.centerMiddle);

    expect(tictactoe.play(grid.bottomLeft)).toEqual("X wins");
  });

  it("should say 'X wins' if player one gets a diagonal match", () => {
    tictactoe.play(grid.topLeft);
    tictactoe.play(grid.topMiddle);
    tictactoe.play(grid.centerMiddle);
    tictactoe.play(grid.centerLeft);

    expect(tictactoe.play(grid.bottomRight)).toEqual("X wins");
  });
});
