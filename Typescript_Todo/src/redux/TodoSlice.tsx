import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../type/Types'

const initialState: TodoInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        },
        updateTodo: (
            state: TodoInitialState,
            action: PayloadAction<{ id: number; content: string }>
        ) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, content: action.payload.content }
                    : todo
            );
        },
    },
})

export const { createTodo, deleteTodo, toggleTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer 
