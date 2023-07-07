import * as UserCard from './Component/UserCard';
import { Grid, Switch, FormControlLabel } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Grid_custom_theme } from './Assets/Config/Themes/Component_theme/Grid_custom';
import TogleSwitch from './Component/TogleMode/TogleSwitch';

function App() {
  return (
    <ThemeProvider theme={Grid_custom_theme}>
      <Grid container spacing={2} display={'flex'} flexDirection={'column'} justifyContent={'start'} >
        <Grid
          item xs={4} border={2}
        >
          <UserCard.UserCard
            user={{
              name: "ZMK firmware",
              twitter: "@johndoe",
              avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
            }}
          />

          <UserCard.UserCard
            user={{
              name: "ZMK firmware",
              twitter: "@johndoe",
              avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
            }}
          />
        </Grid>
        <Grid
          item xs={6} border={2}
        >
          <UserCard.UserCard
            user={{
              name: "ZMK firmware",
              twitter: "@johndoe",
              avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
            }}
          />

          <UserCard.UserCard
            user={{
              name: "ZMK firmware",
              twitter: "@johndoe",
              avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
            }}
          />
        </Grid>

        <TogleSwitch />
      </Grid>
    </ThemeProvider>
  )
}

export default App;
