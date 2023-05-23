import { Card, Col, Button, Row } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const courseStatuses = {
  OpenForAssigning: <b style={{ color: "green" }}>Открыт для записи</b>,
  Started: <b style={{ color: "blue" }}>В процессе обучения</b>,
  Created: <b style={{ color: "grey" }}>Создан</b>,
  Finished: <b style={{ color: "red" }}>Закрыт</b>,
};

function Course(props) {
  const navigate = useNavigate();

  const showModalDelete = () => {
    swal({
      title: "Вы уверены что хотите удалить курс?",
      text: "Это действие невозможно будет отменить, после подтверждения курс будет удален навсегда!",
      icon: "warning",
      buttons: {
        cancel: "Отмена",
        defeat: "Удалить"
      },
      dangerMode: true,
    }).then((value) => {
      switch (value) {
        case "cancel":
          break;
        case "defeat":
          props.deleteCourseThunkCreator(props.course.id, props.id);
          break;
        default:
          break;
      }
    })
  };

  return (
    <Card
      id={props.course.id}
      hoverable
      title={props.course.name}
      extra={courseStatuses[props.course.status]}
      style={{ textAlign: "left", fontSize: "12px", margin: "10px" }}
      onClick={() => {
        navigate(`/courses/${props.course.id}/details`);
      }}
    >
      <Row
        style={{
          marginLeft: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Col>
          <p>Учебный год - {props.course.startYear}</p>
          <p>Семестр - {props.course.semester}</p>
          <p>Мест всего - {props.course.maximumStudentsCount}</p>
          <p>Мест свободно - {props.course.remainingSlotsCount}</p>
        </Col>
        <Col style={{display: props.isAdmin ? "block" : "none"}}>
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              showModalDelete();
            }}
          ></Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Course;
