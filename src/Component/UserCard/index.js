import {
  Card,
  CardContent,
  Avatar,
  Box,
  Typography,
  Grid,
  IconButton,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const UserCard = ({ props }) => {
  const {
    name,
    avatarUrl,
    following,
    follower,
    userCurrent,
    setUserCurrent,
    getListRepoInfo,
    deleteUser,
  } = props;
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClickOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Card
      sx={{
        display: "flex",
        width: "90%",
        backgroundColor: userCurrent === name ? green[200] : "",
        border: 2,
        borderRadius: 4,
        my: 2,
        ml: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          pt: 2,
          "&:last-child": { pb: 2 },
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          onClick={() => {
            setUserCurrent(name);
            getListRepoInfo(name);
          }}
        >
          <Avatar
            variant="rounded"
            src={avatarUrl}
            sx={{ width: 48, height: 48, mr: 1 }}
          />
          <Box
            sx={{
              width: "70%",
            }}
          >
            <Box width={170}>
              <Typography variant="h6" sx={{ lineHeight: 1, width: "100%" }}>
                {name}
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="caption" color="textSecondary">
                  Followers:{follower}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" color="textSecondary">
                  Following:{following}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardActionArea>

        <IconButton
          size="small"
          onClick={() => {
            handleClickOpenDialog();
          }}
        >
          <DeleteIcon />
        </IconButton>

        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Delete "{name}" ?</DialogTitle>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleCloseDialog}
              variant="contained"
              sx={{
                width: "50%",
              }}
            >
              Disagree
            </Button>
            <Button
              onClick={deleteUser}
              variant="contained"
              sx={{
                width: "50%",
              }}
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};
export default UserCard;
