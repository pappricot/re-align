import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ContactForm from '@/components/ContactForm';

export default function ContactScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Contact Us</ThemedText>
      <ContactForm />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});