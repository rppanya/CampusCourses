import Student from "./student";
import { Button, Tabs, Modal } from "antd";
import "../css/user.scss";
import Teacher from "./teacher";
import { useState } from "react";
import UsersSelectContainer from "../usersSelect/usersSelectContainer";
import { teacherId } from "../usersSelect/usersSelect";

function Users(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    props.addCourseTeacherThunkCreator(props.courseId, { userId: teacherId });
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  console.log(props)
  return (
    <div style={{width: "100%"}}>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={2}
        items={[
          {
            key: "teachers",
            label: "Преподаватели",
            children: (
              <div>
                <Button
                  type="primary"
                  onClick={showModal}
                  style={{ margin: "10px", display: props.isAdmin? "block" : "none" }}
                >
                  Добавить преподавателя
                </Button>
                <Modal
                  title="Добавить преподавателя"
                  open={open}
                  okText="Сохранить"
                  onOk={handleOk}
                  onCancel={handleCancel}
                  cancelText="Отмена"
                >
                  <UsersSelectContainer></UsersSelectContainer>
                </Modal>
                <table className="users_table">
                  <tbody>
                    {props.teachers.map((element) => {
                      return (
                        <Teacher
                          key={element.email}
                          teacher={element}
                        ></Teacher>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            key: "students",
            label: "Студенты",
            children: (
              <table className="users_table">
                <tbody>
                  {props.students.map((element) => {
                    return (
                      <Student
                        isAdmin={props.isAdmin}
                        email={props.email}
                        student={element}
                        key={element.id}
                        editStudentsStatusThunkCreator={
                          props.editStudentsStatusThunkCreator
                        }
                        editStudentsMarkThunkCreator={
                          props.editStudentsMarkThunkCreator
                        }
                        courseId={props.courseId}
                      />
                    );
                  })}
                </tbody>
              </table>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Users;
