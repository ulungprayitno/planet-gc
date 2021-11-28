import React, { useCallback } from 'react';
import IPlanet from '../../types/Planets';
import ListPlanets from '../../components/list-planet';
import { Box, Text } from '@chakra-ui/layout';

const WishlistPage: React.FC = () => {
  const [planets, setPlanets] = React.useState<Array<IPlanet>>([]);

  React.useEffect(() => {
    fetchData();
  }, [])

  const fetchData = useCallback(async () => {
    const retrievedData = await localStorage.getItem("wish");
    const res = JSON.parse(retrievedData!);
    const arr = [...res]

    setPlanets(arr)
  }, [])
  

  return <div style={{marginTop: '76px'}}>
    {planets ? (
      <>
      <Box d='flex' w='100%' alignItems='center' justifyContent='center' mt='88px' mb='8px'> 
          <Text fontSize='40px' fontWeight='bold' >My Wishlist</Text>
      </Box>
      <ListPlanets data={planets} />
      </>
    ) : <div>No Data Found</div>}
  </div>;
};

export default WishlistPage;