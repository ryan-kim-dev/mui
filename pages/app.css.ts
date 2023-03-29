import { style } from '@vanilla-extract/css';
import { vars } from '@component/styles/vars.css';

export const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: vars.colors.primary,
  width: '100vw',
  height: '100vh',
});
