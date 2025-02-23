/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children, onClose }, ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
      close() {
        dialogRef.current.close();
      },
    };
  });

  function handleClose(event) {
    const rect = dialogRef.current.getBoundingClientRect();
    if (
      event.clientY < rect.top ||
      event.clientY > rect.bottom ||
      event.clientX < rect.left ||
      event.clientX > rect.right
    ) {
      dialogRef.current.close();
    }
  }

  return (
    <dialog
      onMouseDown={handleClose}
      ref={dialogRef}
      onClose={onClose}
      className="bg-tertiary-700 m-auto rounded-md px-6 py-8 text-white"
    >
      {children}
    </dialog>
  );
});

export default Modal;
