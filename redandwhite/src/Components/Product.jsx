import React, { useContext } from 'react';
import fetchdatafromurl from '../CustomHooks/Fetchdata';
import { Box, Button, Img, Grid } from '@chakra-ui/react';
import {Contextapi,  ContextProvider}  from '../ContextApi/Contextapi';

export function Product() {
    let url = `http://localhost:3000/product`;
    const { data } = fetchdatafromurl(url);
    const  {cartItem}  = useContext(ContextProvider); // Use Contextapi instead of ContextProvider
    console.log(cartItem.length);
    // console.log(data);
  
    const addtocart = (item)=>{
        console.log(item)
        cartItem.push(item);
        console.log(cartItem)
    }
    return (
        <Grid
            templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
            gap={6}
            padding={4}
        >
            {data.map((item, index) => {
                return (
                    <Box key={index} >
                        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md"  >
                            <Img src={item.image} alt={item.title} />
                            <Box p="6">
                                <Box d="flex" alignItems="baseline">
                                    <Box fontWeight="bold" fontSize="md"  lineHeight="tight" noOfLines={1} >
                                        {item.title}
                                    </Box>
                                    <Box mt="4" fontSize="sm"  lineHeight="tight" noOfLines={2}>
                                        {item.description}
                                    </Box>
                                    <Box fontWeight="bold" ml="4" color="black">
                                        ${item.price}
                                    </Box>
                                </Box>
                                <Button onClick={()=>addtocart(item)} mt="4" colorScheme="blue" size="sm" >
                                    Add to Cart
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </Grid>
    )
}
