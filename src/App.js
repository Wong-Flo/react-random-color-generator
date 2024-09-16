import chalk from 'chalk';
import randomColor from 'randomcolor';
import { useState } from 'react';

// const hue = [];
// const luminosity = [];
// hue: `${hue}`,
// luminosity: `${luminosity}`,
const initialColor = randomColor();

export default function App() {
  const [color, setColor] = useState(initialColor);

  // const [colorInput, setColorInput] = useState();
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
      }}
    >
      <h1>Random Color Generator</h1>
      <div
        id="colorSquare"
        style={{
          width: '300px',
          height: '100px',
          padding: '50px',
          backgroundColor: initialColor,
          position: 'relative',
        }}
      />
      Generated Color: {chalk.hex(randomColor)}
      <h3
        style={{
          fontSize: '15px',
        }}
      >
        Click on the button to generate a random Color
      </h3>
      <button
        style={{
          padding: '10px',
          fontSize: '15px',
          marginTop: '2px',
          marginBottom: '10px',
        }}
        onClick={() =>
          (document.getElementById('colorSquare').style.backgroundColor =
            randomColor())
        }
      >
        Generate
      </button>
    </div>
  );
}
