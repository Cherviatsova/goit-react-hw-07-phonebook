import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { filterSlice } from './filterSlice';
import { contactsApi } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
