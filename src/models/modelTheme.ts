import { THEME_DARK, THEME_LIGHT, fonts } from '../theme';

export type TTheme = typeof THEME_LIGHT & typeof THEME_DARK;

export type TStylesParam<T, P> = (theme: TTheme, props: P) => T;

export type TThemeFonts = keyof typeof fonts;
