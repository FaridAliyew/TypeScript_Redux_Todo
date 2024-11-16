import { useSelector, useDispatch } from "react-redux";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck, CiEdit } from "react-icons/ci";
import { RootState } from "../redux/Store";
import { TodoType } from "../type/Types";
import { deleteTodo, toggleTodo, updateTodo } from "../redux/TodoSlice";
import { useState } from "react";
import '../style/todo.css';

function Todo() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [updatedContent, setUpdatedContent] = useState<string>("");

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (todo: TodoType) => {
    setEditingId(todo.id);
    setUpdatedContent(todo.content); 
  };

  const handleUpdate = (id: number) => {
    if (updatedContent.trim().length === 0) {
      alert("Məzmun boş ola bilməz!");
      return;
    }
    dispatch(updateTodo({ id, content: updatedContent }));
    setEditingId(null); 
    setUpdatedContent(""); 
  };

  return (
    <div className="todo-container">
      {todos.map((todo: TodoType) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          {editingId === todo.id ? (
            <input
              type="text"
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
              className="todo-edit-input"
            />
          ) : (
            <div className="todo-content">
              {todo.content}
            </div>
          )}

          <div className="todo-actions">
            {editingId === todo.id ? (
              <button onClick={() => handleUpdate(todo.id)}>Save</button>
            ) : (
              <>
                <IoIosRemoveCircleOutline
                  className="todo-action-icon"
                  onClick={() => handleDelete(todo.id)}
                />
                <CiCircleCheck
                  className="todo-action-icon"
                  onClick={() => handleToggle(todo.id)}
                />
                <CiEdit
                  className="todo-action-icon"
                  onClick={() => handleEdit(todo)}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
