import {
  Card,
  CardContent,
  Avatar,
  Box,
  Typography,
  CardActionArea,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";

export const UserCard = ({ props }) => {
  const { name, userCurrent, setUserCurrent } = props;
  const [user, setUser] = useState([]);
  const getUserInfo = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setUser(data);
      });
  };
  console.log(user);

  return (
    <Box
      sx={{
        width: "100%",
      }}
      onClick={() => {
        console.log("name: ", name);
        setUserCurrent(name);
        getUserInfo(name);
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              pt: 2,
              backgroundColor: userCurrent === name ? red[200] : "",
              "&:last-child": { pb: 2 },
            }}
          >
            <Avatar
              variant="rounded"
              src={user.avatar_url}
              sx={{ width: 48, height: 48 }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box px={2}>
                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                  {name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {user.public_repos}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
