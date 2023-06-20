import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CityItem from '../../CityItem';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';

const mockCityName = 'Amsterdam';
const mockTemp = 25;
const mockTempType = 'Celsius';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('CityItem', () => {
  it('should render the city name and temperature', () => {
    const { getByText } = render(
      <NavigationContainer>
        <CityItem
          cityName={mockCityName}
          temp={mockTemp}
          tempType={mockTempType}
        />
      </NavigationContainer>,
    );

    const cityNameText = getByText(mockCityName);
    const tempText = getByText(`${mockTemp}°${mockTempType}`);

    expect(cityNameText).toBeTruthy();
    expect(tempText).toBeTruthy();
  });

  it('should navigate to city details when pressed', () => {
    const navigation = {
      push: jest.fn(),
    };
    (useNavigation as jest.Mock).mockReturnValue(navigation);

    const { getByText } = render(
      <NavigationContainer>
        <CityItem
          cityName={mockCityName}
          temp={mockTemp}
          tempType={mockTempType}
        />
        ,
      </NavigationContainer>,
    );

    const pressable = getByText(mockCityName);

    fireEvent.press(pressable);

    expect(navigation.push).toHaveBeenCalledWith('CityDetails', {
      cityName: mockCityName,
    });
  });
});
