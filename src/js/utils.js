export function calcTileType(index, boardSize) {
  let result = '';
  const tileNumber = index + 1;
  if (index < boardSize) {
    result = 'top';
  } else if (index >= boardSize * (boardSize - 1)) {
    result = 'bottom';
  }
  if (tileNumber % boardSize === 0) {
    if (result === '') {
      result = 'right';
    } else {
      result += '-right';
    }
  }
  if (index === 0 || tileNumber % boardSize === 1) {
    if (result === '') {
      result = 'left';
    } else {
      result += '-left';
    }
  }
  if (result === '') {
    result = 'center';
  }
  return result;
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
