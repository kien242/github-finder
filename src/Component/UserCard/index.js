import {
  Card,
  CardContent,
  Avatar,
  Box,
  Typography,
  CardActionArea,
} from "@mui/material";
import { green } from "@mui/material/colors";

export const UserCard = ({ props }) => {
  const {
    name,
    avatar_url,
    following,
    followers,
    userCurrent,
    setUserCurrent,
    getListRepoInfo,
  } = props;

  return (
    <Box
      sx={{
        width: "100%",
      }}
      onClick={() => {
        setUserCurrent(name);
        getListRepoInfo(name);
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
              justifyContent: "space-around",
              pt: 2,
              backgroundColor: userCurrent === name ? green[200] : "",
              "&:last-child": { pb: 2 },
            }}
          >
            <Avatar
              variant="rounded"
              src={avatar_url}
              sx={{ width: 48, height: 48 }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Box>
                  <Typography variant="h6" sx={{ lineHeight: 1 }}>
                    {name}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="textSecondary" pr={2}>
                    Followers:{followers}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Following:{following}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
