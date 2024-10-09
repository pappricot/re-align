import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
}

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // This is where you would typically fetch blog posts from an API
    // For now, we'll use mock data
    const mockBlogPosts: BlogPost[] = [
      {
        id: '1',
        title: '5 Tips for Perfect Posture',
        excerpt: 'Learn how to improve your ballet posture with these essential tips...',
        image: 'https://example.com/posture.jpg',
      },
      {
        id: '2',
        title: 'The History of Pointe Shoes',
        excerpt: 'Discover the fascinating evolution of pointe shoes throughout ballet history...',
        image: 'https://example.com/pointe-shoes.jpg',
      },
      {
        id: '3',
        title: 'Nutrition for Dancers',
        excerpt: 'Find out the best foods to fuel your dance practice and performance...',
        image: 'https://example.com/dancer-nutrition.jpg',
      },
    ];

    setBlogPosts(mockBlogPosts);
  }, []);

  return blogPosts;
};