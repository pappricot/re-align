import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface VideoCardProps {
  title: string;
  duration: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, duration, thumbnail }) => {
  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <View style={styles.content}>
        <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.duration}>{duration}</ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    marginRight: 16,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'pink',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.light.accent,
   
  },
  thumbnail: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 20,
  },
  title: {
    marginBottom: 4,
  },
  duration: {
    fontSize: 14,
    color: Colors.light.accent,
  },
});

export default VideoCard;