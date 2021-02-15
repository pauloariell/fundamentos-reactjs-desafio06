const formatValue = (value: number, typeTransaction = ''): string => {
  console.log(typeTransaction);
  return `R$ ${Intl.NumberFormat('pt', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)}`; // TODO
};
export default formatValue;
