import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface ScheduleItemProps {
  title: string;
  instructor: string;
  time: string;
  duration: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ title, instructor, time, duration }) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">{title}</ThemedText>
      <ThemedText>{instructor}</ThemedText>
      <ThemedText>{time}</ThemedText>
      <ThemedText>{duration}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default ScheduleItem;