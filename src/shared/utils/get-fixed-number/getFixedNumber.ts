export const getFixedNumber = (value: number) =>
  Number(value.toFixed(4).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1'));
