import { Box, TextField } from '@mui/material';
import React from 'react';

const Chat = () => {
  return (
    <Box sx={{
        m: 2,
        height: "calc(100% - 16px)",
        display: "flex",
        flexDirection: "column"
    }}>
        <Box sx={{
            flexGrow: 1,
        }}>

        </Box>

        <Box sx={{
            mt: "auto"
        }}>
            <TextField size='small' />
        </Box>

        
    </Box>
  );
}

export default Chat;