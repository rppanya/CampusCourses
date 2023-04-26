import Student from "./student"

function StudentsContainer(props) { 
    return(
        <div>
            {
                props.students.map((element) => {
                    return <Student student={element} key={element.id}/>
                })
            }
        </div>
    )
 }

 export default StudentsContainer