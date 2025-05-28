import { useState, useCallback } from 'react';

export function useLaps() {
  const [laps, setLaps] = useState([]);

  const addLap = useCallback((time) => {
    setLaps(prev => [...prev, time]);
  }, []);

  const deleteLap = useCallback((index) => {
    setLaps(prev => prev.filter((_, i) => i !== index));
  }, []);

  const clearLaps = useCallback(() => {
    setLaps([]);
  }, []);

  const getLapStats = useCallback(() => {
    if (laps.length < 2) return null;

    const diffs = laps.map((v, i, arr) => i === 0 ? 0 : v - arr[i-1]).slice(1);
    const avg = diffs.reduce((a,b) => a+b,0) / diffs.length;
    const min = Math.min(...diffs);
    const max = Math.max(...diffs);
    const std = Math.sqrt(diffs.reduce((a,b) => a + Math.pow(b-avg,2),0)/diffs.length);

    return {
      average: avg,
      min,
      max,
      standardDeviation: std
    };
  }, [laps]);

  return {
    laps,
    addLap,
    deleteLap,
    clearLaps,
    getLapStats
  };
} 