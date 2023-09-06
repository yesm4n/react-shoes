import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add('active');

    return () => {
      document.body.classList.remove('active');
    };
  }, [open]);

  function handleOpen() {
    setOpen(prev => !prev);
  }

  return (
    <>
      {open ? (
        <img
          className={`hamburger ${open ? 'active' : ''}`}
          src="images/close.svg"
          alt="Close window"
          onClick={handleOpen}
        />
      ) : (
        <img
          className={`hamburger ${open ? 'active' : ''}`}
          src="images/open.svg"
          alt="Open window"
          onClick={handleOpen}
        />
      )}

      <div className={`wrap ${open ? 'active' : ''}`}>
        <nav className={`primary-nav ${open ? 'active' : ''}`}>
          <ul>
            <li>New Arrivals</li>
            <li>Releases</li>
            <li>Sneakers</li>
            <li>Brands</li>
          </ul>
          <span className={`brand ${open ? 'active' : ''}`}>Osp</span>
          <ul>
            <li>Search</li>
            <li>My Account</li>
            <li>My Cart (0)</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
