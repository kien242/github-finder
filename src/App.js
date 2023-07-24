import react, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { UserCard } from './Component/UserCard';
import { ListItemButton, TextField } from '@mui/material';
import { green } from '@mui/material/colors';
import RepoCard from './Component/RepoCard';

const drawerWidth = 325;
const userData = [
  {
    name: "a",
    twitter: "kien242",
    avatar: "https://marmelab.com/posters/avatar-46.jpeg"
  },
  {
    name: "b",
    twitter: "kien24",
    avatar: "https://marmelab.com/posters/avatar-46.jpeg"
  },
  {
    name: "c",
    twitter: "kien242",
    avatar: "https://marmelab.com/posters/avatar-46.jpeg"
  },
  {
    name: "ZMK firmware",
    twitter: "kie42",
    avatar: "https://marmelab.com/posters/avatar-46.jpeg"
  },
  {
    name: "ZMKwae",
    twitter: "kien242",
    avatar: "https://marmelab.com/posters/avatar-46.jpeg"
  },
  {
    name: "ZKware",
    twitter: "kien242",
    avatar: "https://marmelab.com/posters/avatar-46.jpeg"
  },
  {
    name: "ZMKwae",
    twitter: "kien242",
    avatar: "https://marmelab.com/posters/avatar-46.jpeg"
  },
  {
    name: "Kware",
    twitter: "kien242",
    avatar: "https://marmelab.com/posters/avatar-46.jpeg"
  }
]

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userCurrent, setUserCurrent] = useState('')

  const renderUserCard = userData.map((user, index) => (
    <ListItemButton key={index} sx={{
      p: 0,
      m: 1,
      border: 2,
      borderColor: green[500],
      borderRadius: 2,
    }} >
      <UserCard
        props={{
          name: user.name,
          twitter: user.twitter,
          avatar: user.avatar,
          userCurrent: userCurrent,
          setUserCurrent: setUserCurrent
        }}
      />
    </ListItemButton>
  ))
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{
        borderBottom: 3,
        borderColor: "violet",
        display: 'flex',
        justifyContent: 'center',
      }} >
        <TextField id="standard-basic" label="Github User" variant="standard" />
      </Toolbar>
      <List>
        {renderUserCard}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.boady : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box display={'flex'} justifyContent={'center'} width={'100%'}>
            <Typography variant="h6" noWrap component="div" fontSize={30}>
              Repo
            </Typography>
          </Box>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper':
            {
              boxSizing: 'border-box', width: drawerWidth
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>


      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </Box>
    </Box>
  )
}

export default App;
