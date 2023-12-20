interface Theme {
  cor: {
    [key: string]: string
  }
  textSizes: {
    [key: string]: string
  }
  fonts: {
    [key: string]: string
  }
}

export const defaultTheme: Theme = {
  cor: {
    baseWhite: '#FFFFFF',
    baseBackground: '#FAFAFA',
    baseCard: '#F3F2F2',
    baseInput: '#EDEDED',
    baseButton: '#E6E5E5',
    baseHover: '#D7D5D5',
    baseLabel: '#8D8686',
    baseText: '#574F4D',
    baseSubtitle: '#403937',
    baseTitle: '#272221',
    brandPurpleDark: '#4B2995',
    brandPurple: '#8047F8',
    brandPurpleLight: '#EBE5F9',
    brandYellowDark: '#C47F17',
    brandYellow: '#DBAC2C',
    brandYellowLight: '#F1E9C9',
  },
  textSizes: {
    'title-title-xl': '3rem',
    'title-title-l': '2rem',
    'title-title-m': '1.5rem',
    'title-title-s': '1.2rem',
    'title-title-xs': '1.125rem',
    'text-regular-l': '1.25rem',
    'text-bold-l': '1.25rem',
    'text-regular-m': '1rem',
    'text-bold-m': '1rem',
    'text-regular-s': '0.875rem',
    'text-bold-s': '0.75rem',
    'components-tag': '0.625rem',
    'components-button-g': '0.875rem',
    'components-button-s': '0.75rem',
  },
  fonts: {
    regular: "'Roboto'",
    title: "'Baloo 2'",
  },
}
