import { Button, Row, Col, Card, Badge } from "antd";
import { useState } from "react";
import StudentsContainer from "./studentsContainer";
import styles from "./courseDetails.module.scss"


const courseStatuses = {
  "OpenForAssigning": <b className={styles.OpenForAssigning}></b>,
  "Started": <b className={styles.Started}></b>,
  "Created": <b className={styles.Created}></b>,
  "Finished": <b className={styles.Finished}></b>,
};

const tabList = [
  {
    key: "requirements",
    tab: "Требования к курсу",
  },
  {
    key: "annotation",
    tab: "Аннотация",
  },
  {
    key: "notifications",
    tab: (
      <Badge count={5} offset={[10, 10]}>
        Уведомления
      </Badge>
    ),
  },
];

function CourseDetails(props) {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const [users, setActiveUsersBlock] = useState("teachers")
  const onChangeUsers = (key) => {
    setActiveUsersBlock(key);
  }
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const contentList = {
    requirements: props.requirements,
    annotation: props.annotations,
    //notifications: props.notifications,
  };

  const contentListUsers = {
    teachers: "teachers",
    students: (<StudentsContainer students={props.students}/>)
}
  console.log(props)
  return (
    <div className={styles.course_details}>
      <h2>{props.name}</h2>
      <Row>
        <Col className={styles.flex_bottom} span={12}>
          <p>Основные данные курса</p>
        </Col>
        <Col className={styles.flex_right}>
          <Button>Редактировать</Button>
        </Col>
      </Row>
      <Card hoverable={false} >
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          <b className={styles.course_statuses}>Статус курса</b>
          {courseStatuses[props.status]}
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Учебный год</b>
          <p>{props.startYear}</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Семестр</b>
          <p>{props.semester}</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Всего мест</b>
          <p>{props.maximumStudentsCount}</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Студентов зачислено</b>
          <p>{props.studentsEnrolledCount}</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          <b>Заявок на рассмотрении</b>
          <p>{props.studentsInQueueCount}</p>
        </Card.Grid>
      </Card>
      <Card
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <Card
        tabList={[
          {
            key: "teachers",
            tab: "Преподаватели",
          },
          {
            key: "students",
            tab: "Студенты",
          }
        ]}
        activeTabKey={users}
        onTabChange={onChangeUsers}
      >
        {contentListUsers[users]}
      </Card>
    </div>
  );
}
export default CourseDetails;
