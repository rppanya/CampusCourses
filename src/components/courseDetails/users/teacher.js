import { Tag } from "antd";

function Teacher(props) {
  return (
    <tr>
      <td>
        <b>{props.teacher.name}</b>
        <p>
          {props.teacher.email}
          {props.teacher.isMain ? (
            <Tag color="blue" style={{ marginLeft: "10px" }}>
              Основной
            </Tag>
          ) : null}
        </p>
      </td>
    </tr>
  );
}

export default Teacher;
