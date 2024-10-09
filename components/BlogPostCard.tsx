import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  image?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, excerpt, image }) => {
  return (
    <ThemedView style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.content}>
        <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.excerpt}>{excerpt}</ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  excerpt: {
    fontSize: 14,
    color: '#8E4585',
  },
});

export default BlogPostCard;