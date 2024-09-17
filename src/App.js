import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);
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
          backgroundColor: color,
          position: 'relative',
        }}
      />
      Random Color Generator Generated Color: {color}
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
        onClick={() => setColor(randomColor())}
      >
        Generate
      </button>
    </div>
  );
}
