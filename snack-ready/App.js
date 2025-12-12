import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Homepage from './pages/Homepage';

export default function App() {
  return (
    <>
      <Homepage />
      <StatusBar style="auto" />
    </>
  );
}
