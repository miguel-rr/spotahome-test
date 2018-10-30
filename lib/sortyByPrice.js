const getSorter = ascending => (
  ascending
    ? ({ pricePerMonth: a }, { pricePerMonth: b }) => a - b
    : ({ pricePerMonth: a }, { pricePerMonth: b }) => b - a
);

const sortByPrice = (array, ascending = true) => {
  const sorter = getSorter(ascending);
  array.sort(sorter);
};

export default sortByPrice;
