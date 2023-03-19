import React from "react";
import { useNavigate } from "react-router-dom";

import './TodoForm.css';

export function TodoForm(props) {

  const[ todoValue, setTodoValue] = React.useState('');
  const navigate = useNavigate();

  const onChange = (event) => {
    setTodoValue(event.target.value);
  }

  const onCancel = () => {
    navigate('/');
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(todoValue);
    navigate('/');
  }

  React.useEffect(() => {
    if(props.content && props.content.text){
      setTodoValue(props.content.text);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <div className="form-input">
        <label>{props.title}</label>
        <textarea
          placeholder="Example: Do my homework"
          value={todoValue}
          onChange={onChange}
          cols={10}
          rows={5}
        />
      </div>
      <div className="form-actions">
        <button className="btn-button btn-cancel" type="button" onClick={onCancel}>Cancel</button>
        <button className="btn-button btn-submit" type="submit">{props.buttonText}</button>
      </div>
    </form>
  );
}