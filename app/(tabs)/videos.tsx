import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import VideoCard from '@/components/VideoCard';
import { useVideos } from '@/hooks/useVideos';

export default function VideosScreen() {
  const videos = useVideos();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Video Library</ThemedText>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            duration={item.duration}
            thumbnail={item.thumbnail}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
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