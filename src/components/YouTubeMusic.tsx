"use client";

import { useEffect, useRef, useState } from 'react';

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
}

interface YTEvent {
  data: number;
}

declare global {
  interface Window {
    YT: {
      Player: new (id: string, config: object) => YTPlayer;
      PlayerState: {
        PLAYING: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubeMusic() {
  const playerRef = useRef<YTPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Cargar API de YouTube
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '_8vCIeCYZBE', // CAMBIAR por el ID de tu video
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: '_8vCIeCYZBE' // CAMBIAR por el mismo ID
        },
        events: {
          onReady: () => setIsReady(true),
          onStateChange: (event: YTEvent) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          }
        }
      });
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!playerRef.current || !isReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <>
      {/* Player invisible */}
      <div id="youtube-player" style={{ display: 'none' }}></div>
      
      {/* Botón de control */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 glass-pink rounded-full p-3 text-white hover:glass-rose transition-all duration-300"
        disabled={!isReady}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
}