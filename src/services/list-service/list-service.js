const fetchAll = async () => {
  const res = await fetch('https://restcountries.com/v2/all?fields=name,region,area');

  const data = res.json();

  return data;
}

const ListService = {
  fetchAll,
}

export default ListService;
