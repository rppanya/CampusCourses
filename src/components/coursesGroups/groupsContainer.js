import { connect } from "react-redux";
import Groups from "./groups";
import React from "react";
import { getGroupsThunkCreator } from "../../reducers/group-reducer";

class MiddleGroupsComponent extends React.Component{
    componentDidMount(){
        this.props.getGroupsThunkCreator(localStorage.getItem('token'));
    }
    render(){
        return(<Groups {...this.props}/>)
    }
} 

function mapStateToProps(state){
    return { group: state.group}
}

const GroupsContainer = connect(mapStateToProps, {getGroupsThunkCreator})(MiddleGroupsComponent)

export default GroupsContainer