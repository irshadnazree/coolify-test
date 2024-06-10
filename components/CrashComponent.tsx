import React, { useEffect } from 'react';

const CrashComponent = () => {
  useEffect(() => {
    // Start an infinite loop to crash the app
    const infiniteLoop = () => {
      while (true) {
        // Intentionally doing nothing to simulate a crash
      }
    };

    infiniteLoop();
  }, []);

  return (
    <div>
      <h1>This component will crash your app</h1>
    </div>
  );
};

export default CrashComponent;
