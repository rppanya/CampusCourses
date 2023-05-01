import { Button, Row, Col, Card, Badge, Tabs, Tag, Space } from "antd";
import StudentsContainer from "./studentsContainer";
import styles from "./courseDetails.module.scss";




function CourseDetails(props) {

  const signUpForCourse = () => {
    props.signUp(props.course.id);
  }


  const courseStatuses = {
    OpenForAssigning: (
      <b className={styles.OpenForAssigning}>
      <Button onClick={() => {signUpForCourse()}}>Записаться на курс</Button>
      </b>
    ),
    Started: <b className={styles.Started}></b>,
    Created: <b className={styles.Created}></b>,
    Finished: <b className={styles.Finished}></b>
  };

  console.log(props);
  return (
    <div className={styles.course_details}>
      <h2>{props.course.name}</h2>
      <Row>
        <Col className={styles.flex_bottom} span={12}>
          <p>Основные данные курса</p>
        </Col>
        <Col className={styles.flex_right}>
          <Button>Редактировать</Button>
        </Col>
      </Row>
      <Card hoverable={false}>
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          <b className={styles.course_statuses}>Статус курса</b>
          {courseStatuses[props.course.status]}
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
                    dangerouslySetInnerHTML={{ __html: `${props.course.annotations}` }}
                  ></div>
                ),
              },
              {
                key: "notifications",
                label: (
                  <Badge count={props.course.notifications.length} offset={[10, 10]}>
                    Уведомления
                  </Badge>
                ),
                children: props.course.notifications.map((element) => {
                  return (
                    <Tag
                      style={{
                        width: "100%",
                        height: "30px",
                        fontSize: "14px",
                      }}
                      color={element.isImportant ? "red" : null}
                    >
                      {element.text}
                    </Tag>
                  );
                }),
                //</Space>
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
