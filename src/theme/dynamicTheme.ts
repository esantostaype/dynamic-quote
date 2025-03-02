import { extendTheme } from '@mui/joy/styles'

declare module '@mui/joy/styles' {
  interface PalettePrimaryOverrides {
    950: true
  }

  interface PaletteNeutralOverrides {
    950: true
  }

  interface PaletteDangerOverrides {
    950: true
  }
}
export const dynamicTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: "#eeffe4",
          100: "#d7ffc4",
          200: "#b2ff90",
          300: "#7fff50",
          400: "#3cff00",
          500: "#30e600",
          600: "#22b800",
          700: "#198b00",
          800: "#196d07",
          900: "#185c0b",
          950: "#063400",
        },
        danger: {
          50: "#fef2f2",
          100: "#ffe2e2",
          200: "#ffc9c9",
          300: "#ffa2a2",
          400: "#ff6467",
          500: "#fb2c36",
          600: "#e7000b",
          700: "#c10007",
          800: "#9f0712",
          900: "#82181a",
          950: "#460809",
        }
      },
    },
  },
  fontFamily: {
    body: 'IBM Plex Sans, sans-serif'
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: () => ({
          fontSize: '1rem',
          padding: '0.65rem 1rem',
          backgroundColor: 'var(--soft-bg)',
          border: 'none',
          '&:hover': {
            backgroundColor: 'var(--soft-bg-hover)'
          },
          transition: 'background-color 0.1s ease-in-out'          
        }),
      },
    },
    JoySelect: {
      styleOverrides: {
        root: () => ({
          fontSize: '1rem',
          padding: '0.65rem 1rem',
          backgroundColor: 'var(--soft-bg)',
          border: 'none',
          '&:hover': {
            backgroundColor: 'var(--soft-bg-hover)'
          },
          transition: 'background-color 0.1s ease-in-out',
        }),
        listbox: {
          fontSize: '1rem',
          backgroundColor: 'var(--surface)',
          boxShadow: 'none',
          border: 'none',
        }
      }
    },
    JoyOption: {
      styleOverrides: {
        root: () => ({
          '&&:hover': {
            backgroundColor: 'var(--soft-bg-hover)'
          },
          '&&:active': {
            backgroundColor: 'var(--soft-bg-active)'
          },
          '&&[aria-selected="true"]': {
            backgroundColor: 'var(--soft-bg-success)'
          }
        })
      }
    },
    JoyTextarea: {
      styleOverrides: {
        root: () => ({
          fontSize: '1rem',
          padding: '0.65rem 1rem',
          backgroundColor: 'var(--soft-bg)',
          border: 'none',
          '&:hover': {
            backgroundColor: 'var(--soft-bg-hover)'
          },
          transition: 'background-color 0.1s ease-in-out'
        })
      }
    },
    JoyCheckbox: {
      styleOverrides: {
        checkbox: ({ ownerState }) => ({
          fontSize: '1rem',
          height: '1.5rem',
          width: '1.5rem',
          border: 'none',
          transition: 'background-color 0.1s ease-in-out',
          backgroundColor: 'var(--soft-bg)',
          '&:hover': {
            backgroundColor: 'var(--soft-bg-hover)',
          },
          ...(ownerState.checked && {
            backgroundColor: '',
            '&:hover': {
              backgroundColor: '',
            },
            color: 'black'
          })
        })
      }
    },
    JoyRadio: {
      styleOverrides: {
        radio: ({ ownerState }) => ({
          fontSize: '1rem',
          height: '1.5rem',
          width: '1.5rem',
          border: 'none',
          transition: 'background-color 0.1s ease-in-out',
          backgroundColor: 'var(--soft-bg)',
          '&:hover': {
            backgroundColor: 'var(--soft-bg-hover)',
          },
          ...(ownerState.checked && {
            backgroundColor: 'var(--accent-500)',
            '&:hover': {
              backgroundColor: 'var(--accent-600)',
            },
            color: 'black'
          })
        })
      }
    }
  }
})