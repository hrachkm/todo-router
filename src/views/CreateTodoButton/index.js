import { useNavigate } from "react-router-dom";
import './CreateTodoButton.css'
export function CreateTodoButton(props) {
  const navigate = useNavigate();
  const onClickButton = () => {
    //props.setOpenModal(true)
    navigate('/add');
  };
  return (
    <button
      className='btn'
      onClick={
        //Es importante que en los eventos se envie una funcion donde este el codigo que querramos ejecutar
        //Ya que si mandamos el codigo directamente, el evento se va a ejecutar de inmediato al cargar el componente
        onClickButton
      }
    >
      Create Task
    </button>
  );
}