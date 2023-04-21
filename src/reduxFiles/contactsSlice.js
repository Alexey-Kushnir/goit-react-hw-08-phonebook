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
        // const index = state.items.findIndex(
        //   item => item.id === action.payload.id
        // );
        // state.items.splice(index, 1);

        const arr = state.items.filter(item => {
          return item.id !== action.payload.id;
        });
        state.items = arr;
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
        // isAnyOf(isPromise('fulfilled')),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

// function isPromise(str) {
//   return action => action.type.endsWith(str);
// }

export const contactsReducer = contactSlice.reducer;
