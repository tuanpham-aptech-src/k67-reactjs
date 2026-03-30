import "./App.css";
import { useState } from "react";
import Button from "./components/buttons/Button";

function App() {
  // 1. Lưu giá trị người dùng nhập
  // - 1.1: Tạo state để lưu trữ giá trị input (C2: có thể dùng useRef).
  const [content, setContent] = useState("");
  // - 1.2: Tạo event-handler để track data khi người dùng gõ input - gán với onChange
  const handleTodoContentOnChange = (ev) => {
    // - 1.2.1: lấy giá trị input từ ev.target
    const { value } = ev.target;
    setContent(value);
  };

  // 2. Thêm vào mảng todos nếu người dùng ấn 'Lưu' hoặc 'Enter'
  // - 2.1: Tạo state để lưu lại danh sách todo
  const [listTodo, setListTodo] = useState([]);
  // - 2.2: Tạo hàm để xử lý dữ liệu và lưu vào state
  const handleAddTodo = (ev) => {
    // Bỏ qua việc submit form thì reload
    ev.preventDefault();
    // - 2.2.1: Validate dữ liệu đầu vào.
    if (!content) {
      alert("Bạn cần phải ghi công việc ra nhé :(");
      return;
    }
    // - 2.2.2: Add data vào list với đúng định dạng.
    const todoPayload = {
      id: listTodo.length + 1, // PK
      content: content,
      status_id: 1, // mặc định vừa tạo (map theo danh sách todo status được quy định)
      created_at: new Date().getTime(),
    };
    // Xóa trắng content và input hiện tại
    setContent("");

    // Thêm vào mảng, cần shallow-copy để tạo ref mới => được tính là change
    setListTodo([...listTodo, todoPayload]);
  };

  // 3. re-render danh sách todos với để thêm phần tử mới.
  const renderListTodo = () => {
    // return ra một jsx-element
    // - 3.1: Map từ listTodo => mảng JSX element
    return listTodo.map((item) => {
      return (
        <div className="todo-item" key={item.id}>
          <div className="todo-header d-flex">
            <span className="todo-time">{item.created_at}</span>
            <div className="todo-btns d-flex gap-2">
              <button onClick={() => finishTodo(item)}>Hoàn thành</button>
              <button>Hủy</button>
              <button>Reset</button>
            </div>
          </div>
          <p className="todo-content">
            {item.content} - {item.status_id}
          </p>
        </div>
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
    // copy lại bản ghi todo cần update
    const cloneTodo = { ...listTodo[matchIndex] };
    // update lại status
    cloneTodo.status_id = 2;
    // tạo mảng mới từ mảng gốc với phần tử vừa update - dùng splice
    const array = listTodo.splice(matchIndex, 1, cloneTodo);
    setListTodo(array);
  };

  return (
    <>
      <form className="d-flex gap-2" onSubmit={handleAddTodo}>
        {/* 1.3 Gán event-handler vào sự kiện */}
        <input
          className="todo-input"
          type="text"
          placeholder="Bạn sẽ làm gì ...."
          onChange={handleTodoContentOnChange}
          defaultValue={content}
          // onChange={(ev)=>{setContent(ev.target.value)}}
        />
        <Button color={"success"}>Lưu</Button>
      </form>
      <main className="d-flex gap-4">
        <div className="grow-1">
          <p className="list-todo-label new-label">Mới</p>
          {renderListTodo()}
        </div>

        <div className="grow-1">
          <p className="list-todo-label finished-label">Đã hoàn thành</p>
        </div>

        <div className="grow-1">
          <p className="list-todo-label cancelled-label">Hủy</p>
        </div>
      </main>
    </>
  );
}
export default App;
