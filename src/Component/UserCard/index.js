import { Card, CardContent, Avatar, Box, Typography, CardActionArea } from "@mui/material";
import { red } from "@mui/material/colors";


export const UserCard = ({ props }) => {
  const { avatar, name, twitter, userCurrent, setUserCurrent } = props
  return (
    <Box
      sx={{
        width: "100%",
      }}
      onClick={() => {
        console.log("name: ", name)
        setUserCurrent(name)
      }}>
      <Card sx={{
        display: "flex",
        width: "100%"
      }}>
        <CardActionArea >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              pt: 2,
              backgroundColor: userCurrent === name ? red[200] : "",
              "&:last-child": { pb: 2 }
            }}
          >
            <Avatar
              variant="rounded"
              src={avatar}
              sx={{ width: 48, height: 48 }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}>
              <Box px={2}>
                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                  {name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {twitter}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}