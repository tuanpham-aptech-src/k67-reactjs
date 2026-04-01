import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/buttons/Button";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";

function App() {
  // 2. Thêm vào mảng todos nếu người dùng ấn 'Lưu' hoặc 'Enter'
  // - 2.1: Tạo state để lưu lại danh sách todo
  const [listTodo, setListTodo] = useState([]);
  // - 2.2: Tạo hàm để xử lý dữ liệu và lưu vào state
  const pushTodo = (todoPayload) => {
   setListTodo([...listTodo, todoPayload]);
  };

  // 3. re-render danh sách todos với để thêm phần tử mới.
  const renderListTodo = (todos) => {
    // return ra một jsx-element
    // - 3.1: Map từ listTodo => mảng component
    return todos.map((item) => {
      return (
        <TodoCard
          key={item.id}
          todo={item}
          finishTodo={finishTodo}
          cancelTodo={cancelTodo}
          redoTodo={redoTodo}
        />
      );
    });
  };

  // Tạo ra các func update status tương ứng.
  const finishTodo = (todo) => {
    // tìm và replace todo bằng bản ghi đã được update
    // 1 - Trong danh sách listTodo tìm bản ghi tương ứng với todo được truyền vào
    const matchIndex = listTodo.findIndex((item) => {
      return item.id === todo.id;
    });
    // Trường hợp không tìm thấy
    if (matchIndex === -1) {
      alert("Không tìm thấy bản ghi todo tương ứng");
      return;
    }
    //  matchIndex = vị trí cần update
    // clone mảng gốc ra để thay đổi ref
    const cloneList = [...listTodo]; // có thể dùng spread vì mảng này không có nested value
    cloneList[matchIndex].status_id = 2;
    // set lại mảng bằng cloneList, do ref khác với listTodo => state change detected => re-render
    setListTodo(cloneList);
  };

  const cancelTodo = (todo) => {
    const matchIndex = listTodo.findIndex((item) => {
      return item.id === todo.id;
    });
    if (matchIndex === -1) {
      alert("Không tìm thấy bản ghi todo tương ứng");
      return;
    }
    const cloneList = [...listTodo];
    cloneList[matchIndex].status_id = 3;
    setListTodo(cloneList);
  };

  const redoTodo = (todo) => {
    const matchIndex = listTodo.findIndex((item) => {
      return item.id === todo.id;
    });
    if (matchIndex === -1) {
      alert("Không tìm thấy bản ghi todo tương ứng");
      return;
    }
    const cloneList = [...listTodo];
    cloneList[matchIndex].status_id = 1;
    setListTodo(cloneList);
  };

  const updateTodoStatus = (todo, newStatusValue) => {
    const matchIndex = listTodo.findIndex((item) => {
      return item.id === todo.id;
    });
    if (matchIndex === -1) {
      alert("Không tìm thấy bản ghi todo tương ứng");
      return;
    }
    const cloneList = [...listTodo];
    cloneList[matchIndex].status_id = newStatusValue;
    setListTodo(cloneList);
  };

  // computed data
  const listNewTodo = listTodo.filter((o) => o.status_id === 1);
  const listFinishedTodo = listTodo.filter((o) => o.status_id === 2);
  const listCancelledTodo = listTodo.filter((o) => o.status_id === 3);

  const getDataFromServer = ()=>{
    console.log(`Lấy dữ liệu từ server`);
    
  }
  
  // useEffect(() => {
  //   console.log('Component vừa mounted');
  //   getDataFromServer()
  // }, []);

  // useEffect(() => {
  //   console.log('Component vừa updated');
  // });

  // useEffect(() => {
  //   console.log('listTodo vừa update');
    
  //   getDataFromServer()
  // }, [listTodo]);

//  Initial => Mounted => Updated & Select Updated  => Unmount



  return (
    <>
      <TodoInput pushTodo={pushTodo} />
      <main className="d-flex gap-4">
        <div className="grow-1">
          
          <p className="list-todo-label new-label">Mới</p>
          {renderListTodo(listNewTodo)}
        </div>

        <div className="grow-1">
          <p className="list-todo-label finished-label">Đã hoàn thành</p>
          {renderListTodo(listFinishedTodo)}
        </div>

        <div className="grow-1">
          <p className="list-todo-label cancelled-label">Hủy</p>
          {renderListTodo(listCancelledTodo)}
        </div>
      </main>
      <Button color={"success"} onClick={()=>{ setListTodo([])}}>reset</Button>
    </>
  );
}
export default App;
