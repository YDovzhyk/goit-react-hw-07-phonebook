import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/items/items-slice';
import filterReducer from './contacts/filter/filter-reducer';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})

export default store;