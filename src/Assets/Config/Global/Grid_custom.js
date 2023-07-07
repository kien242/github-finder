import { createTheme } from '@mui/material/styles';

export const Grid_custom_theme = createTheme({
    components: {
      // Name of the component
      MuiGrid: {
        styleOverrides: {
          // Name of the slot
          root: {
            margin:'0',
            padding:'0'
          },
          item: {
            padding: '0!important'
          }
        },
      },
    },
  });
  