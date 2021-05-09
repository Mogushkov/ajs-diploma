import commonDataGame from './commonDataGame';

export default function checkPossiblePositions() {
  const firstPossiblePositions = [];
  const secondPossiblePositions = [];
  const { boardSize } = commonDataGame;
  const board = boardSize * boardSize;
  for (let i = 0; i < board; i += 1) {
    if (i % boardSize === 0) {
      firstPossiblePositions.push(i);
      firstPossiblePositions.push(i + 1);
      secondPossiblePositions.push(i - 2);
      secondPossiblePositions.push(i - 1);
    }
  }
  const possiblePositions = {
    firstPlayer: firstPossiblePositions,
    secondPlayer: secondPossiblePositions.filter((i) => i > 0),
  };
  return possiblePositions;
}
