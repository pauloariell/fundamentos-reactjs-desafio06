const formatValue = (value: number): string =>
  Intl.NumberFormat('pt', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value); // TODO

export default formatValue;
