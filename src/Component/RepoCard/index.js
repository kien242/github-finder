import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  Typography,
  IconButton,
  Collapse,
  CardContent,
  CardHeader,
  Button,
  Box,
  Tooltip,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import copy from "copy-to-clipboard";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const RepoCard = ({ props }) => {
  const {
    repoName,
    repoDescription,
    repoStar,
    repoLanguage,
    license,
    clone_url,
  } = props;

  const [expanded, setExpanded] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleCopyButton = (text) => {
    setIsCopied(copy(`git clone --recurse-submodules ${text}`));
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        marginBottom: 2,
        border: 2,
        borderColor: green[200],
      }}
    >
      <CardHeader
        border={2}
        action={
          <Box display={"flex"} flexDirection={"row"}>
            <Box>
              <Tooltip
                title={isCopied ? "Copied!" : "Clone with Sub-Module"}
                placement="top-start"
              >
                <Button
                  variant="contained"
                  sx={{
                    mx: 2,
                  }}
                  onClick={() => {
                    handleCopyButton(clone_url);
                  }}
                >
                  <CopyAllIcon />
                </Button>
              </Tooltip>
            </Box>

            <Box marginLeft={2}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Box>
          </Box>
        }
        title={
          <Box display={"flex"} flexDirection={"row"}>
            <Typography
              align="left"
              mr={1}
              width={"30%"}
              borderRight={4}
              borderColor={red[500]}
            >
              {repoName}
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              width={"60%"}
            >
              <Box width={"15%"}>
                <Typography>Star: {repoStar}</Typography>
              </Box>
              <Box width={"40%"}>
                <Typography>Language: {repoLanguage}</Typography>
              </Box>
              <Box width={"40%"}>
                <Typography>License: {license}</Typography>
              </Box>
            </Box>
          </Box>
        }
        subheader={
          <Box>
            <Typography variant="body1" color="text.secondary" mt={2}>
              {repoDescription}
            </Typography>
          </Box>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            README:
          </Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default RepoCard;
