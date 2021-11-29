import ListItem from "./ListItem";


function List({ list, deleteListItem,addFormFields,updateItem }) {
  return (
    <>
      <ul>
        {list.map((item) => {
          return (
            <li>
              <ListItem listItem={item} deleteListItem={deleteListItem}  addFormFields={addFormFields} updateItem={updateItem} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default List;