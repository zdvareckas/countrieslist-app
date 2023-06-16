const fetchAll = async (filter) => {
  const res = await fetch('https://restcountries.com/v2/all?fields=name,region,area');
  const data = await res.json();

  if (filter !== '' && filter !== 'smaller') {
    const regionFilter = data.filter((x) => x.region === filter);

    return regionFilter;

  } if (filter === 'smaller') {
    const smallerThanLTU = data.filter((x) => x.area < 65300);

    return smallerThanLTU;
  }

  return data;
}

const ListService = {
  fetchAll,
}

export default ListService;
