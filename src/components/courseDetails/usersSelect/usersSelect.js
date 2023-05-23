import { useEffect, useState } from "react";

import { Select } from "antd";

export let teacherId = "";

function UsersSelect(props) {
  const [teacher, setTeacher] = useState("");
  useEffect(() => {
    teacherId = teacher;
  }, [teacher]);

  return (
    <Select style={{ width: "100%" }} onChange={setTeacher}>
      {props.users.map((value) => {
        return (
          <Select.Option key={value.id} value={value.id}>
            {value.fullName}
          </Select.Option>
        );
      })}
    </Select>
  );
}

export default UsersSelect;
