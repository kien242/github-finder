import * as React from 'react';
import { Box, Grid, Button, Card, Tooltip } from '@mui/material';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export const showRepo = (props) => {
  return (
    <Card sx={{ 
      flexGrow: 1, 
      maxWidth: "80%", 
      border: 3, 
      borderRadius: 5, 
      padding: 3,
      borderColor: 'primary.main'
      }}>
      <Grid container maxWidth={"100%"} spacing={4} >
        <Grid item xs={10} borderRight={5}>
          <Box sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, }}>Repo Name</Box>
          <Box sx={{ fontSize: 25 }}> Des</Box>
          <Box>
            <Grid container sx={{
              maxWidth: "100%",
              justifyContent: 'space-around'
            }}>
              <Box sx={{ maxWidth: "25%" }}>adfhjdfasdhfkjh  </Box>
              <Box sx={{ maxWidth: "25%" }}>adfhj</Box>
              <Box sx={{ maxWidth: "25%" }}>adfhj</Box>
            </Grid>

          </Box>
        </Grid>
        <Grid item xs={2} >
          <Box
            sx={{
              margin: "4%",
              display: 'flex',
              justifyContent: 'center'
            }}>
            <Tooltip title="Clone" placement="right-start">
              <Button variant="contained" ><CopyAllIcon /></Button>
            </Tooltip>
          </Box>
          <Box sx={{ margin: "4%", display: 'flex', justifyContent: 'center' }}>
            <Tooltip title="Clone with sub-module" placement="right-start">
              <Button variant="contained" ><FileCopyIcon /></Button>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}