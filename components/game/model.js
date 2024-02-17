import { MOVE_ORDER } from "./constants";

export const getNextMove = (currentMove, playersCount) => {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
};

export const computeWinner = (cells, sequenceSize = 5, fieldsSize = 19) => {
  const gapSequence = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getSequenceIndexes(index) {
    const res = [
      [], // -
      [], // \
      [], //  /
      [], // |
    ];
    for (let i = 0; i < sequenceSize; i++) {
      res[0].push(i - gapSequence + index);
      res[1].push(fieldsSize * (i - gapSequence) + (i - gapSequence) + index);
      res[2].push(-fieldsSize * (i - gapSequence) + (i - gapSequence) + index);
      res[3].push(fieldsSize * (i - gapSequence) + index);
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);

      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }

  return undefined;
};
