import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

export enum PAGE {
  ITEMS = "items",
  CHAT = "chat"
}


export const MENU_ITEMS = [PAGE.ITEMS, PAGE.CHAT];

const CustomMenu = ({onPageChange} : {onPageChange: (page: PAGE) => void}) => {
  return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {
            MENU_ITEMS.map((page) => {
              return (
                <Button key={page} color='inherit'
                  onClick={() => onPageChange(page)}
                >{page}</Button>
              )
            })
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomMenu;