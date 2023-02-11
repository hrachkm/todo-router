import logo from './logo.svg';

function Sample(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{props.greetings}</p>
        <p>
          {
            //La propiedad children de props se utiliza para renderizar los elementos hijos
            //existentes en el componente padre. ejemplo
            /**
             * <Padre>
             *    <h1>Hijo 1</h1>
             *    <p>Hijo 2</p>
             *    <HijoTres></HijoTres> -> Puede ser otro componente
             *    </ HijoCuatro>
             * </Padre>
             */
            props.children
          }
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Platzi
        </a>
      </header>
    </div>
  );
}
