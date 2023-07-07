import * as UserCard from './Component/UserCard';
import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Grid_custom_theme } from './Assets/Config/Global/Grid_custom';

function App() {
  return (
    <ThemeProvider theme={Grid_custom_theme}>
      <Grid container spacing={2} display={'flex'} flexDirection={'column'} justifyContent={'start'} >
        <Grid item xs={4} border={2}
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
        <Grid item xs={6} border={2}>
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
      </Grid>
    </ThemeProvider>
  )
}

export default App;
