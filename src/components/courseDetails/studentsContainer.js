import Student from "./student";
import { Tabs } from "antd";
import "./user.scss"
function StudentsContainer(props) {
    console.log(props)
  return (
    <Tabs
      defaultActiveKey="1"
      type="card"
      size={2}
      items={[
        {
          key: "teachers",
          label: "Преподаватели",
        },
        {
          key: "students",
          label: "Студенты",
          children: (
            <table className="users_table">
              {props.students.map((element) => {
                return <Student student={element} key={element.id} />;
              })}
            </table>
          ),
        },
      ]}
    />
  );
}

export default StudentsContainer;
