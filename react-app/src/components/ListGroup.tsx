import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSellectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSellectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSellectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
