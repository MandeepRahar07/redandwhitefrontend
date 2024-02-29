import React, { useContext, useState } from 'react'
import { ContextProvider } from '../ContextApi/Contextapi'
import { Box, Button, Flex, Img, } from '@chakra-ui/react';

function Cartpage() {
    const{cartItem} = useContext(ContextProvider);
    console.log(cartItem);
  return (
    <div>
        <Flex>

        <Box>
            {
                cartItem.map((item)=>{
                    return(
                        <div>
                            <Box>
                                <Flex>
                                    <Box>
                                <Flex>
                            <Box >
                                <Img src={item.image} height="200px" width="200px"></Img>
                                <Box width="200px">
                                <Flex>
                                    <Button>-</Button>
                                    <Button>1</Button>
                                    <Button>+</Button>
                                </Flex>
                                </Box>
                            </Box>
                             <Box width="80%">
                             <Box fontWeight="bold" fontSize="md"  lineHeight="tight" noOfLines={1} >
                                        {item.title}
                                    </Box>
                                    <Box mt="4" fontSize="sm"  lineHeight="tight" width="40%" noOfLines={2}>
                                        {item.description}
                                    </Box>
                                    <Flex>
                                    <Box fontWeight="bold" ml="4" color="black">
                                        ${item.oldPrice}
                                    </Box>
                                    <Box fontWeight="bold" ml="4" color="black">
                                        ${item.price}
                                    </Box>
                                    </Flex>
                                 
                                 <Flex>
                                    <Box>Item left: {item.inStock}</Box>
                                    <Box> <Button>Remove</Button> </Box>
                                 </Flex>
                            </Box> 

                                </Flex>
                                </Box>
                                </Flex>
                            </Box>
                        </div>
                    )
                })
            }
        </Box>
        <Box>
                                 <h4>Price Details</h4>
                                 <Box>Price( {cartItem.length} item ): </Box>
                                 <Box>Total Discount: </Box>
                                 <Box>Dilivery Charge: $80</Box>
                                 <Box>Total Amount : </Box>
                                 <Button>CheckOut</Button>
                                </Box>
                                </Flex>
    </div>
  )
}

export default Cartpage