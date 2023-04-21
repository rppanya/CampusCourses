import { Button } from "antd";
import Group from "./group"
function Groups(props) {
    return(
        <div>
            <h2 style={{marginTop:"20px"}}>Группы кампусных курсов</h2>
            <Button style={{display: props.isAdmin ? "inline-block" : "none"}}>Создать группу</Button>
            {
                props.group.groups.map((value) => {
                    return <Group title={value.name} key={value.id} id={value.id} isAdmin={props.isAdmin}></Group>
                })
            }
        </div>
    )
}
export default Groups;