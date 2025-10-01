

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris',
        'Kyiv'
    ];
    items = [];

    if (items.length === 0) {
        return <><h1>List</h1><p>No items found</p><h1/></>;
    }
    
  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map(item => 
                <li key={item}>{item}</li>)
            }
        </ul>
    </>
  );
}

export default ListGroup;
