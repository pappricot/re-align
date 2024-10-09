import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ClassCard from '@/components/ClassCard';
import VideoCard from '@/components/VideoCard';
import BlogPostCard from '@/components/BlogPostCard';

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText align="center" style={styles.titleWrapper} type="title">Welcome to Align Ballet Method</ThemedText>
        <ThemedText align="center" style={styles.subTitleWrapper}>Discover the art of ballet and perfect your technique.</ThemedText>
        
        <ThemedText type="subtitle">Featured Classes</ThemedText>
        <ScrollView horizontal>
          <ClassCard title="Beginner Ballet" instructor="Jane Doe" time="Mon 18:00" />
          <ClassCard title="Intermediate Pointe" instructor="John Smith" time="Wed 19:30" />
        </ScrollView>

        <ThemedText type="subtitle">Latest Videos</ThemedText>
        <ScrollView horizontal>
          <VideoCard title="Barre Basics" duration="15 min" />
          <VideoCard title="Advanced Pirouettes" duration="20 min" />
        </ScrollView>

        <ThemedText type="subtitle">Recent Blog Posts</ThemedText>
        <BlogPostCard title="5 Tips for Perfect Posture" excerpt="Learn how to improve your ballet posture..." />
        <BlogPostCard title="The History of Pointe Shoes" excerpt="Discover the evolution of pointe shoes..." />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleWrapper: {
    marginVertical: 30,
 
  },
  subTitleWrapper: {
    marginBottom: 10,
  }
});
