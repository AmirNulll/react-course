function Modal(prop) {
  function cancleHandler() {
    prop.onCancle();
  }
  function confirmHandler() {
    prop.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancleHandler}>
        Cancle
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
