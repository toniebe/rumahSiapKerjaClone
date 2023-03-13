export function convertFormatString(input: string): string {
  let output = input.replace(/_/g, ' ');
  output = output.replace(/\b\w/g, char => char.toUpperCase());

  return output;
}
