import ListItem from "./ListItem";
import inputField from "./InputField";

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