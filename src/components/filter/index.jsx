import React from 'react';
import { Box, Button, Drawer, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

const Filter = ({ filterOpen, toggleFilter, handleFilter, resetFilter }) => {
  return (
    <Drawer
      elevation={1}
      hideBackdrop
      PaperProps={{
        sx: {
          p: 3,
          backgroundColor: '#C2FFC2'
        }
      }}
      open={filterOpen}
      onClose={toggleFilter}
    >
      <Box>
        <Typography variant='h5' fontWeight='bold'>Filter:</Typography>
        <RadioGroup onChange={handleFilter}>
          <FormControlLabel control={<Radio value='Americas' sx={{ pr: 1 }} />} label='Americas' />
          <FormControlLabel control={<Radio value='Asia' sx={{ pr: 1 }} />} label='Asia' />
          <FormControlLabel control={<Radio value='Africa' sx={{ pr: 1 }} />} label='Africa' />
          <FormControlLabel control={<Radio value='Europe' sx={{ pr: 1 }} />} label='Europe' />
          <FormControlLabel control={<Radio value='Oceania' sx={{ pr: 1 }} />} label='Oceania' />
          <FormControlLabel control={<Radio value='smaller' sx={{ pr: 1 }} />} label='Smaller than Lithuania' />
        </RadioGroup>
      </Box>

      <Button
        variant='outlined'
        color='error'
        sx={{ my: 4 }}
        onClick={resetFilter} >RESET</Button>
    </Drawer>
  )
}

export default Filter
