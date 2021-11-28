import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import PlanetService from '../../services/PlanetService';
import IPlanet from '../../types/Planets';
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import styled from "styled-components";
import { BaseUrl } from '../../utils/constant';
import { useToast } from "@chakra-ui/react"

type RouterProps = {
  id: string; 
}

const Container = styled.div`
  margin: auto;
  width: 70%;
  padding: 10px;
`;

const FetchButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

type Props = RouteComponentProps<RouterProps>;

const DetailPage: React.FC<Props> = (props: Props) => {
  const [data, setData] = React.useState<IPlanet | undefined>()
  const [isShow, setIsShow] = React.useState<boolean>(true)
  const [wishlist, setWishlist] = React.useState<Array<IPlanet>>([])
  const toast = useToast()

  const getPlanet = (id: string) => {
    PlanetService.getById(id)
      .then((response) => {
        setData(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const convertDate =(date?: string) => {
    if(date) {
      const res = new Date(date)
      return res.getUTCDate() + '-' + res.getUTCMonth() + '-' + res.getUTCFullYear()
    }
  }

  const addWishList = async (item?: IPlanet)=> {
    const wish = [...wishlist, item]
    localStorage.wish = JSON.stringify(wish);
    fetchData()
  }

  const fetchData = useCallback(async () => {
    const url = BaseUrl +`/planets/${props.match.params.id}/`
    const retrievedData = await localStorage.getItem("wish");
    const res = JSON.parse(retrievedData!);
    const arr = [...res]
    
    setWishlist(arr)
    const check = arr.find(p => p.url === url)
    
    if (check) {
      setIsShow(false)
    }
  }, [])

  React.useEffect(() => {
    getPlanet(props.match.params.id);
    fetchData();
  }, [props.match.params.id]);

  return <div style={{marginTop: '96px'}}>
  <Container>
    <Box w="100%" p='16px' borderRadius='8px' boxShadow='lg' border='1px solid' >

      <Box d='flex' w='100%' alignItems='center' justifyContent='center' mt='16px' mb='24px'> 
          <Text fontSize='40px' fontWeight='bold' >{data?.name}</Text>
      </Box>

      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing="24px" p='24px'>
        <Box w="100%">
            <Stack direction={[ "column"]} spacing="8px">
                <Text fontSize='16px' fontWeight='bold'>Rotation Period :</Text>
                <Text fontSize='20px' fontWeight='bold'>{data?.rotation_period}</Text>
            </Stack>
        </Box> 
        <Box w="100%">
            <Stack direction={[ "column"]} spacing="8px">
                <Text fontSize='16px' fontWeight='bold'>Orbital Period :</Text>
                <Text fontSize='20px' fontWeight='bold'>{data?.rotation_period}</Text>
            </Stack>
        </Box>      
        <Box w="100%">
          <Stack direction={[ "column"]} spacing="8px" >
              <Text fontSize='16px' fontWeight='bold'>Diameter :</Text>
              <Text fontSize='20px' fontWeight='bold'>{data?.diameter}</Text>
          </Stack>
        </Box>
        <Box w="100%">
          <Stack direction={[ "column"]} spacing="8px">
              <Text fontSize='16px' fontWeight='bold'>Climate :</Text>
              <Text fontSize='20px' fontWeight='bold'>{data?.climate}</Text>
          </Stack>
        </Box>
        <Box w="100%">
          <Stack direction={[ "column"]} spacing="8px">
              <Text fontSize='16px' fontWeight='bold'>Gravity :</Text>
              <Text fontSize='20px' fontWeight='bold'>{data?.gravity}</Text>
          </Stack>
        </Box>
        <Box w="100%">
          <Stack direction={[ "column"]} spacing="8px">
              <Text fontSize='16px' fontWeight='bold'>Terrain :</Text>
              <Text fontSize='20px' fontWeight='bold'>{data?.terrain}</Text>
          </Stack>
        </Box>
        <Box w="100%">
          <Stack direction={[ "column"]} spacing="8px">
              <Text fontSize='16px' fontWeight='bold'>Surface Water :</Text>
              <Text fontSize='20px' fontWeight='bold'>{data?.surface_water}</Text>
          </Stack>
        </Box>         
        <Box w="100%">
          <Stack direction={[ "column"]} spacing="8px">
              <Text fontSize='16px' fontWeight='bold'>Population :</Text>
              <Text fontSize='20px' fontWeight='bold'>{data?.population}</Text>
          </Stack>
        </Box>
        <Box w="100%">
          <Stack direction={[ "column"]} spacing="8px" >
              <Text fontSize='16px' fontWeight='bold'>Created At :</Text>
              <Text fontSize='20px' fontWeight='bold'>{convertDate(data?.created)}</Text>
          </Stack>
        </Box>   
      </SimpleGrid>
      {isShow && <FetchButton onClick={() => {
        toast({
          title: "Wishlist.",
          description: "The planet has been add to your wishlist",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
        addWishList(data)}
      }>Add To WishList</FetchButton>}
    </Box>
    </Container>
  </div>
};

export default DetailPage;