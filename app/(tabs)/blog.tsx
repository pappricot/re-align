import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import BlogPostCard from '@/components/BlogPostCard';
import { useBlogPosts } from '@/hooks/useBlogPosts';

export default function BlogScreen() {
  const blogPosts = useBlogPosts();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Blog</ThemedText>
      <FlatList
        data={blogPosts}
        renderItem={({ item }) => (
          <BlogPostCard
            title={item.title}
            excerpt={item.excerpt}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});