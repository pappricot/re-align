import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ScheduleItem from '@/components/ScheduleItem';
import { useClasses } from '@/hooks/useClasses';

export default function ScheduleScreen() {
  const classes = useClasses();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Class Schedule</ThemedText>
      <FlatList
        data={classes}
        renderItem={({ item }) => (
          <ScheduleItem
            title={item.title}
            instructor={item.instructor}
            time={item.time}
            duration={item.duration}
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