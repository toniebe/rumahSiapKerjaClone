export function calculateDiscount(
  originalPrice: number,
  price: number,
): number {
  if (price >= originalPrice) {
    return 0;
  }
  const discount = ((originalPrice - price) / originalPrice) * 100;
  return Math.round(discount);
}
