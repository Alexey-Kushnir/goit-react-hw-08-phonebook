import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(8),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
  extraReducers: {},
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;

// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }
