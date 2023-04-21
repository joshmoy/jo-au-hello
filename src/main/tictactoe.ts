export type gridType = {
  [key: string]: string;
};

export const grid: gridType = {
  topLeft: "topLeft",
  topMiddle: "topMiddle",
  topRight: "topRight",
  centerLeft: "centerLeft",
  centerMiddle: "centerMiddle",
  centerRight: "centerRight",
  bottomLeft: "bottomLeft",
  bottomMiddle: "bottomMiddle",
  bottomRight: "bottomRight",
};

export type Grid = typeof grid;

export class Tictactoe {
  firstPlayer = "X";
  secondPlayer = "O";
  activePlayer = "";

  availablePositions = Object.keys(grid);
  allPositions = Object.keys(grid);

  gridResult: Grid = {
    topLeft: "",
    topMiddle: "",
    topRight: "",
    centerLeft: "",
    centerMiddle: "",
    centerRight: "",
    bottomLeft: "",
    bottomMiddle: "",
    bottomRight: "",
  };

  play = (position: string) => {
    if (!this.allPositions.includes(position)) {
      return "Invalid Position";
    }
    if (this.availablePositions.includes(position)) {
      this.setActivePlayer();
      this.gridResult[position] = this.activePlayer;
      this.deletePlayedPosition(position);
      return this.checkGameStatus();
    } else {
      return "Position Unavailable";
    }
  };

  played = () => {
    return this.activePlayer;
  };

  private deletePlayedPosition = (position: string) => {
    const updatedAvailablePositions = this.availablePositions?.filter((el) => el !== position);
    this.availablePositions = updatedAvailablePositions;
  };

  private checkGameStatus = () => {
    if (this.availablePositions.length < 1) return "The game is a draw";
    const winningString = `${this.activePlayer} wins`
    if (this.checkMatch(0, 1) || this.checkMatch(3, 1) || this.checkMatch(6, 1)) {
      return winningString;
    } else if (this.checkMatch(0, 3) || this.checkMatch(1, 3) || this.checkMatch(2, 3)) {
      return winningString;
    } else if (this.checkMatch(0, 4) || this.checkMatch(3, 2)) {
      return winningString;
    }
  };

  private checkMatch = (index: number, interval: number): boolean => {
    const resultKey = this.allPositions[index];
    const firstMatchingKey = this.allPositions[index + interval];
    const secondMatchingKey = this.allPositions[index + interval * 2];
    if (
      this.gridResult[resultKey] === this.gridResult[firstMatchingKey] &&
      this.gridResult[resultKey] === this.gridResult[secondMatchingKey]
    ) {
      return true;
    }
    return false;
  };

  private setActivePlayer = () => {
    if (!this.activePlayer || this.activePlayer === this.secondPlayer) {
      this.activePlayer = this.firstPlayer;
    } else if (this.activePlayer === this.firstPlayer) {
      this.activePlayer = this.secondPlayer;
    }
  }
}
