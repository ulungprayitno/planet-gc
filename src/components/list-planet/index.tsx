import React from "react";
import IPlanet from "../../types/Planets";
import { Box, Grid, Stack, Text } from "@chakra-ui/layout";

type IProps = {
  data: Array<IPlanet>
}


const ListPlanets = ( props: IProps ) => {
  const { data } = props

  const getDetail = (url?: string) => () => {
    const  id = url?.split("planets/")[1];
    window.location.href = `/detail/${id}`
  }

  return (
    <Box mt='76px' p='24px'>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        { data && data.map((item, index) => (
          <Box key={index} w="100%" bg="linkedin.100" p='16px' borderRadius='8px' boxShadow='lg' position='relative' cursor='pointer' onClick={getDetail(item.url)}>
              <Text fontSize='32px' fontWeight='bold' mb='16px'>{item.name}</Text>

              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <Stack direction={[ "column"]} spacing="8px" >
                      <Text fontSize='16px' fontWeight='bold'>Rotation Period :</Text>
                      <Text fontSize='20px' fontWeight='bold'>{item.rotation_period}</Text>
                  </Stack>

                  <Stack direction={[ "column"]} spacing="8px" >
                      <Text fontSize='16px' fontWeight='bold'>Orbital Period :</Text>
                      <Text fontSize='20px' fontWeight='bold'>{item.orbital_period}</Text>
                  </Stack>

                  <Stack direction={[ "column"]} spacing="8px" >
                      <Text fontSize='16px' fontWeight='bold'>Diameter :</Text>
                      <Text fontSize='20px' fontWeight='bold'>{item.diameter}</Text>
                  </Stack>

                  <Stack direction={[ "column"]} spacing="8px" >
                      <Text fontSize='16px' fontWeight='bold'>Population :</Text>
                      <Text fontSize='20px' fontWeight='bold'>{item.population === 'n/a' ? 0 : item.population}</Text>
                  </Stack>
                  
              </Grid>
          </Box>
          ))
        }
      </Grid>
    </Box>
  );
};

export default ListPlanets;
