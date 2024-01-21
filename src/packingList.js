function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked && '✔'}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <div style={{paddingLeft: '45em', paddingRight: '45em'}}>
            <ul>
            <Item
                isPacked={true}
                name="Space suit"
            />
            <Item
                isPacked={true}
                name="Helmet with a golden leaf"
            />
            <Item
                isPacked={false}
                name="Photo of Tam"
            />
            </ul>
        </div>
      </section>
    );
  }
  