import Button from '@mui/material/Button';
import { Box, Grid, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'
import * as UserCard from './Component/UserCard';


function App() {
  return (
    <UserCard.UserCard
      user={{
        name: "ZMK firmware",
        twitter: "@johndoe",
        avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
      }}
    />
  )
}

export default App;
