/**
 * Calculates the overall score of a bull based on its stats.
 * The score is a weighted sum of the individual stats.
 *
 * @param stats - An object containing the bull's stats.
 * @returns The calculated bull score as a number.
 */
export function calculateBullScore(
  stats: {
    growth: number;
    calvingEase: number;
    reproduction: number;
    moderation: number;
    carcass: number;
  } | null,
): number {
  if (!stats) return 0;

  const { growth, calvingEase, reproduction, moderation, carcass } = stats;

  return (
    growth * 0.3 +
    calvingEase * 0.25 +
    reproduction * 0.2 +
    moderation * 0.15 +
    carcass * 0.1
  );
}
