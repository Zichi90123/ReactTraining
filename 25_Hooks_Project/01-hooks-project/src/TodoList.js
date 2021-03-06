import React from 'react';
import { Paper, List, Divider } from "@material-ui/core";
import Todo from './Todo';


function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if(todos.length) {
        return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <React.Fragment key={todo.id}>
                        <Todo
                            {...todo}
                            key={todo.id}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        {i < todos.length - 1 ? <Divider /> : undefined }
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )}
    return null
}

export default TodoList;
