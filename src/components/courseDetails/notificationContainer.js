import { Checkbox, Button, Tag, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

function Notifications(props) {
  const [open, setOpen] = useState(false);
  
  const [notification, createNotification] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    const data = {
        "text": notification,
        "isImportant": isImportant
    }
    props.createNotificationThunkCreator(props.id, data);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={showModal}>Создать уведомление</Button>
      {props.notifications.map((element, index) => {
        return (
          <Tag
            style={{
              width: "100%",
              height: "30px",
              fontSize: "14px",
              marginTop: "2px",
            }}
            color={element.isImportant ? "red" : null}
            key={index}
          >
            {element.text}
          </Tag>
        );
      })}

      <Modal
        title="Создать уведомление"
        open={open}
        okText="Сохранить"
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Отмена"
      >
        <TextArea onChange={(e) => {createNotification(e.target.value)}}></TextArea>
        <Checkbox onChange={(e) => {setIsImportant(e.target.checked)}}>Важное</Checkbox>
      </Modal>
    </div>
  );
}

export default Notifications