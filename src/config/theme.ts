// Types
import { SECTION_THEME } from '../types/enums';

export const darkTheme = {
    background: 'bg-gray-900',
    offBackground: 'bg-[#1f2937]',
    title: 'text-white',
    body: 'text-gray-400'
};

export const lightTheme = {
    background: 'bg-white',
    offBackground: 'bg-[#e5e7eb]',
    title: 'text-gray-900',
    body: 'text-gray-500'
};

export const getColors = (theme: SECTION_THEME) => {
    switch (theme) {
        case SECTION_THEME.DARK:
            return [darkTheme, lightTheme];
        case SECTION_THEME.LIGHT:
            return [lightTheme, darkTheme];
    }
};
