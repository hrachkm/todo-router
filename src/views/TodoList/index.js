export function TodoList (props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmpty()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {
       // - props.searchedTodos.map(todo => props.render(todo))
      }
      {(!props.loading && !props.error) && <ul>
        {
          //Renderizando con render props y render functions
          props.searchedTodos.map(props.render || props.children)
        }
      </ul>}
    </section>
  );
}