import { Button, Input, Modal } from "antd";
import Group from "./group";
import { useState } from "react";

function Groups(props) {
  const [open, setOpen] = useState(false);
  const [groupName, changeGroupName] = useState("");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    props.createGroupThunkCreator(groupName)
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Группы кампусных курсов</h2>
      <Button
        style={{ display: props.isAdmin ? "inline-block" : "none" }}
        onClick={showModal}
      >
        Создать группу
      </Button>
      <Modal
        title="Создать группу"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Отмена"
      >
        <Input
          placeholder="Название группы"
          onChange={(e) => {
            changeGroupName(e.target.value);
          }}
        />
      </Modal>
      {props.group.groups.map((value) => {
        return (
          <Group
            title={value.name}
            key={value.id}
            id={value.id}
            isAdmin={props.isAdmin}
            editGroupNameThunkCreator={props.editGroupNameThunkCreator}
            deleteGroupThunkCreator={props.deleteGroupThunkCreator}
          ></Group>
        );
      })}
    </div>
  );
}
export default Groups;
