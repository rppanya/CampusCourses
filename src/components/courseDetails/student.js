function Student(props) {
  return <tr className={props.student.status}>
    <td>
      <p>{props.student.name}</p>
      <p>Статус - {props.student.status}</p>
      <p>{props.student.email}</p>
    </td>
    <td className="result">
      <p>Промежуточная аттестация</p>
      <p>{props.student.midtermResult}</p>
    </td>
    <td className="result">
      <p>Финальная аттестация</p>
      <p>{props.student.finalResult}</p>
    </td>
  </tr>
}

export default Student;
