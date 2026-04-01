import { formatVietNamTime } from "../helpers/formater"
import { useEffect } from "react"

export default function TodoCard( { todo, finishTodo, cancelTodo, redoTodo } ) {

  const ableToFinish = todo.status_id === 1
  const ableToCancel = todo.status_id !== 3
  const ableToRedo = todo.status_id === 3
  const getTodoWrapperClass = ()=>{
    switch (todo.status_id) {
        case 1:
            return ''
        case 2:
            return 'finished-todo'
        case 3:
            return 'cancelled-todo'
        default:
            return ''
    }
  }

   useEffect(() => {
    
      console.log('Vừa mount component nè ');

    return ()=>{
      console.log('Vừa unmout component');
    }
  }, []);
  
   useEffect(() => {
    
      console.log('Vừa update component nè ');
  },);

    return (
    <div className={`todo-item ${getTodoWrapperClass()}`}>
      <div className="todo-header d-flex">
        <span className="todo-time">{formatVietNamTime(todo.created_at)}</span>
        <div className="todo-btns d-flex gap-2">
          {
            ableToFinish ? <button onClick={() => finishTodo(todo)}>Hoàn thành</button>: null
          }
          {
            ableToCancel ? <button onClick={() => cancelTodo(todo)}>Hủy</button>: null
          }
          {
            ableToRedo ? <button onClick={() => redoTodo(todo)}>Reset</button>: null
          }
        </div>
      </div>
      <p className="todo-content">
        {todo.content} <br /> Trạng thái: {todo.status_id}
      </p>
    </div>
  );
}
