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

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="rounded-md bg-tertiary-500 px-6 py-8 text-white"
    >
      {children}
    </dialog>
  );
});

export default Modal;
