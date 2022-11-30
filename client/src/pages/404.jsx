import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import err from '../img/err.png'
import {useNavigate } from "react-router-dom"

const PageNotFound = (props) => {
  const navigate = useNavigate();

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={ err }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'Yellow'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}> 404 Page not found 
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'green.600'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'green.800' }}
              onClick={() => {navigate('/')}}>
              Take me home
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
export default PageNotFound