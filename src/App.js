import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Grid_custom_theme } from './Assets/Config/Themes/Component_theme/Grid/Grid_custom';
import * as showRepo  from './Component/RepoCard';

function App() {
  return (
    <ThemeProvider theme={Grid_custom_theme}>
      <Grid container spacing={2} display={'flex'} flexDirection={'column'} justifyContent={'start'} >
        <showRepo.showRepo/>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
