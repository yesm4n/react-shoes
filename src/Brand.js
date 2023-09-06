import { useState } from 'react';

export default function Brand({ data, brands, setBrands }) {
  const [open, setOpen] = useState(false);

  // Clear All text displayed conditionally
  const clearAll = brands === 'all' && data.length !== 0 ? '' : 'Clear All';

  // Get shoe length
  const length =
    brands === 'all'
      ? ''
      : `(${data
          .filter(shoe => shoe.company === brands)
          .flatMap(shoe => shoe.shoeSelection.length)})`;

  // Toggle brand list
  function handleSetOpen() {
    setOpen(prev => !prev);
  }

  // Clearing brands => displays all shoes again
  function handleClearBrands() {
    setBrands('all');
  }

  // Display shoes by brand name
  function handleSetBrands(e) {
    // Fixing an edge case created by .closest selector
    const listItem = e.target.closest('li');
    if (listItem) {
      const clickedBrand = listItem.textContent;
      setBrands(clickedBrand);
    }
  }

  return (
    <>
      <div className="list-spacing">
        <li className="brand-ul" onClick={handleSetOpen}>
          Brand {length}
        </li>
        <span className="clear" onClick={handleClearBrands}>
          {clearAll} {open ? '-' : '+'}
        </span>
      </div>

      {open && (
        <ul className="list-items" onClick={handleSetBrands}>
          {data.map(shoe => (
            <li
              key={shoe.company}
              className={brands === shoe.company ? 'on' : clearAll ? 'off' : ''}
            >
              {shoe.company}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
