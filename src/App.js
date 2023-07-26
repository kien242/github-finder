import react, { useEffect, useState } from "react";
import {
  Typography,
  Toolbar,
  List,
  IconButton,
  ListItemButton,
  Drawer,
  TextField,
  AppBar,
  Box,
  CssBaseline,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { green } from "@mui/material/colors";
import { UserCard } from "./Component/UserCard";
import RepoCard from "./Component/RepoCard";

const drawerWidth = 325;
const userData = [
  {
    name: "hungTrinhIT",
  },
];

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userCurrent, setUserCurrent] = useState("");
  const [user, setUser] = useState([]);
  const [repoList, setRepoList] = useState([])

  const getUserInfo = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  };

  const getRepoInfo = (userName) => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRepoList(data);
      });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    getUserInfo("hungTrinhIT");
  }, []);

  const renderUserCard = userData.map((users, index) => (
    <ListItemButton
      key={index}
      sx={{
        p: 0,
        m: 1,
        border: 2,
        borderColor: green[500],
        borderRadius: 2,
      }}
    >
      <UserCard
        props={{
          name: users.name,
          avatar_url: user.avatar_url,
          following: user.following,
          followers: user.followers,
          userCurrent: userCurrent,
          setUserCurrent: setUserCurrent,
        }}
      />
    </ListItemButton>
  ));
  const renderReposCard = (user) => {
    getRepoInfo(user);
    return (
      <>
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </>
    );
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          borderBottom: 3,
          borderColor: "violet",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField id="standard-basic" label="Github User" variant="standard" />
      </Toolbar>
      <List>{renderUserCard}</List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.boady : undefined;

  return (
    <Box sx={{ display: "flex" }}>
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
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box display={"flex"} justifyContent={"center"} width={"100%"}>
            <Typography variant="h6" noWrap component="div" fontSize={30}>
              Repo of {userCurrent}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* {renderReposCard(userCurrent)} */}
      </Box>
    </Box>
  );
}

export default App;
