import React from 'react';
import { Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const ProfileScreen = () => {
  const { colorMode } = useColorMode();

  return (
    <Center flex={1} bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.800'} p={4}>
      <Box
        bg={colorMode === 'light' ? 'white' : 'coolGray.700'}
        rounded="lg"
        shadow={6}
        width="90%"
        maxWidth="400px"
        p={6}
      >
        <VStack space={4} alignItems="center">
          <Avatar
            size="xl"
            source={{
              uri: 'https://via.placeholder.com/150',
            }}
          />
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="md" color="gray.500">
            john.doe@example.com
          </Text>
          <Text fontSize="sm" color="gray.400" italic>
            Desarrollador de aplicaciones móviles
          </Text>
        </VStack>

        <Divider my={4} />

        <VStack space={2}>
          <Text fontSize="md" fontWeight="medium">
            Bio
          </Text>
          <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
            Apasionado por el desarrollo de aplicaciones móviles con experiencia en React Native,
            JavaScript y diseño de interfaces de usuario. Siempre dispuesto a aprender y colaborar
            en proyectos desafiantes.
          </Text>
        </VStack>

        <Divider my={4} />

        <HStack space={6} justifyContent="center" alignItems="center">
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-linkedin" size="sm" />} colorScheme="blue">
            LinkedIn
          </Button>
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-github" size="sm" />} colorScheme="dark">
            GitHub
          </Button>
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="mail-outline" size="sm" />} colorScheme="red">
            Email
          </Button>
        </HStack>
      </Box>
    </Center>
  );
};

export default ProfileScreen;
