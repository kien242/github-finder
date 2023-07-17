import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CollapsibleTable from './Component/RepoCard';
import { darkTheme } from './Assets/Config/Themes/Global_theme/Darkmode';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container spacing={2} display={'flex'} justifyContent={'center'} >
        <CollapsibleTable />
      </Grid>
    </ThemeProvider>
  )
}


export default App;
