import { useTimer } from '../hooks/useTimer';
import { useLaps } from '../hooks/useLaps';
import { useTheme } from '../context/ThemeContext';
import { useCallback } from 'react';

export default function Stopwatch() {
  const { elapsedMs, isRunning, formatTime, startTimer, stopTimer, resetTimer } = useTimer();
  const { laps, addLap, deleteLap, clearLaps, getLapStats } = useLaps();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLap = useCallback(() => {
    if (isRunning && (laps.length === 0 || elapsedMs !== laps[laps.length - 1])) {
      addLap(elapsedMs);
    }
  }, [isRunning, laps, elapsedMs, addLap]);

  const handleReset = useCallback(() => {
    stopTimer();
    resetTimer();
    clearLaps();
  }, [stopTimer, resetTimer, clearLaps]);

  const stats = getLapStats();

  return (
    <div className={`stopwatch ${isDarkMode ? 'dark' : ''}`}>
      <div className="display">{formatTime(elapsedMs)}</div>
      
      <div className="controls">
        <button onClick={startTimer} disabled={isRunning}>시작</button>
        <button onClick={stopTimer} disabled={!isRunning}>정지</button>
        <button onClick={handleReset}>리셋</button>
        <button onClick={handleLap} disabled={!isRunning}>랩</button>
        <button onClick={toggleTheme}>
          {isDarkMode ? '라이트모드' : '다크모드'}
        </button>
      </div>

      {laps.length > 0 && (
        <div className="laps">
          <h3>랩 기록</h3>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                <span>랩 {index + 1}</span>
                <span>{formatTime(lap)}</span>
                <button onClick={() => deleteLap(index)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {stats && (
        <div className="stats">
          <h3>통계</h3>
          <p>평균: {formatTime(stats.average)}</p>
          <p>최소: {formatTime(stats.min)}</p>
          <p>최대: {formatTime(stats.max)}</p>
          <p>표준편차: {formatTime(stats.standardDeviation)}</p>
        </div>
      )}
    </div>
  );
} 