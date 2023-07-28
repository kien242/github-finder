import { useEffect, useState } from "react";
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
import APIServices from "./Service";

const drawerWidth = 325;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [userList, setUserList] = useState([]);
  const [repoList, setRepoList] = useState([]);

  const [user, setUser] = useState([]);
  const [userCurrent, setUserCurrent] = useState("");
  const [isFind, setIsFind] = useState(false);

  useEffect(() => {
    fetch(`https://64bdfe1c2320b36433c7f28d.mockapi.io/api/v1/githubUser`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserList(data);
      });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getUserInfo = (userName) => {
    APIServices.getInfoUser(userName).then((data) => {
      setUser(data);
    });
  };

  const getListRepoInfo = (userName) => {
    APIServices.getListAllPublicRepos(userName).then((data) => {
      setRepoList(data);
    });
  };

  const renderRepoList = repoList.map(function (repo) {
    return (
      <RepoCard
        key={repo.id}
        props={{
          repoName: repo.name,
          repoDescription: repo.description,
          repoStar: repo.stargazers_count,
          repoLanguage: repo.language ? repo.language : "unknow",
          license: repo.license ? repo.license.name : "unknow",
          clone_url: repo.clone_url,
        }}
      />
    );
  });

  const renderUserCard = userList.map(function (users) {
    // getUserInfo(`${users.userName}`)
    return (
      <ListItemButton
        key={users.id}
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
            name: users.userName,
            avatar_url: user.avatar_url,
            following: user.following,
            followers: user.followers,
            userCurrent: userCurrent,
            setUserCurrent: setUserCurrent,
            getListRepoInfo: getListRepoInfo,
          }}
        />
      </ListItemButton>
    );
  });
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
    event.target.value ? setIsFind(true) : setIsFind(false);
  };
  console.log(isFind);
  console.log(text);
  console.log(userList);
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
        <TextField
          id="standard-basic"
          label="Github User"
          variant="standard"
          onChange={handleChange}
        />
      </Toolbar>
      <List>{isFind ? "" : renderUserCard}</List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
        {renderRepoList}
      </Box>
    </Box>
  );
}

export default App;
