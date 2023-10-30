import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {AiFillInstagram, AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box padding={'4'} bg="black" minH={'10vh'}>
      <VStack direction={['column', 'row']}>   
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="30"
          marginBottom={'5'}
        >
          <a href="https://twitter.com/Mrityun48838594" target={'blank'}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.instagram.com/digital_sanatani_01/" target={'blank'}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Mrityunjay-code" target={'blank'}>
            <AiFillGithub />
          </a>
        </HStack>

        <Stack alignItems={['center', 'center']} width="full">
          <Heading
            children="All Rights Reserved by @AMMA GROUP 2023"
            color={'white'}
            fontSize="15"
          />
        </Stack>
      </VStack>
    </Box>
  );
};

export default Footer;
