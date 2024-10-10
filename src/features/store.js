import { configureStore } from '@reduxjs/toolkit' 
import todosReducer from './todos/todosSlice'
import filtersReducer from './filter/filtersSlice'


const store = configureStore({ 
    reducer: { 
        // Define a top-level state field named `todos`, handled by ‘todosReducer’ 
        todos: todosReducer, 
        filters: filtersReducer,
    }, 
}) 
        
export default store