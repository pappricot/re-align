import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ClassCardProps {
  title: string;
  instructor: string;
  time: string;
}

const ClassCard: React.FC<ClassCardProps> = ({ title, instructor, time }) => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.instructor}>{instructor}</ThemedText>
        <ThemedText style={styles.time}>{time}</ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    marginRight: 16,
    borderRadius: 20,
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: Colors.light.accent,
    marginVertical: 10,
   
  },
  content: {
    padding: 20,
  },
  title: {
    marginBottom: 8,
  },
  instructor: {
    fontSize: 14,
    marginBottom: 4,
    color: Colors.light.text,
  },
  time: {
    fontSize: 14,
    color: Colors.light.accent,
  },
});

export default ClassCard;