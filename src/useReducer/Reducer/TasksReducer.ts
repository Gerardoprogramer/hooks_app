interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TasksState {
    todos: Todo[];
    length: number;
    completedCount: number;
    pendingCount: number;
}

export type TasksAction =
    | { type: 'ADD_TODO'; payload: { text: string } }
    | { type: 'TOGGLE_TODO'; payload: { id: number } }
    | { type: 'DELETE_TODO'; payload: { id: number } };

export const getStatsInicialState = (): TasksState => {
    const storedState = localStorage.getItem('tasks-state');

    if (!storedState) {
        return {
            todos: [],
            length: 0,
            completedCount: 0,
            pendingCount: 0,
        };
    }
    return JSON.parse(storedState);

}

export const TasksReducer = (state: TasksState, action: TasksAction) => {

    switch (action.type) {
        case 'ADD_TODO':
            const newtodo: Todo = {
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            }

            return {
                ...state,
                todos: [...state.todos, newtodo],
                length: state.todos.length + 1,
                pendingCount: state.pendingCount + 1,

            }


        case 'TOGGLE_TODO':
            const todosToggle = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            return {
                ...state,
                todos: todosToggle,
                completedCount: todosToggle.filter((todo) => todo.completed).length,
                pendingCount: todosToggle.filter((todo) => !todo.completed).length,
            };
        case 'DELETE_TODO':
            const todoToDelete = state.todos.filter((todo) => todo.id !== action.payload.id);

            return {
                ...state,
                todos: todoToDelete,
                length: todoToDelete.length,
                completedCount: todoToDelete.filter((todo) => todo.completed).length,
                pendingCount: todoToDelete.filter((todo) => !todo.completed).length,

            };
        default:
            return state;
    }
}