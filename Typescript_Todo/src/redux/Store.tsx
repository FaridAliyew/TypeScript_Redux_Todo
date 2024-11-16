import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const preloadedState = {
    todo: {
        todos: loadFromLocalStorage("todos") || [],
    },
};
 
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveToLocalStorage("todos", store.getState().todo.todos);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
