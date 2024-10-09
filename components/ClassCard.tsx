import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface ClassCardProps {
    title: string;
    instructor: string;
    time: string;
  }
  
  const ClassCard: React.FC<ClassCardProps> = ({ title, instructor, time }) => {
    return (
        <ThemedView style={styles.container}>
        <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.instructor}>{instructor}</ThemedText>
        <ThemedText style={styles.time}>{time}</ThemedText>
      </ThemedView>
)};

export default ClassCard;

const styles = StyleSheet.create({
    container: {
      padding: 16,
      marginRight: 16,
      borderRadius: 8,
      width: 200,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      backgroundColor: '#FFF',
      marginTop: 8
    },
    title: {
      marginBottom: 8,
    },
    instructor: {
      fontSize: 14,
      marginBottom: 4,
    },
    time: {
      fontSize: 14,
      color: '#FF69B4',
    },
  });