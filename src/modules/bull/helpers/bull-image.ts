/**
 * Returns the image path for a bull based on its color and breed.
 * @param params.color - The color of the bull.
 * @param params.breed - The breed of the bull.
 * @returns The image path as a string.
 */
export function getImageByColorAndBreed({
  color,
  breed,
}: {
  color: string;
  breed: string;
}): string {
  return `/images/bulls/${breed.toLowerCase()}-${color.toLowerCase()}.webp`;
}
