import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const extraActions = [fetchContacts, addContact, deleteContact];

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const newArr = state.items.filter(item => {
          return item.id !== action.payload.id;
        });
        state.items = newArr;
      })
      //TODO:
      // .addCase(updateContact.fulfilled, (state, action) => {})
      .addMatcher(
        isAnyOf(...extraActions.map(actions => actions.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(actions => actions.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(actions => actions.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
