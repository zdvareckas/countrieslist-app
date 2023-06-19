import React from 'react';
import { Box, Button, Drawer, FormControlLabel, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Filter = ({ filterOpen, toggleFilter, handleFilter, resetFilter, seachParams }) => {

  return (
    <Drawer
      elevation={1}
      variant='persistent'
      PaperProps={{
        sx: {
          p: 3,
          backgroundColor: '#C2FFC2'
        }
      }}
      open={filterOpen}
    >
      <Box>
        <Typography variant='h5' fontWeight='bold'>Filter:</Typography>

        <IconButton
          sx={{
            position: 'absolute',
            top: 0,
            right: 0
          }}
          onClick={toggleFilter}
        ><CloseIcon fontSize='large' /></IconButton>

        <RadioGroup onChange={handleFilter} value={seachParams.get('filter')}>
          <FormControlLabel control={<Radio name='region' value='Americas' sx={{ pr: 1 }} />} label='Americas' />
          <FormControlLabel control={<Radio name='region' value='Asia' sx={{ pr: 1 }} />} label='Asia' />
          <FormControlLabel control={<Radio name='region' value='Africa' sx={{ pr: 1 }} />} label='Africa' />
          <FormControlLabel control={<Radio name='region' value='Europe' sx={{ pr: 1 }} />} label='Europe' />
          <FormControlLabel control={<Radio name='region' value='Oceania' sx={{ pr: 1 }} />} label='Oceania' />
          <FormControlLabel control={<Radio name='region' value='smaller' sx={{ pr: 1 }} />} label='Smaller than Lithuania' />
        </RadioGroup>
      </Box>

      <Button
        variant='outlined'
        color='error'
        sx={{ my: 4 }}
        onClick={resetFilter} >RESET</Button>
    </Drawer>
  )
};

export default Filter;
