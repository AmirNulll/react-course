function Todo(props) {

  function DeleteHandeler(params) {
    
  }
  return<div className="card">
    <h2>{props.text}</h2>
    <div className="actions">
      <button className="btn" onClick={DeleteHandeler}>delete</button>
    </div>
  </div>;
}

export default Todo;
