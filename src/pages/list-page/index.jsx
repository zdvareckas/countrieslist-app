import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ListService from '../../services/list-service/list-service';
import Filter from '../../components/filter';
import ListItem from './components/list-item';
import PagePagination from '../../components/pagination';
import { useSearchParams } from 'react-router-dom';

const ListPage = () => {
  const [list, setList] = React.useState([]);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [sort, setSort] = React.useState('ASC');

  let [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [countriesPerPage, setCountriesPerPage] = React.useState(10);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentList = list.slice(firstCountryIndex, lastCountryIndex);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
    toggleFilter();
  };

  const resetFilter = () => {
    setSearchParams('');
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
      const data = await ListService.fetchAll(searchParams.get('filter'));

      if (sort === 'ASC' || sort === '') {
        setList(data.sort())
      } else if (sort === 'DSC') {
        setList(data.sort().reverse());
      }
      setList(data.sort());

    })();

  }, [sort, searchParams]);

  return (
    <Container sx={{ my: 3 }}>
      <Typography variant='h3' fontWeight='bold'>Countries list app</Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}>

        <Button variant='outlined'
          sx={{
            backgroundColor: '#90FF90',
            border: 'none',
            color: '#556255',
            '&:hover': {
              backgroundColor: '#ADFFAD',
              border: 'none'
            }
          }}
          onClick={toggleFilter}
        >FILTER</Button>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
          <Typography>Sort:</Typography>
          <Button variant='outlined'
            sx={{
              backgroundColor: '#90FF90',
              border: 'none',
              color: '#556255',
              '&:hover': {
                backgroundColor: '#ADFFAD',
                border: 'none'
              }
            }}
            onClick={handleSort}
          >{sort === 'ASC' ? 'Z-A' : 'A-Z'}</Button>
        </Box>

      </Box>

      <Filter
        seachParams={searchParams}
        handleFilter={handleFilter}
        toggleFilter={toggleFilter}
        filterOpen={filterOpen}
        resetFilter={resetFilter}
      />

      {currentList.map(({ name, region, area, }) => (
        <ListItem key={name} name={name} region={region} area={area} />
      ))}

      <PagePagination
        pageCount={Math.ceil(list.length / countriesPerPage)}
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        handlePaginationChange={handlePaginationChange}
        setCountriesPerPage={setCountriesPerPage}
      />
    </Container>
  )
};

export default ListPage;
