import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const extraActions = [fetchContacts, addContact, deleteContact];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
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

export const contactsReducer = contactSlice.reducer;
