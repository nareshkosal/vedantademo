import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

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

  const readText = (text: string) => {
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
    <div>
      <div style={{ position: 'fixed', top: 20, right: 20 }}>
        <FontAwesomeIcon
          icon={faVolumeUp}
          onClick={handleIconClick}
          style={{ cursor: 'pointer' }}
          aria-label="Toggle Read Aloud Options"
        />
        {isDropdownVisible && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            padding: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}>
            <button 
              onClick={handleToggleClick} 
              aria-label={isToggleOn ? "Turn off read aloud" : "Turn on read aloud"}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={isToggleOn ? faToggleOn : faToggleOff} />
              {isToggleOn ? " On" : " Off"}
            </button>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default TextReader;