import { createStitches, defaultThemeMap } from '@stitches/react'
import * as defaultTheme from '@igniteui-pedrocs378/tokens'

export const {
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: defaultTheme,
})
