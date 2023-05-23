import { useState } from "react";

import { Button, Modal, Select, Row, Form } from "antd";
import styles from ".././css/courseDetails.module.scss";
import FormItem from "antd/es/form/FormItem";

function CoursesStatus(props) {
  const signUpForCourse = () => {
    props.signUpForCourseThunkCreator(props.course.id);
  };

  const courseStatuses = {
    Created: <b className={styles.Created}></b>,
    OpenForAssigning: (
      <div className={styles.OpenForAssigning}>
        <b></b>
        <Button
          type="primary"
          style={{
            display: !props.isStudent && !props.isTeacher ? "block" : "none",
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
    Finished: <b className={styles.Finished}></b>,
  };

  const numbersOfCourseStatuses = {
    Created: 0,
    OpenForAssigning: 1,
    Started: 2,
    Finished: 3,
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
  const [form] = Form.useForm();
  const statusNumber = numbersOfCourseStatuses[props.course.status];

  return (
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
            display: props.isAdmin || props.isTeacher ? "flex" : "none",
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
        <Form form={form} initialValues={props.course}>
          <FormItem name="status">
            <Select
              onChange={(value) => {
                changeStatus(value);
              }}
              style={{ width: "100%" }}
            >
              <Select.Option key="Created" value="Created" disabled>
                Создан
              </Select.Option>
              <Select.Option
                key="OpenForAssigning"
                value="OpenForAssigning"
                disabled={statusNumber > 1 ? true : false}
              >
                Открыт для записи
              </Select.Option>
              <Select.Option
                key="Started"
                value="Started"
                disabled={statusNumber > 2 ? true : false}
              >
                В процессе обучения
              </Select.Option>
              <Select.Option
                key="Finished"
                value="Finished"
                disabled={statusNumber > 3 ? true : false}
              >
                Закрыт
              </Select.Option>
            </Select>
          </FormItem>
        </Form>
      </Modal>
    </Row>
  );
}

export default CoursesStatus;
