import './TodoItem.css';

export function TodoItem(props) {
  return (
    <li className='list-container'>
      <span
        className={`icon icon-check ${props.done && 'icon-check--active'}`}
        onClick={props.onComplete}
      >
        ✓
      </span>
      <p className={`list-container-p ${props.done && 'list-container-p--complete'}`}>{props.text}</p>
      <span
        className={`icon icon-delete`}
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}