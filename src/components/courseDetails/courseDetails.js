import {
  Button,
  Row,
  Col,
  Card,
  Badge,
  Tabs,
  Tag,
  Modal,
  Input,
  Select,
} from "antd";
import StudentsContainer from "./studentsContainer";
import styles from "./courseDetails.module.scss";
import ModalCreateCourse from "../modals/modalCreateCourse";
import ModalContainer from "../modals/modalContainer";
import { useState } from "react";

function CourseDetails(props) {
  const signUpForCourse = () => {
    props.signUp(props.course.id);
  };

  const courseStatuses = {
    OpenForAssigning: (
      <div className={styles.OpenForAssigning}>
        <b></b>
        <Button
          style={{
            display: "block",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px",
          }}
          onClick={() => {
            signUpForCourse();
          }}
        >
          Записаться на курс
        </Button>
      </div>
    ),
    Started: <b className={styles.Started}></b>,
    Created: <b className={styles.Created}></b>,
    Finished: <b className={styles.Finished}></b>,
  };

  const [open, setOpen] = useState(false);
  const [status, changeStatus] = useState("");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    props.editCoursesStatusThunkCreator(props.course.id, status);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className={styles.course_details}>
      <h2>{props.course.name}</h2>
      <Row style={{ marginBottom: "10px" }}>
        <Col className={styles.flex_bottom} span={12}>
          <p>Основные данные курса</p>
        </Col>
        <Col className={styles.flex_right}>
          {props.isAdmin ? (
            <ModalContainer
              createCourse={false}
              id={props.course.id}
              action={props.editCourseInfoThunkCreator}
              courseInfo={props.course}
              isAdmin={props.isAdmin}
            ></ModalContainer>
          ) : null}
        </Col>
      </Row>
      <Card hoverable={false}>
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          <Row>
            <div
              className={styles.course_statuses}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <b>Статус курса</b>
              <Button
                style={{
                  display: props.isAdmin ? "flex" : "none",
                  marginLeft: "auto",
                }}
                onClick={showModal}
              >
                Изменить
              </Button>
            </div>

            {courseStatuses[props.course.status]}
            <Modal
              title="Изменить статус курса"
              open={open}
              okText="Сохранить"
              onOk={handleOk}
              onCancel={handleCancel}
              cancelText="Отмена"
            >
              <Select
                defaultValue={props.course.status}
                onChange={(value) => {
                  changeStatus(value);
                }}
                style={{ width: "100%" }}
              >
                <Select.Option key="OpenForAssigning" value="OpenForAssigning">
                  Открыт для записи
                </Select.Option>
                <Select.Option key="Started" value="Started">
                  В процессе обучения
                </Select.Option>
                <Select.Option key="Created" value="Created">
                  Создан
                </Select.Option>
                <Select.Option key="Finished" value="Finished">
                  Закрыт
                </Select.Option>
              </Select>
            </Modal>
          </Row>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Учебный год</b>
          <p>{props.course.startYear}</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Семестр</b>
          <p>{props.course.semester}</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Всего мест</b>
          <p>{props.course.maximumStudentsCount}</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Студентов зачислено</b>
          <p>{props.course.studentsEnrolledCount}</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          <b>Заявок на рассмотрении</b>
          <p>{props.course.studentsInQueueCount}</p>
        </Card.Grid>
        <div style={{ margin: "20px", display: "block", width: "100%" }}>
          <Tabs
            defaultActiveKey="1"
            type="card"
            size={3}
            items={[
              {
                key: "requirements",
                label: "Требования к курсу",
                children: (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${props.course.requirements}`,
                    }}
                  ></div>
                ),
              },
              {
                key: "annotation",
                label: "Аннотация",
                children: (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${props.course.annotations}`,
                    }}
                  ></div>
                ),
              },
              {
                key: "notifications",
                label: (
                  <Badge
                    count={props.course.notifications.length}
                    offset={[10, 10]}
                  >
                    Уведомления
                  </Badge>
                ),
                children: (
                  <div>
                    <Button
                      onClick={showModal}
                    >
                      Создать уведомление
                    </Button>
                    {props.course.notifications.map((element, index) => {
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
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div style={{ margin: "20px", display: "block", width: "100%" }}>
          <StudentsContainer students={props.course.students} />
        </div>
      </Card>
    </div>
  );
}
export default CourseDetails;
