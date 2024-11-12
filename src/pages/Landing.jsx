import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

import { useQuery } from '@tanstack/react-query';

const searchCocktailsQuery = (query) => {
  return {
    queryKey: ['search', query || 'all'],
    queryFn: async () => {
      const res = await axios.get(`${cocktailSearchUrl}${query || 'a'}`);
      return res.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    try {
      const searchTerm = url.searchParams.get('search') || '';
      await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
      return { searchTerm: searchTerm };
    } catch (error) {
      console.log(error);
    }
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
