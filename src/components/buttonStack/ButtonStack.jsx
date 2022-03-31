import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { ButtonGroup } from '@mui/material';
import ModalComp from '../modalComp';

const ButtonStack = () => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   return (
      <>
         <Stack
            spacing={2}
            direction="row"
            sx={{ borderBottom: 2, padding: 2, borderColor: 'primary.main' }}
         >
            <Button
               variant="text"
               startIcon={<DeleteIcon />}
               onClick={handleOpen}
            >
               Text
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
               Contained
            </Button>
            <Button variant="outlined" disabled={true}>
               Outlined
            </Button>
         </Stack>

         {/* button group */}
         <Stack
            direction="row"
            sx={{ borderBottom: 2, padding: 2, borderColor: 'primary.main' }}
         >
            <ButtonGroup orientation="vertical">
               <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  size="small"
                  onClick={handleOpen}
               >
                  Text
               </Button>
               <Button variant="contained" endIcon={<SendIcon />} size="small">
                  Contained
               </Button>
               <Button variant="contained" disabled={true} size="small">
                  Outlined
               </Button>
            </ButtonGroup>
         </Stack>
         <ModalComp
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
         />
      </>
   );
};

export default ButtonStack;
