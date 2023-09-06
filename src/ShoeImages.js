import { useState } from 'react';

export default function ShoeImages({ display }) {
  const [shoeIndex, setShoeIndex] = useState(null);

  // Getting image index so we can compare it for hover
  function handleMouseOver(index) {
    setShoeIndex(index);
  }

  function handleMouseOut() {
    setShoeIndex(null);
  }

  return (
    <section className="shoe-container">
      {display.map((shoe, i) => (
        <div key={shoe.imageUrl}>
          <figure className="shoe-bg">
            {/* Conditionally rendering shoe or shoe hover image based on INDEX */}
            <img
              src={
                shoeIndex === i && shoe.imageUrlHover
                  ? shoe.imageUrlHover
                  : shoe.imageUrl
              }
              alt={shoe.name}
              onMouseOver={() => handleMouseOver(i)}
              onMouseOut={() => handleMouseOut(i)}
            />
          </figure>
          <p>{shoe.name}</p>
          <p>{shoe.price} EUR</p>
        </div>
      ))}
    </section>
  );
}
