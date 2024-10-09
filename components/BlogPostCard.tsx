import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'pink',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.light.accent,
 
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  title: {
    marginBottom: 8,
  },
  excerpt: {
    fontSize: 14,
    color: Colors.light.text,
  },
});

export default BlogPostCard;