import { useEffect } from "react";

export default function ColorShuffle() {
  const colors = ["red", "blue", "green", "yellow", "pink", "orange"];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const shuffledColors = shuffleArray([...colors]);
    console.log(shuffledColors);
  }, []);

  return (
    <div>
      <h2>colr</h2>
    </div>
  );
}
