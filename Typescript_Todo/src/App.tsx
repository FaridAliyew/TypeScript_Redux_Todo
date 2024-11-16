import TodoCreat from './components/TodoCreat';
import TodoList from './components/TodoList';
import './style/global.css'

function App() {
  return (
    <div className='app'>
      <div style={{display:'block'}}>
        <TodoCreat />
        <TodoList />
      </div>
    </div>
  )
}

export default App
