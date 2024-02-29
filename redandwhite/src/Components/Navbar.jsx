import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Img, Grid } from '@chakra-ui/react';


function Navbar() {
  return (
    <div>
        <Box>
            <Link to='/'>
            <Box>
                Product
            </Box>
            </Link>

            <Link to='/cart'>
            <Box>
                Cart
            </Box>
            </Link>
        </Box>
    </div>
  )
}

export default Navbar