export function convertToNumber(value: string) {
  const nb = Number.parseInt(value, 10);

  if (Number.isNaN(nb)) {
    throw new Error(`Erreur : "${value}" n'est pas un nombre`);
  }

  return nb;
}
