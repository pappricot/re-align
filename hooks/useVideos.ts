import { useState, useEffect } from 'react';

interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail?: string;
}

export const useVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // This is where you would typically fetch videos from an API
    // For now, we'll use mock data
    const mockVideos: Video[] = [
      {
        id: '1',
        title: 'Barre Basics',
        duration: '15 min',
        thumbnail: 'https://example.com/barre-basics.jpg',
      },
      {
        id: '2',
        title: 'Advanced Pirouettes',
        duration: '20 min',
        thumbnail: 'https://example.com/advanced-pirouettes.jpg',
      },
      {
        id: '3',
        title: 'Stretching Routine',
        duration: '10 min',
        thumbnail: 'https://example.com/stretching-routine.jpg',
      },
      {
        id: '4',
        title: 'Pointe Technique',
        duration: '25 min',
        thumbnail: 'https://example.com/pointe-technique.jpg',
      },
    ];

    setVideos(mockVideos);
  }, []);

  return videos;
};