import Head from 'next/head'
import Image from 'next/image'
import { Grid, GridItem, Center, AspectRatio, Box, VStack, HStack, Text } from "@chakra-ui/react"

const BOARD_SZ = 20

export default function Home(){
  return (
  <Box margin="10px">
    <AspectRatio maxW="min(calc(100vw - 20px), calc(100vh - 20px))" ratio={1}>
      <VStack margin={0} sx={{ ".row": { marginTop: 0, marginBottom: 0 } }}>
        {new Array(BOARD_SZ).fill(null).map((_, n) => (
          <HStack spacing={0} w="100%" h={`${100 / BOARD_SZ}%`} className="row" key={n}>
            { new Array(BOARD_SZ).fill(null).map((_, n) => ( <Box h="100%" w={`${100 / BOARD_SZ}%`} bg="blue" key={n} /> ))}
          </HStack>
        ))}
      </VStack>
    </AspectRatio>
  </Box>)
}