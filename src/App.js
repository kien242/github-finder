import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Grid_custom_theme } from './Assets/Config/Themes/Component_theme/Grid/Grid_custom';
import * as showRepo from './Component/RepoCard';
import * as UserCard from './Component/UserCard'

function App() {
  return (
    <ThemeProvider theme={Grid_custom_theme}>
      <Grid container spacing={2} display={'flex'} justifyContent={'center'} >
        <Grid item md={2} border={2} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
          <UserCard.UserCard
            user={{
              maxWidth: '100%',
              name: "ZMK firmware",
              twitter: "@johndoe",
              avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
            }}
          />
            <UserCard.UserCard
            user={{
              maxWidth: '100%',
              name: "ZMK firmware",
              twitter: "@johndoe",
              avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
            }}
          />
        </Grid>
        <Grid item md={9} border={2} display={'flex'} justifyContent={'center'}>
          <showRepo.showRepo />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
