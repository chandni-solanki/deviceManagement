import {createTheming} from '@callstack/react-theme-provider';
import Theme from './Theme';

export const {ThemeProvider, withTheme, useTheme} = createTheming(Theme);
