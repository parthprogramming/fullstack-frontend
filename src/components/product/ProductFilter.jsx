const ProductFilter = ({ type }) => (
  <div>
    All <input type="radio" name="filter" value="All" onChange={e => type(e.target.value)} />
    Cheaper <input type="radio" name="filter" value="Cheaper" onChange={e => type(e.target.value)} />
    Expensive <input type="radio" name="filter" value="Expensive" onChange={e => type(e.target.value)} />
  </div>
);

export default ProductFilter