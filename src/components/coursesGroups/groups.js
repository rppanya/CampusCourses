import Group from "./group"
function Groups(props) {
    return(
        <div>
            {
                props.group.groups.map((value) => {
                    return <Group title={value.name} key={value.id}></Group>
                })
            }
        </div>
    )
}
export default Groups;