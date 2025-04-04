import React, { useEffect } from "react";

function Timer({ timeLeft, setTimeLeft }) {
    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft((prev) => Math.max(prev - 1, 0));
        }, 1000);
    
        return () => clearInterval(timer);
      }, [setTimeLeft]);  // ✅ Added 'setTimeLeft' in dependencies
    
      return <div>Time left: {timeLeft} seconds</div>;
}

export default Timer;
