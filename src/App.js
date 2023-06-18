import { Application } from "pixi.js";
import React, { useEffect, useRef } from "react";

const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0x5BBA6F,
});

function App() {
  const ref = useRef(null);

  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    app.start();

    return () => {
      // On unload stop the application
      app.stop();
    };
  }, []);
 
  return <div ref={ref} />;
}

export default App;