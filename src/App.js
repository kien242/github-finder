import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Grid_custom_theme } from './Assets/Config/Themes/Component_theme/Grid/Grid_custom';
import CollapsibleTable from './Component/RepoCard';
import * as UserCard from './Component/UserCard'

function App() {
  return (
    <ThemeProvider theme={Grid_custom_theme}>
      <Grid container spacing={2} display={'flex'} justifyContent={'center'} >
          <CollapsibleTable />
        </Grid>
    </ThemeProvider>
  )
}

export default App;
