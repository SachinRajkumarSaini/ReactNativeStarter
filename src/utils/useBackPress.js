import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {BackHandler, Alert} from 'react-native';

const useBackPress = onBackPress => {
  useFocusEffect(
    React.useCallback(() => {
      const handleBackPress = () => {
        onBackPress();
        return true; // Returning true prevents the default back press behavior
      };

      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, [onBackPress]),
  );
};

export default useBackPress;
