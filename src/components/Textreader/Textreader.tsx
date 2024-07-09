import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faToggleOn, faToggleOff, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

const TextReader = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      if (isToggleOn) {
        const selectedText = window.getSelection()?.toString();
        if (selectedText) {
          readText(selectedText);
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isToggleOn]);

  const readText = (text: string | undefined) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleIconClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleToggleClick = () => {
    setIsToggleOn(!isToggleOn);
    console.log("Toggle is now: ", !isToggleOn ? "On" : "Off");
  };

  return (
    <div style={{ position: 'relative' }}>
      <FontAwesomeIcon
        icon={faUniversalAccess}
        onClick={handleIconClick}
        style={{ cursor: 'pointer', fontSize: '2rem' }}
        aria-label="Toggle Read Aloud Options"
      />
      {isDropdownVisible && (
        <div style={{
          position: 'absolute',
          top: '150%',
          left: '50%', // Adjust left position if needed
          transform: 'translateX(-50%)', // Center horizontally under the icon
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          width: '150px',
        }}>
          <button
            onClick={handleToggleClick}
            aria-label={isToggleOn ? "Turn off read aloud" : "Turn on read aloud"}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <span style={{ marginLeft: '8px' }}>Text to Audio</span>
            <FontAwesomeIcon icon={isToggleOn ? faToggleOn : faToggleOff} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TextReader;
