import React, { useEffect, useState } from "react";

const PathFinder = () => {
  const [path, setPath] = useState<string>("");
  const [lettrets, setLetters] = useState<string>("");

  const findPathGame = (grid: any) => {
    let gameInProgress = true;

    let path = [];
    let letters = [];

    let currentRow = 0;
    let currentCol = 0;
    let direction = "right";

    while (gameInProgress) {
      let currentChar = grid[currentRow][currentCol];
      path.push(currentChar);
      if (/^[A-Z]$/.test(currentChar)) letters.push(currentChar);

      if (grid[currentRow][currentCol] === "s") {
        gameInProgress = false;
        break;
      }

      if (grid[currentRow][currentCol] === "+") {
        if (direction === "left" || direction === "right") {
          if (currentRow == 0) {
            direction = "down";
          } else if (currentRow == grid[currentRow].length - 1) {
            direction = "up";
          } else if (grid[currentRow - 1][currentCol] != " ") {
            direction = "up";
          } else if (grid[currentRow + 1][currentCol] != " ") {
            direction = "down";
          }
        } else if (direction === "up" || direction === "down") {
          if (currentCol == 0) {
            direction = "right";
          } else if (currentCol == grid[currentRow].length - 1) {
            direction = "left";
          } else if (grid[currentRow][currentCol - 1] != " ") {
            direction = "left";
          } else if (grid[currentRow][currentCol + 1] != " ") {
            direction = "right";
          }
        }
      }

      if (direction === "right") currentCol++;
      if (direction === "left") currentCol--;
      if (direction === "up") currentRow--;
      if (direction === "down") currentRow++;
    }

    setPath(`Path: ${path.join("")}`);
    setLetters(`Letters: ${letters.join("")}`);
    return [path, letters];
  };

  // Example usage
  const grid = [
    [">", "-", "-", "-", "A", "-", "-", "-", "+"],
    [" ", "-", "A", "-", "+", " ", " ", " ", "|"],
    ["+", "U", "-", "+", " ", " ", " ", " ", "C"],
    ["|", "-", "A", "|", " ", " ", " ", " ", "|"],
    ["s", "-", "A", "+", "C", "-", "-", "-", "+"],
  ];
  useEffect(() => {
    findPathGame(grid);
  }, []);

  return (
    <div>
      <p>{path}</p>
      <p>{lettrets}</p>
    </div>
  );
};

export default PathFinder;
