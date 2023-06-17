import React from 'react';
import ListService from '../../services/list-service/list-service';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Pagination, Select, Typography } from '@mui/material';
import Filter from '../../components/filter';
// import Pagination from '../../components/pagination';

const ListPage = () => {
  const [list, setList] = React.useState([]);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('');
  const [sort, setSort] = React.useState('');

  const [currentPage, setCurrentPage] = React.useState(1);
  const [countriesPerPage, setCountriesPerPage] = React.useState(10);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentList = list.slice(firstCountryIndex, lastCountryIndex);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    toggleFilter();
  };

  const resetFilter = () => {
    setFilter('');
    toggleFilter();
  };

  const handleSort = () => {
    if (sort === 'ASC') {
      setSort('DSC')
    } else {
      setSort('ASC')
    }
  };

  const handlePaginationChange = (e, value) => {
    setCurrentPage(value);
  };

  React.useEffect(() => {
    (async () => {
      const data = await ListService.fetchAll(filter);

      if (sort === 'DSC' || sort === '') {
        setList(data.sort())
      } else if (sort === 'ASC') {
        data.sort();
        setList(data.reverse());
      }
      setList(data);
    })();

  }, [filter, sort]);



  return (
    <Container sx={{ my: 3, border: '1px solid red' }}>
      <Typography variant='h3' fontWeight='bold'>Countries list app</Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        p: 1,
        border: '1px solid red'
      }}>
        <Button variant='outlined'
          onClick={toggleFilter}
        >FILTER</Button>
        <Button variant='outlined'
          onClick={handleSort}
        >{sort === 'ASC' ? 'A-Z' : 'Z-A'}</Button>
      </Box>

      <Filter
        handleFilter={handleFilter}
        toggleFilter={toggleFilter}
        filterOpen={filterOpen}
        resetFilter={resetFilter}
      />

      {currentList.map(({ name, region, area, }) => (
        <Box
          key={name}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            m: 1,
            border: '1px solid red'
          }}>
          <Typography variant='body1'><b>Name:</b> {name}</Typography>
          <Typography variant='body1'><b>Region:</b> {region}</Typography>
          <Typography variant='body1'><b>Area:</b> {area}</Typography>
        </Box>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Pagination
          size="large"
          count={Math.ceil(list.length / countriesPerPage)}
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
      </Box>
    </Container>
  )
};

export default ListPage;
