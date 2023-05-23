import { useState } from "react";

import { Button, Modal, Radio } from "antd";

function Student(props) {
  return (
    <>
      {props.student.status === "Accepted" ? (
        <StudentAccepted
          student={props.student}
          email={props.email}
          isAdmin={props.isAdmin}
          isTeacher={props.isTeacher}
          editStudentsMarkThunkCreator={props.editStudentsMarkThunkCreator}
          courseId={props.courseId}
        />
      ) : props.student.status === "Declined" ? (
        <StudentDeclined student={props.student} />
      ) : props.student.status === "InQueue" ? (
        <StudentInQueue
          student={props.student}
          editStudentsStatusThunkCreator={props.editStudentsStatusThunkCreator}
          courseId={props.courseId}
        />
      ) : null}
    </>
  );
}

function StudentAccepted(props) {
  const [open, setOpen] = useState(false);
  const [markType, setMarkType] = useState("");
  const [mark, setMark] = useState("");

  const marks = {
    "NotDefined": "Нет данных",
    "Passed": "Пройдено",
    "Failed": "Зафейлено"
  }

  const onChange = (e) => {
    setMark(e.target.value);
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    props.editStudentsMarkThunkCreator(props.courseId, props.student.id, {
      markType: markType,
      mark: mark,
    });
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <tr>
      <td>
        <b>{props.student.name}</b>
        <div style={{display: "flex"}}>
          <p>Статус:  </p>
          <b style={{ color: "green", marginLeft: "4px" }}> принят в группу</b>
        </div>

        <p>{props.student.email}</p>
      </td>

      {props.isAdmin ||
      props.isTeacher ||
      props.email == props.student.email ? (
        <>
          <td>
            <a
              onClick={() => {
                if (props.isAdmin || props.isTeacher) {
                  setMarkType("Midterm");
                  showModal(markType);
                }
              }}
            >
              Промежуточная аттестация
            </a>
            <p>{marks[props.student.midtermResult]}</p>
          </td>
          <td>
            <a
              onClick={() => {
                if (props.isAdmin || props.isTeacher) {
                  setMarkType("Final");
                  showModal();
                }
              }}
            >
              Финальная аттестация
            </a>
            <p>{marks[props.student.finalResult]}</p>
          </td>
        </>
      ) : null}

      <Modal
        title={markType}
        open={open}
        okText="Сохранить"
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Отмена"
      >
        <p>{props.student.name}</p>
        <Radio.Group onChange={onChange} value={mark}>
          <Radio value={"Passed"}>Пройдено</Radio>
          <Radio value={"Failed"}>Зафейлено</Radio>
        </Radio.Group>
      </Modal>
    </tr>
  );
}

function StudentInQueue(props) {
  const editStudentsStatus = (status) => {
    props.editStudentsStatusThunkCreator(props.courseId, props.student.id, {
      status: status,
    });
  };

  return (
    <tr>
      <td>
        <b>{props.student.name}</b>
        <div style={{display: "flex"}}>
          <p>Статус:  </p>
          <b style={{ color: "blue", marginLeft: "4px" }}> в очереди</b>
        </div>
        <p>{props.student.email}</p>
      </td>
      <td style={{ position: "absolute", right: "0" }}>
        <Button
          style={{ marginRight: "10px" }}
          onClick={() => {
            editStudentsStatus("Accepted");
          }}
        >
          Принять
        </Button>
        <Button
          onClick={() => {
            editStudentsStatus("Declined");
          }}
        >
          Отклонить
        </Button>
      </td>
    </tr>
  );
}

function StudentDeclined(props) {
  return (
    <tr>
      <td>
        <b>{props.student.name}</b>
        <div style={{display: "flex"}}>
          <p>Статус:  </p>
          <b style={{ color: "red", marginLeft: "4px" }}> отклонен</b>
        </div>
        <p>{props.student.email}</p>
      </td>
    </tr>
  );
}

export default Student;
