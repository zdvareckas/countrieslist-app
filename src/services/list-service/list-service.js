const fetchAll = async (searchParams) => {
  const res = await fetch('https://restcountries.com/v2/all?fields=name,region,area');
  const data = await res.json();

  if (searchParams !== null && searchParams !== 'smaller') {
    const regionFilter = data.filter((x) => x.region === searchParams);

    return regionFilter;

  } if (searchParams === 'smaller') {
    const smallerThanLTU = data.filter((x) => x.area < data.find(({ name }) =>
      name === 'Lithuania'
    ).area);

    return smallerThanLTU;
  };

  return data;
}

const ListService = {
  fetchAll,
}

export default ListService;
