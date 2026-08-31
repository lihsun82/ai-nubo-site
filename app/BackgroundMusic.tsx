'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const removeUnlockListenersRef = useRef<() => void>(() => undefined);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.32;

    const removeUnlockListeners = () => {
      document.removeEventListener('pointerdown', unlockPlayback, true);
      document.removeEventListener('keydown', unlockPlayback, true);
      document.removeEventListener('touchstart', unlockPlayback, true);
    };

    const startPlayback = async () => {
      try {
        await audio.play();
        setPlaying(true);
        removeUnlockListeners();
      } catch {
        setPlaying(false);
      }
    };

    function unlockPlayback(event: Event) {
      const target = event.target as Element | null;
      if (target?.closest?.('.music-toggle')) return;
      void startPlayback();
    }

    removeUnlockListenersRef.current = removeUnlockListeners;
    void startPlayback().then(() => {
      if (!audio.paused) return;
      document.addEventListener('pointerdown', unlockPlayback, true);
      document.addEventListener('keydown', unlockPlayback, true);
      document.addEventListener('touchstart', unlockPlayback, true);
    });

    return removeUnlockListeners;
  }, []);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.volume = 0.32;
    try {
      await audio.play();
      setPlaying(true);
      removeUnlockListenersRef.current();
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/ambient-tech.mp3" loop preload="metadata" />
      <button
        type="button"
        className={`music-toggle${playing ? ' is-playing' : ''}`}
        onClick={toggleMusic}
        aria-pressed={playing}
        aria-label={playing ? '暫停背景音樂' : '播放背景音樂'}
      >
        <span className="music-bars" aria-hidden="true"><i /><i /><i /></span>
        <span>{playing ? '音樂播放中' : '開啟音樂'}</span>
      </button>
    </>
  );
}
