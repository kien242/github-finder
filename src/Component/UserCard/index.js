import { Card, CardContent, Avatar, Box, Typography, IconButton, CardActionArea } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const UserCard = ({ user }) => (
  <Card sx={{ display: "inline-block", bgcolor: "green", m: 1 , borderRadius:4}}>
    <CardContent
      sx={{
        display: "flex",
        alignItems: "center",
        pt: 2,
        "&:last-child": { pb: 2 }
      }}
    >
      <Avatar
        variant="rounded"
        src={user.avatar}
        sx={{ width: 48, height: 48 }}
      />

      <CardActionArea>
      <Box
        sx={{
          display: "flex",
          alignItems: "center"
        }}>
          <Box px={3}>
            <Typography variant="h6" sx={{ lineHeight: 1 }}>
              {user.name}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {user.twitter}
            </Typography>
          </Box>

          <IconButton
            size="small"
            sx={{
              bgcolor: "#fff",
              boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
              "&:hover": {
                bgcolor: "#fff",
                color: "#000"
              }
            }}
          >
            <AddIcon />
          </IconButton>
      </Box>
      </CardActionArea>
    </CardContent>
  </Card>
);