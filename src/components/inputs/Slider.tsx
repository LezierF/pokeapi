import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSlider({value}: any) {
  return (
    <Box sx={{ }}>
      <Slider
        aria-label=""
        defaultValue={value}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={10}
        marks
        min={0}
        max={150}
        color="secondary"
      />
    </Box> 
  );
}
