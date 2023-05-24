import { Row, Col, Card, Badge, Tabs } from "antd";

import styles from "./css/courseDetails.module.scss";
import ModalContainer from "../modals/modalContainer";
import UsersContainer from "./users/usersContainer";
import CoursesStatusContainer from "./coursesStatus/coursesStatusContainer";
import NotificationsContainer from "./notifications/notificationsContainer";

function CourseDetails(props) {
  const semester = {
    Autumn: "Осенний",
    Spring: "Весенний",
  };

  return (
    <div className={styles.course_details}>
      <h2>{props.course.name}</h2>
      <Row>
        <Col className={styles.flex_bottom} span={12}>
          <b>Основные данные курса</b>
        </Col>
        <Col className={styles.flex_right}>
          {props.isAdmin || props.isTeacher ? (
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
      <div className={styles.container}>
        <Card hoverable={false}>
          <Card.Grid
            hoverable={false}
            style={{ width: "100%" }}
            className={styles.card_grid}
          >
            <CoursesStatusContainer
              isTeacher={props.isTeacher}
              isStudent={props.isStudent}
            ></CoursesStatusContainer>
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            style={{ width: "50%" }}
            className={styles.card_grid}
          >
            <b>Учебный год</b>
            <p>{props.course.startYear}</p>
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            style={{ width: "50%" }}
            className={styles.card_grid}
          >
            <b>Семестр</b>
            <p>{semester[props.course.semester]}</p>
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            style={{ width: "50%" }}
            className={styles.card_grid}
          >
            <b>Всего мест</b>
            <p>{props.course.maximumStudentsCount}</p>
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            style={{ width: "50%" }}
            className={styles.card_grid}
          >
            <b>Студентов зачислено</b>
            <p>{props.course.studentsEnrolledCount}</p>
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            style={{ width: "100%" }}
            className={styles.card_grid}
          >
            <b>Заявок на рассмотрении</b>
            <p>{props.course.studentsInQueueCount}</p>
          </Card.Grid>
        </Card>
        <div style={{ width: "100%" }} className={styles.card_grid}>
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
                    <NotificationsContainer isTeacher={props.isTeacher} />
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div style={{ margin: "20px" }}>
          <UsersContainer
            isMainTeacher={props.isMainTeacher}
            isTeacher={props.isTeacher}
            isStudent={props.isStudent}
          ></UsersContainer>
        </div>
      </div>
    </div>
  );
}
export default CourseDetails;
