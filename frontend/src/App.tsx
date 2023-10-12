import React, { ReactNode, useEffect, useState } from 'react';
import ItemList from './Items/components/ItemList';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getItems } from './Items/api/getItems';
import { IItem } from './Items/types';
import { initItems } from './Items/actions';
import { Box, Card } from '@mui/material';
import CustomMenu, { PAGE } from './layout/components/CustomMenu';
import Chat from './chat/components/Chat';

const App = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const [page, setPage] = useState<PAGE>(PAGE.ITEMS);

  const PAGE_SWITCHER = {
    [PAGE.ITEMS]: <ItemList />,
    [PAGE.CHAT]: <></>,
  }

  useEffect(() => {
    getItems().then((items) => dispatch(initItems(items || [])))
  }, []);

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <Card sx={{
        width: 522,
      }}>
        <CustomMenu onPageChange={(page) => setPage(page)} />
        <Box sx={{
          height: "60vh",
        }}>
        { PAGE_SWITCHER[page] }
        </Box>
      </Card>
    </Box>
  );
}

export default App;
