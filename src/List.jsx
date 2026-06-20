function List(){
    const names = ["Dibya", "Ram", "Shyam", "Hari", "Sita"];
    names.sort();
    const listItems = names.map((name) => <li>{name}</li>);
 return(<ol>{listItems}</ol>);
}
export default List