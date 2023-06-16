import React from 'react';
import ListService from '../../services/list-service/list-service';
import { Box, Button, Container, Typography } from '@mui/material';
import Filter from '../../components/filter';

const ListPage = () => {
  const [list, setList] = React.useState([]);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('');
  const [sort, setSort] = React.useState('DSC');

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(filter)
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

      {list.map(({ name, region, area, }) => (
        <Box sx={{
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
    </Container>
  )
}

export default ListPage;
