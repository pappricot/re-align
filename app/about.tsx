import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AboutScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText type="title">About Align Ballet Method</ThemedText>
        <ThemedText>Our philosophy and approach to ballet...</ThemedText>
        
        <ThemedText type="subtitle">Our Instructors</ThemedText>
        {/* Add instructor bios here */}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});