import { Box, Button, Grid, useTheme } from '@mui/material';
import React from 'react';
import { getItems } from '../selectors';
import { useDispatch, useSelector } from 'react-redux';
import { createItem } from '../api/createItem';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { initItems } from '../actions';
import { removeItem } from '../api/removeItem';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ItemList = () => {

const theme = useTheme();
    
const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
const ITEMS = useSelector(getItems());

const handleCreateItem = () => {
    createItem().then((items) => dispatch(initItems(items || [])));
}

const handleRemoveItem = (id: string) => {
    removeItem(id).then((items) => dispatch(initItems(items || [])));
}

  return (
    <Box sx={{ 
        m: 2,
        height: "calc(100% - 16px)"
    }}>
        <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12}>
                <Button
                    variant='contained'
                    onClick={handleCreateItem}
                >
                {`create - ${ITEMS.length}`}
                </Button>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
                <Box sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap"
                }}>
                    {
                        ITEMS.map((item) => 
                            <Button 
                                key={item._id}
                                variant='outlined'
                                onClick={() => handleRemoveItem(item._id)}
                                startIcon={<HighlightOffIcon sx={{ color: theme.palette.error.main }} />}
                            >
                                {item.name}
                            </Button>
                        )
                    }
                </Box>
            </Grid>
        </Grid>
   </Box>
  );
}

export default ItemList;