export function toRupiahFormat(number: number): string {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}

export function convertNumber(number: number): string {
  const formattedNumber = number.toLocaleString('id', {
    minimumFractionDigits: 0,
  });
  return formattedNumber;
}
