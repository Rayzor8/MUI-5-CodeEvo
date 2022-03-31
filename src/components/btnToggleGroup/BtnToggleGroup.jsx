import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack } from '@mui/material';

export default function BtnToggleGroup() {
   const [formatsToggle, setFormatsToggle] = React.useState([]);
   const [exclusiveToggle, setExclusiveToggle] = React.useState(null);

   const handleFormatToggle = (event, newFormats) => {
      setFormatsToggle(newFormats);
   };

   const handleFormatExclusiveToggle = (event, newExclusive) => {
      setExclusiveToggle(newExclusive);
   };
   console.log({ formatsToggle, exclusiveToggle });

   return (
      <>
         {/*  toggled btn lists*/}
         <Stack direction="row">
            <ToggleButtonGroup
               value={formatsToggle}
               onChange={handleFormatToggle}
               aria-label="text formatting"
            >
               <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
               </ToggleButton>
               <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
               </ToggleButton>
               <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
               </ToggleButton>
               <ToggleButton value="color" aria-label="color">
                  <FormatColorFillIcon />
                  <ArrowDropDownIcon />
               </ToggleButton>
            </ToggleButtonGroup>
         </Stack>

         {/* only one toggled btn */}
         <Stack direction="row">
            <ToggleButtonGroup
               value={exclusiveToggle}
               onChange={handleFormatExclusiveToggle}
               aria-label="text formatting"
               orientation="vertical"
               exclusive
            >
               <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
               </ToggleButton>
               <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
               </ToggleButton>
               <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
               </ToggleButton>
               <ToggleButton value="color" aria-label="color">
                  <FormatColorFillIcon />
                  <ArrowDropDownIcon />
               </ToggleButton>
            </ToggleButtonGroup>
         </Stack>
      </>
   );
}
