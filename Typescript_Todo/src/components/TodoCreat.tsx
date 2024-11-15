import { useState } from "react";
import { useDispatch } from "react-redux"
import { createTodo } from "../redux/TodoSlice";
import { TodoType } from "../type/Types";

function TodoCreat() {

  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert('Bir todo girin');
      return;
    }

    const payload:TodoType = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo
    }

    dispatch(createTodo(payload))
    setNewTodo('')
  }

  return (
    <div className="todo-create">
      <form>
        <label>Todo</label>
        <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} type="text" placeholder="Add todo" />
        <button onClick={handleCreateTodo}>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoCreat