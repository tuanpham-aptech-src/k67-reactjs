import { useState } from "react"
import Button from "./buttons/Button"

export default function TodoInput({pushTodo}) {
    const [content, setContent] = useState("")

      const handleTodoContentOnChange = (ev) => {
    // - 1.2.1: lấy giá trị input từ ev.target
    const { value } = ev.target;
    setContent(value);
  };

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
      id: new Date().getTime(), // PK
      content: content,
      status_id: 1, // mặc định vừa tạo (map theo danh sách todo status được quy định)
      created_at: new Date().getTime(),
    };
    // Xóa trắng content và input hiện tại
    setContent("");

    // Thêm vào mảng, cần shallow-copy để tạo ref mới => được tính là change
    pushTodo(todoPayload);
  };


    return <form className="d-flex gap-2" onSubmit={handleAddTodo}>
            {/* 1.3 Gán event-handler vào sự kiện */}
            <input
              className="todo-input"
              type="text"
              placeholder="Bạn sẽ làm gì ...."
              onChange={handleTodoContentOnChange}
              value={content}
            />
            <Button color={"success"}>Lưu</Button>
          </form>
}