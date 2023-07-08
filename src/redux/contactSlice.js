import { createSlice, nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        const isExist = state.contacts.find(
          contact => contact.name.toLowerCase() === action.payload.toLowerCase()
        );

        if (isExist) {
          toast.error(`${action.payload.number} is already in contacts.`);
          return;
        }
        state.contacts = [action.payload, ...state.contacts];
      },

      prerare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(({ id }) => {
          return id !== action.payload.id;
        });
      },
      prepare(id) {
        return {
          payload: { id },
        };
      },
    },
  },
});

export const { addContact, removeContact } = ContactSlice.actions;
export const ContactsReducer = ContactSlice.reducer;
