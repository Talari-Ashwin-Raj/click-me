import { useState } from 'react';

export default function ClickGame() {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const startGame = () => {
    setClicks(0);
    setTimeLeft(5);
    setIsPlaying(true);
    setTimerStarted(false)
  };

  const handleClick = () => {
    if (!isPlaying) return;

    // Update clicks
    setClicks(c => c + 1);

    // Start timer on first click
    if (!timerStarted) {
        setTimerStarted(true);
        const timer = setInterval(() => {
          setTimeLeft(t => {
            if (t <= 1) {
              clearInterval(timer);
              setIsPlaying(false);
              return 0;
            }
            return t - 1;
          });
        }, 1000);
      }
    };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click as fast as you can!</h1>
      
      {!isPlaying ? (
        <button onClick={startGame} style={{ padding: '15px 30px', fontSize: '20px' }}>
          {clicks === 0 ? 'Start Game' : 'Play Again'}
        </button>
      ) : (
        <button 
          onClick={handleClick}
          style={{ 
            padding: '30px 60px', 
            fontSize: '24px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          CLICK ME!
        </button>
      )}
      
      <p>Time left: {timeLeft}s</p>
      <p>Clicks: {clicks}</p>
      
      {!isPlaying && timeLeft === 0 && (
        <h2>Clicks per second: {clicks/5} clicks per second</h2>
      )}
    </div>
  );
}