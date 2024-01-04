import React from 'react'
import PixIcon from '@mui/icons-material/Pix'
import {Typography, useTheme} from '@mui/material'
import FlexBetween from '@/components/FlexBetween'

type Props = {}

const Navbar = (props: Props) => {
  const {palette} = useTheme()
  return (
    <FlexBetween mb='0.25rem' p='0.5rem 0rem' color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap='0.75rem'>
        <PixIcon sx={{fontSize: 28}} />
        <Typography variant='h4' fontSize={16}>
          Finance Dashboard
        </Typography>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar
