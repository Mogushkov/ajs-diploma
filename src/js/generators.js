/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  while (true) {
    const randomLevel = Math.floor(Math.random() * maxLevel) + 1;
    const RandomType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    yield new RandomType(randomLevel);
  }
}

function generatorPosition(possiblePositions, charactersPosition) {
  const position = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
  if (charactersPosition.includes(position)) {
    generatorPosition(possiblePositions, charactersPosition);
  }
  return position;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  const charactersPosition = [];
  for (let i = 0; i < characterCount; i += 1) {
    const character = characterGenerator(allowedTypes, maxLevel).next().value;
    character.position = generatorPosition(possiblePositions, charactersPosition);
    team.push(character);
    charactersPosition.push(character.position);
  }
  return team;
}
