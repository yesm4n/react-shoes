import Brand from './Brand';
import Color from './Color';
import Size from './Size';
import Category from './Category';

export default function Filters({ data, brands, setBrands }) {
  return (
    <section>
      <ul className="filter-list">
        <Brand data={data} brands={brands} setBrands={setBrands} />
        <Color />
        <Size />
        <Category />
      </ul>
    </section>
  );
}
