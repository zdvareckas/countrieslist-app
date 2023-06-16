import { Box, Button, Checkbox, Divider, Drawer, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

const Filter = ({ filterOpen, toggleFilter, handleFilter, resetFilter }) => {
  return (
    <Drawer
      PaperProps={{
        sx: {
          p: 3
        }
      }}
      open={filterOpen}
      onClose={toggleFilter}
    >
      <Box>
        <Typography variant='body1'>Region:</Typography>
        <RadioGroup onChange={handleFilter}>
          <FormControlLabel control={<Radio value='Americas' sx={{ pr: 1 }} />} label='Americas' />
          <FormControlLabel control={<Radio value='Asia' sx={{ pr: 1 }} />} label='Asia' />
          <FormControlLabel control={<Radio value='Africa' sx={{ pr: 1 }} />} label='Africa' />
          <FormControlLabel control={<Radio value='Europe' sx={{ pr: 1 }} />} label='Europe' />
          <FormControlLabel control={<Radio value='Oceania' sx={{ pr: 1 }} />} label='Oceania' />
        </RadioGroup>
      </Box>

      <Divider sx={{ width: '120%' }} />

      <Box>
        <FormGroup onChange={handleFilter}>
          <Typography variant='body1'>Smaller than Lithuania:</Typography>
          <FormControlLabel control={<Checkbox value='smaller' />} label='Yes' />
        </FormGroup>
      </Box>

      <Button onClick={resetFilter}>RESET</Button>
    </Drawer>
  )
}

export default Filter
