import { Button, Row, Col, Card, Badge } from "antd";
import { useState } from "react";
const courseStatuses = {
  open: <p style={{ color: "green" }}>Открыт для записи</p>,
  inProcess: <p style={{ color: "blue" }}>В процессе обучения</p>,
  created: <p style={{ color: "grey" }}>Создан</p>,
  closed: <p style={{ color: "red" }}>Закрыт</p>,
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
const contentList = {
  requirements: <p>content1</p>,
  annotation: <p>content2</p>,
  notifications: <p>content3</p>,
};
const contentListUsers = {
    teachers: "teachers",
    students: "students"
}

function CourseDetails(props) {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const [users, setActiveUsersBlock] = useState("teachers")
  const onChangeUsers = (key) => {
    setActiveUsersBlock(key);
  }
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  return (
    <div style={{ textAlign: "left" }}>
      <h2>BIGDATA: ПРОГРАММНЫЕ МЕТОДЫ PHYTON3</h2>
      <Row style={{ fontSize: "12px" }}>
        <Col span={12}>
          <p>Основные данные курса</p>
        </Col>
        <Col style={{ display: "flex", marginLeft: "auto" }}>
          <Button style={{ marginBottom: "10px" }}>Редактировать</Button>
        </Col>
      </Row>
      <Card hoverable={false} style={{ fontSize: "12px" }}>
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          <b style={{ margin: "0" }}>Статус курса</b>
          {courseStatuses.closed}
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Учебный год</b>
          <p>2022-2023</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Семестр</b>
          <p>Осенний</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Всего мест</b>
          <p>100</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "50%" }}>
          <b>Студентов зачислено</b>
          <p>5</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          <b>Заявок на рассмотрении</b>
          <p>30</p>
        </Card.Grid>
      </Card>
      <Card
        style={{
          width: "100%",
          fontSize: "12px",
        }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <Card
        style={{
          width: "100%",
          fontSize: "12px",
        }}
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
