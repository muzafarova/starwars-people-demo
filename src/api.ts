async function loadResults(
  url: string,
  arr: unknown[] = []
): Promise<unknown[]> {
  const res = await fetch(url);
  const { results, next } = await res.json();
  arr.push(...results);
  if (next) {
    await loadResults(next, arr);
  }
  return arr;
}

export async function getPeople() {
  return loadResults('https://swapi.dev/api/people/') as Promise<
    { name: string; homeworld: string; created: string }[]
  >;
}

export async function getPlanets() {
  return loadResults('https://swapi.dev/api/planets/') as Promise<
    { url: string; name: string }[]
  >;
}
