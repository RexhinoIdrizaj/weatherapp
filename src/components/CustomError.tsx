import { StyleSheet, View } from 'react-native';
import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { selectNetworkError } from '../store/selectors/selectorErrors';
import { useThemedStyles } from '../hooks';
import { TTheme } from '../models';
import { UIText } from './UI';
import { ERROR_POPUP_TIMEOUT } from '../utils';
import { removeNetworkError } from '../store/reducers/reducerErrors';

const CustomError: FC = () => {
  const [themedStyles] = useThemedStyles(styles);
  const networkError = useAppSelector(selectNetworkError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(removeNetworkError());
    }, ERROR_POPUP_TIMEOUT);

    return () => clearTimeout(timeout);
  }, [dispatch, networkError?.message]);

  return (
    networkError !== null && (
      <View style={themedStyles.wrapper}>
        <UIText style={themedStyles.title} fontType="bold" size="fs_20">
          Error
        </UIText>
        {networkError?.status ? (
          <UIText>{networkError?.message}</UIText>
        ) : (
          <UIText>Something went wrong</UIText>
        )}
      </View>
    )
  );
};

export default CustomError;

const styles = (theme: TTheme) =>
  StyleSheet.create({
    title: {
      marginBottom: 10,
    },
    wrapper: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: theme.white,

      borderRadius: 10,

      flex: 1,
      padding: 20,
      position: 'absolute',
      top: 40,
      zIndex: 1,
    },
  });
