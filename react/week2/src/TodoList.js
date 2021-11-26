import Todo from "./Todo";
function TodoList({ list, deleteListItem,handleAddInput }) {
  return (
    <>
      <ul>
        {list.map((item) => {
          return (
            <li>
              <Todo listItem={item} deleteListItem={deleteListItem} handleAddInput={handleAddInput} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default TodoList;
