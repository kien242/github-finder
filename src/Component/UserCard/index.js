import { Card, CardContent, Avatar, Box, Typography, CardActionArea, Button } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";

export const UserCard = ({ props }) => {
  const {avatar, name, twitter, renderRepo}=props
  const [isActive, setIsActive] = useState(false);
  const handleClick = () =>{
    setIsActive(!isActive);
  }
  return (
    <Card sx={{
      display: "flex",
      m: 2,
      border: 2,
      borderColor: green[500],
      borderRadius: 3,
      bgcolor:isActive ? "Yellow" : "",
    }} >
      <CardActionArea onClick={()=>{handleClick(); /*renderRepo()*/}} >
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
  );
}