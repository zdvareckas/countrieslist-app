import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material'

const PagePagination = ({
  pageCount,
  countriesPerPage,
  currentPage,
  handlePaginationChange,
  setCountriesPerPage
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Pagination
        size="large"
        count={pageCount}
        page={currentPage}
        onChange={handlePaginationChange}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>List length</InputLabel>
        <Select
          value={countriesPerPage}
          label="Countries per page"
          onChange={(e) => {
            setCountriesPerPage(e.target.value)
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={80}>80</MenuItem>
          <MenuItem value={120}>120</MenuItem>
        </Select>
      </FormControl>
    </Box>)
}

export default PagePagination;
