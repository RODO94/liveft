export function slugify(input: string): string {
  // First replace all plus signs with "and"
  let result = input.split("+").join("and");

  // Then replace all consecutive spaces with a single dash
  result = result
    .split(" ")
    .filter((part) => part !== "")
    .join("-");

  return result;
}
