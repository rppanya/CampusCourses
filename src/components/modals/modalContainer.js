import { connect } from "react-redux";
import { getListOfUsersThunkCreator } from "../../reducers/users-reducer";
import ModalCreateCourse from "./modalCreateCourse";
import { useEffect } from "react";
import ModalEditCourseForAdmin from "./modalEditCourseForAdmin";

function MiddleCoursesComponent(props) {
    useEffect(() => {
        props.getListOfUsersThunkCreator()
    }, [])
    
    return props.createCourse ? <ModalCreateCourse {...props}></ModalCreateCourse> : <ModalEditCourseForAdmin {...props}></ModalEditCourseForAdmin>
}

function mapStateToProps(state) {
    return { users: state.users.users }
}

const ModalContainer = connect(mapStateToProps, {
    getListOfUsersThunkCreator
})(MiddleCoursesComponent);

export default ModalContainer