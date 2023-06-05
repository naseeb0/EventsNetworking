import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { colors } from '../config/theme';

const RecommendedScreen = () => {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  return (
    <View style={{ backgroundColor: activeColors.primary, flex: 1 }}>
      <Text style={{ color: activeColors.text }}>Recommendation Here</Text>
    </View>
  );
};

export default RecommendedScreen;
