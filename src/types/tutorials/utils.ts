export interface ISlugEntry {
  slug: string;
  label: string;
}

export interface ISlugResult {
  previous?: ISlugEntry;
  next?: ISlugEntry;
}

export function getPrevNextBySlug(entries: ISlugEntry[], currentSlug: string): ISlugResult {
  let previous;
  let next;
  entries.map((entry, i) => {
    if (entry.slug === currentSlug) {
      previous = entries[i - 1];
      next = entries[i + 1];
    }
  });
  return { previous, next };
}
