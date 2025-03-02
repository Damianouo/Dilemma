import { forwardRef, useImperativeHandle, useRef } from "react";
import { cn } from "../../utils/cn";

const Modal = forwardRef(function Modal({ children, className, onClose }, ref) {
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
      className={cn("bg-tertiary-700 m-auto rounded-md p-4 text-white sm:px-6 sm:py-8", className)}
    >
      {children}
    </dialog>
  );
});

export default Modal;
