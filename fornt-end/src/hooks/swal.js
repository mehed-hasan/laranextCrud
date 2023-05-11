import Swal from "sweetalert2";

const swalAlert = (type, text) => {
  Swal.fire({
    position: "top-end",
    icon: type,
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });
};

const swalAlert2 = (text) => {
  Swal.fire({
    title: text,
    icon: "question",
    iconHtml: "؟",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    showCancelButton: true,
    showCloseButton: true,
  });
};

export { swalAlert, swalAlert2 };
