import { useState, useEffect, useCallback } from 'react';

export function useTimer() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const startTimer = useCallback(() => {
    if (!timerInterval) {
      const startTime = Date.now() - elapsedMs;
      const interval = setInterval(() => {
        setElapsedMs(Date.now() - startTime);
      }, 10);
      setTimerInterval(interval);
      setIsRunning(true);
    }
  }, [elapsedMs, timerInterval]);

  const stopTimer = useCallback(() => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
      setIsRunning(false);
    }
  }, [timerInterval]);

  const resetTimer = useCallback(() => {
    stopTimer();
    setElapsedMs(0);
  }, [stopTimer]);

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  return {
    elapsedMs,
    isRunning,
    timerInterval,
    formatTime,
    startTimer,
    stopTimer,
    resetTimer
  };
} 