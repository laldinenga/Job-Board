import React, { useState } from 'react';
import './anothercss.css';

function App() {
  const [showEvents, setShowEvents] = useState(false);

  return (
    <div className='App'>
      {showEvents ? (
        <button onClick={() => setShowEvents(false)} className="profile-btn">
          Hide profiles
        </button>
      ) : (
        <button onClick={() => setShowEvents(true)} className="profile-btn">
          Display profiles
        </button>
      )}

      <div className='profile-card'>
        {showEvents && (
          <div>
            <p>Hello world</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
