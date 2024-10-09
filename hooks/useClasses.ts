import { useState, useEffect } from 'react';

interface Class {
  id: string;
  title: string;
  instructor: string;
  time: string;
  duration: string;
}

export const useClasses = () => {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const mockClasses: Class[] = [
        { id: '1', title: 'Beginner Ballet', instructor: 'Jane Doe', time: 'Mon 18:00', duration: '60 min' },
        { id: '2', title: 'Intermediate Pointe', instructor: 'John Smith', time: 'Wed 19:30', duration: '90 min' },
        { id: '3', title: 'Advanced Contemporary', instructor: 'Alice Johnson', time: 'Fri 20:00', duration: '75 min' },
      ];

    setClasses(mockClasses);
  }, []);

  return classes;
};