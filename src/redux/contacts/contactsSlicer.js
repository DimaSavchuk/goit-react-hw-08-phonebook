import { createSlice } from '@reduxjs/toolkit';

import { addContacts, deleteContacts, fetchContacts } from './operations';

import {
  handleAdd,
  handleDelete,
  handleFetch,
  handlePending,
  handleRejected,
} from './constants';

const contactsSlicer = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetch)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, handleAdd)
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, handleDelete)
      .addCase(deleteContacts.rejected, handleRejected),
});

export const contactsReducer = contactsSlicer.reducer;
