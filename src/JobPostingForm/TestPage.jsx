import React, { useState } from 'react';

function TextFormatter() {
  const [text, setText] = useState(''); // State to hold the input text
  const [isBold, setIsBold] = useState(false); // Toggle bold style
  const [isItalic, setIsItalic] = useState(false); // Toggle italic style
  const [isDotBullet, setIsDotBullet] = useState(false); // Toggle dot bullet
  const [isNumberedBullet, setIsNumberedBullet] = useState(false); // Toggle numbered bullet

  const handleChange = (e) => {
    setText(e.target.value); // Update the text state as you type
  };

  const toggleBold = () => {
    setIsBold(prevBold => !prevBold); // Toggle bold style
  };

  const toggleItalic = () => {
    setIsItalic(prevItalic => !prevItalic); // Toggle italic style
  };

  const toggleDotBullet = () => {
    setIsDotBullet(prevState => !prevState);
    if (isNumberedBullet) setIsNumberedBullet(false); // Disable numbered bullet if dot bullet is enabled
  };

  const toggleNumberedBullet = () => {
    setIsNumberedBullet(prevState => !prevState);
    if (isDotBullet) setIsDotBullet(false); // Disable dot bullet if numbered bullet is enabled
  };

  const getBulletStyle = () => {
    if (isDotBullet) {
      return '• '; // Dot bullet
    } else if (isNumberedBullet) {
      return '1. '; // Numbered bullet
    }
    return ''; // No bullet
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={getBulletStyle() + text}
        onChange={handleChange}
        style={{
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
        }}
        className="border border-gray-300 rounded p-2 mb-4 w-full max-w-xs text-center"
      />
      <div className="flex space-x-2">
        <button
          onClick={toggleBold}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          {isBold ? 'Unbold' : 'Bold'}
        </button>
        <button
          onClick={toggleItalic}
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          Italic
        </button>
        <button
          onClick={toggleDotBullet}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          {isDotBullet ? 'Remove Dot Bullet' : 'Dot Bullet'}
        </button>
        <button
          onClick={toggleNumberedBullet}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {isNumberedBullet ? 'Remove Numbered Bullet' : 'Numbered Bullet'}
        </button>
      </div>
    </div>
  );
}

export default TextFormatter;
