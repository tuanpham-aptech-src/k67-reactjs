import { useParams } from "react-router-dom";
export default function UserDetail({ getUserById }) {
  const params = useParams();
  const user_id = params.user_id;

  const userDetail = getUserById(+user_id);
  if (!userDetail) {
    return <h2>Không tìm thấy user</h2>;
  }

  return (
    <>
      <div class="card" style={{ maxWidth: "560px", margin: "auto" }}>
        <div class="py-3">
            <div className="d-flex align-items-center fs-1 justify-content-center text-white bg-primary mx-auto" style={{width: '120px', height: '120px', borderRadius: '100%'}}>
                {String(userDetail.name).slice(0,1)}
            </div>

        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between">
            <span>Họ và tên</span>
            <span>{userDetail.name}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Số điện thoại</span>
            <span>{userDetail.phone}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Email</span>
            <span>{userDetail.email}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
