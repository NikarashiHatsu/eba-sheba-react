/**
 * Official movie/TV poster URLs sourced from TMDB (The Movie Database).
 * TMDB is used instead of IMDb for reliable CDN hotlinking.
 * @see https://www.themoviedb.org
 */
export const moviePosters = {
  "the-seen-and-unseen":
    "https://image.tmdb.org/t/p/w780/fPyMJ20foiQGYbMYScBlD5HrG7G.jpg",
  bebas: "https://image.tmdb.org/t/p/w780/uierAwvdeXLIqJ7Slq3erw8XcLa.jpg",
  "susi-susanti":
    "https://image.tmdb.org/t/p/w780/kjfoVBYxHm98YUVPQooJs2oLdNU.jpg",
  "my-stupid-boss-2":
    "https://image.tmdb.org/t/p/w780/z2zs4Kv57d9jUFOtL9lyxDGN4y0.jpg",
  "before-now-then":
    "https://image.tmdb.org/t/p/w1280/6OQ4hzMLjzU0AZoRXWsCncV6Fnr.jpg",
  yuni: "https://image.tmdb.org/t/p/w780/hBfGYPk9hxqvRDpJj8YAlkjxTSe.jpg",
  "kadet-1947":
    "https://image.tmdb.org/t/p/w780/tmUqp7xpO8AuBJQOZo4vbCwDECt.jpg",
  "my-stupid-boss":
    "https://image.tmdb.org/t/p/w780/xbw7vkg1prhi3gj2SWqBnYJgxov.jpg",
  twivortiare:
    "https://image.tmdb.org/t/p/w780/4veizArlJrUPmHqP6HnModjYTkw.jpg",
  "petualangan-sherina-2":
    "https://image.tmdb.org/t/p/w780/1whriJjmbFWVFkO3aVZ3hcJQ5g7.jpg",
  "sleep-call":
    "https://image.tmdb.org/t/p/w780/gIUd4ZU2xakeKx5NFPdaEa45oPY.jpg",
  "sampai-nanti-hanna":
    "https://image.tmdb.org/t/p/w780/iBZUhsIhsDdTjr4N1AwHsZdbPn9.jpg",
  "benyamin-biang-kerok":
    "https://image.tmdb.org/t/p/w780/7pOQOKeF322AVpzDiUL7AaqjQHR.jpg",
  "benyamin-biang-kerok-2":
    "https://image.tmdb.org/t/p/w780/lQTy2UJU4LkIiNcYEk0vnVGgAGC.jpg",
  "srimulat-hidup-memang-komedi":
    "https://image.tmdb.org/t/p/w780/4SRHjFrLd5cTjk7Ih8dlgBEZ5oi.jpg",
  "kulari-ke-pantai":
    "https://image.tmdb.org/t/p/w1280/gVBuSyNA1cAVxVoerNhmGwMZhgz.jpg",
  "3-dara": "https://image.tmdb.org/t/p/w780/lqoW9VjsyyOkaSGUixgGWgtCPGO.jpg",
  "lovely-man":
    "https://image.tmdb.org/t/p/w780/2DpL6GyMRJEf6bgGvyWoyQeYlzu.jpg",
  "ratu-kostmopolitan":
    "https://image.tmdb.org/t/p/w780/lY2YFa3QBzBHlxXR4yn3MD63Jbr.jpg",
  "postcards-from-the-zoo":
    "https://image.tmdb.org/t/p/w780/8myhNNDqE2PgcewvyWG5FHYfHDA.jpg",
  "sokola-rimba":
    "https://image.tmdb.org/t/p/w780/q5UZPerLwQNZUw7QX9zhPCkn78l.jpg",
  "menunggu-pagi":
    "https://image.tmdb.org/t/p/w780/jfrHMRyV0kwljZs1v5a11cdG05n.jpg",
  abracadabra:
    "https://image.tmdb.org/t/p/w1280/7uEMxAJGJ8eXBgI2FJm51sIQNOO.jpg",
  "mooncake-story":
    "https://image.tmdb.org/t/p/w780/9A39qyBxWuATZf3IqJZWRYDdJ4e.jpg",
  "laut-tengah":
    "https://image.tmdb.org/t/p/w780/vsyWdZNOxCmOhaF3yGY1fNMXbCt.jpg",
  dopamin: "https://image.tmdb.org/t/p/w780/aQfK1AuKEYnOsGnnBujk42y5aGg.jpg",
  "perang-kota":
    "https://image.tmdb.org/t/p/w780/sBANlmgOdrCEYMeXJLyh3qJ6URn.jpg",
} as const;

export type MoviePosterId = keyof typeof moviePosters;

export function getPosterUrl(id: MoviePosterId): string {
  return moviePosters[id];
}
