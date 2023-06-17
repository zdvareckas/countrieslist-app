import React from 'react';
import { Box, Typography } from '@mui/material';

const ListItem = ({ name, region, area }) => {
  return (
    <Box
      key={name}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#90FF90',
        p: 1,
        m: 1,
        borderRadius: 2,
      }}>
      <Typography variant='body1'><b>Name:</b> {name}</Typography>
      <Typography variant='body1'><b>Region:</b> {region}</Typography>
      <Typography variant='body1'><b>Area:</b> {`${area ?? 'N/A'}`} km²</Typography>
    </Box>
  )
}

export default ListItem;
