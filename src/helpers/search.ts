// https://itnext.io/levenshtein-distance-in-typescript-6de81ea2fb63

export function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  if (a[0] === b[0]) return levenshtein(a.substring(1), b.substring(1));

  return (
    1 +
    Math.min(
      levenshtein(a, b.substring(1)),
      levenshtein(a.substring(1), b),
      levenshtein(a.substring(1), b.substring(1))
    )
  );
}

function levenshtein2(a: string, b: string): number {
  // prettier-ignore
  const matrix = Array.from({ length: a.length })
        .map(() => Array.from({ length: b.length })
        .map(() => 0));

  Array.from(b).forEach((_, j) => {
    Array.from(a).forEach((_, i) => {
      matrix[i][j] = Math.min(
        (i === 0 ? 0 : matrix[i - 1][j]) + 1,
        (j === 0 ? 0 : matrix[i][j - 1]) + 1,
        (i === 0 || j == 0 ? 0 : matrix[i - 1][j - 1]) + (a[i] == b[j] ? 0 : 1)
      );
    });
  });

  return matrix[a.length - 1][b.length - 1];
}
