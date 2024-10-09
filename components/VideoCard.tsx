import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface VideoCardProps {
  title: string;
  duration: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, duration, thumbnail }) => {
  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
      <ThemedText style={styles.duration}>{duration}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  duration: {
    fontSize: 14,
    color: '#FF69B4',
  },
});

export default VideoCard;