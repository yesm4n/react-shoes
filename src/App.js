import { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Filters from './Filters';
import ShoeImages from './ShoeImages';
import data from './Data';

export default function App() {
  const [brands, setBrands] = useState('all');
  const [filter, setFilter] = useState(true);

  function handleFilter() {
    setFilter(prev => !prev);
  }

  // If brands === all, display all shoes, else only the selected brands
  const display =
    brands === 'all'
      ? data.flatMap(shoe => shoe.shoeSelection)
      : data
          .filter(shoe => shoe.company === brands)
          .flatMap(shoe => shoe.shoeSelection);

  return (
    <div className="container">
      <Navbar />
      <Header filter={filter} handleFilter={handleFilter} />
      <main className={`content ${filter ? '' : 'active'}`}>
        {filter && (
          <Filters data={data} brands={brands} setBrands={setBrands} />
        )}
        <ShoeImages display={display} />
      </main>
    </div>
  );
}
