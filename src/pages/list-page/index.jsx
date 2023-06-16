import React from 'react';
import ListService from '../../services/list-service/list-service';
import { Box, Container } from '@mui/material';

const ListPage = () => {

  const [list, setList] = React.useState([]);

  React.useEffect(() => {

    (async () => {
      const data = await ListService.fetchAll();
      setList(data);
    })();

  }, [])

  console.log(list)

  return (
    <Container sx={{ my: 3 }}>

      {list.map(({ name, region, area, }) => (
        <Box>{name} {region} {area} </Box>
      ))}

    </Container>
  )
}

export default ListPage;
