import {
  createTheme,
  createGlobalTheme,
  createThemeContract,
} from '@vanilla-extract/css';

/** 앱 전체에서 재사용할 스타일 변수들 */
// ex) background: root.colors.primary
const root = createGlobalTheme(':root', {
  colors: {},
});

const colors = createThemeContract({
  primary: null,
  secondary: null,
});

export const light = createTheme(colors, {
  primary: 'yellow',
  secondary: 'orange',
});
export const dark = createTheme(colors, {
  primary: 'gray',
  secondary: 'black',
});

export const vars = { ...root, colors };
