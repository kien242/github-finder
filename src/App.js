import { useEffect, useState } from "react";
import {
  Typography,
  Toolbar,
  List,
  IconButton,
  Drawer,
  TextField,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import UserCard from "./Component/UserCard";
import RepoCard from "./Component/RepoCard";
import APIServices from "./Service";
import { red } from "@mui/material/colors";

const drawerWidth = 325;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [userList, setUserList] = useState([]);
  const [repoList, setRepoList] = useState([]);
  const [userFindList, setUserFindList] = useState([]);

  const [userCurrent, setUserCurrent] = useState("");
  const [isFind, setIsFind] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("dataKey") !== null) {
      setUserList(JSON.parse(localStorage.getItem("dataKey") || ""));
    } else {
      localStorage.setItem("dataKey", []);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [isRenderRepoList, setIsRenderRepoList] = useState(false);
  const getListRepoInfo = (userName) => {
    APIServices.getListAllPublicRepos(userName).then((data) => {
      setRepoList(data);
      setIsRenderRepoList(true);
    });
  };

  const deleteUser = (id) => {
    const newListUser = userList.filter((user) => {
      if (user.id === id && user.userName === userCurrent) {
        setIsRenderRepoList(false);
        setUserCurrent("");
      }
      return user.id !== id;
    });
    setUserList(newListUser);
  };

  const renderRepoList = repoList.map((repo) => {
    return (
      <RepoCard
        key={repo.id}
        props={{
          repoName: repo.name,
          repoDescription: repo.description,
          repoStar: repo.stargazers_count,
          repoLanguage: repo.language ? repo.language : "unknown",
          license: repo.license ? repo.license.name : "unknown",
          clone_url: repo.clone_url,
        }}
      />
    );
  });

  const renderUserCard = userList.map((users) => {
    // getUserInfo(`${users.userName}`)
    return (
      <UserCard
        key={users.id}
        props={{
          name: users.userName,
          avatarUrl: users.avatarUrl,
          following: users.following,
          follower: users.followers,
          userCurrent: userCurrent,
          setUserCurrent: setUserCurrent,
          getListRepoInfo: getListRepoInfo,
          deleteUser: () => {
            deleteUser(users.id);
          },
        }}
      />
    );
  });
  const [findName, setFindName] = useState([]);
  const handleChange = (event) => {
    event.target.value ? setIsFind(true) : setIsFind(false);
    setFindName(event.target.value);
    const result = userList.filter((user) => {
      return user.userName.includes(event.target.value);
    });
    setUserFindList(result);
  };

  const renderFindUser = userFindList.map((users) => {
    // getUserInfo(`${users.userName}`)
    return (
      <UserCard
        key={users.id}
        props={{
          name: users.userName,
          avatarUrl: users.avatarUrl,
          following: users.following,
          follower: users.followers,
          userCurrent: userCurrent,
          setUserCurrent: setUserCurrent,
          getListRepoInfo: getListRepoInfo,
          deleteUser: () => {
            deleteUser(users.id);
          },
        }}
      />
    );
  });

  const [userExist, setUserExist] = useState({});
  const [isExist, setIsExist] = useState(false);

  const addGithubuser = () => {
    APIServices.getInfoUser(findName).then((data) => {
      if (data === 404) {
        setIsExist(false);
        setDialogOpen(true);
      } else {
        setIsExist(true);
        setDialogOpen(false);
        setUserExist({
          id: data.id,
          userName: data.login,
          followers: data.followers,
          following: data.following,
          avatarUrl: data.avatar_url,
        });
      }
      setFindName("");
      setIsFind(false);
    });
  };
  useEffect(() => {
    const event = (element) => element.id === userExist.id;
    if (!userList.some(event) && isExist) {
      setUserList((userList) => [...userList, userExist]);
    }
  }, [userExist]);

  // if (userList.length !== 0) {
  //   localStorage.setItem("dataKey", JSON.stringify(userList));
  // }

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(userList));
  }, [userList]);

  const drawer = (
    <div>
      <Toolbar
        sx={{
          borderBottom: 3,
          borderColor: "violet",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TextField
          id="standard-basic"
          label={
            isFind && userFindList.length === 0
              ? "Add Github User"
              : "Find Github User"
          }
          variant="standard"
          onChange={handleChange}
          value={findName}
        />
        {isFind && userFindList.length === 0 ? (
          <Button
            variant="contained"
            onClick={() => {
              addGithubuser();
            }}
          >
            Add
          </Button>
        ) : (
          ""
        )}
      </Toolbar>
      <List>{isFind ? renderFindUser : renderUserCard}</List>
      <Divider />
    </div>
  );

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
              {/* Repo of {userCurrent} */}
              {userCurrent ? `Repo of  ${userCurrent} ` : ""}
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
        {isRenderRepoList ? renderRepoList : ""}
      </Box>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>User does not exist</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SentimentVeryDissatisfiedIcon
            sx={{ fontSize: "150px", color: red[500] }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            sx={{
              width: "50%",
              bgcolor: "red",
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default App;
