import { useEffect } from "react";

import swal from "sweetalert";

function Errors(props) {
  useEffect(() => {
    if (props.errors.error.status !== 0) {
      swal({
        title: props.errors.error.statusText,
        text: props.errors.error.message
          ? props.errors.error.message
          : props.errors.error.title,
        icon: "error",
        buttons: {},
      }).then(() => {
        if (props.errors.error.status === 401) {
          props.logoutThunkCreator();
        }
        props.resetErrorActionCreator();
      });
    }
    if (props.errors.error.status === 200) {
      swal({
        title: props.errors.error.statusText,
        text: " ",
        buttons: {},
        icon: "success",
      }).then(() => {
        props.resetErrorActionCreator();
      });
    }
  }, [props]);

  return <></>;
}
export default Errors;
