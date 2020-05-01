import { PrevNext } from './models';

export interface SlugResult {
  previous?: PrevNext;
  next?: PrevNext;
}

function getPrevNextBySlug(entries: PrevNext[], currentSlug: string): SlugResult {
  let previous;
  let next;
  entries.map((entry, i) => {
    if (entry.slug === currentSlug) {
      previous = entries[i - 1];
      next = entries[i + 1];
    }
  });
  // noinspection JSUnusedAssignment
  return { previous, next };
}

export default getPrevNextBySlug;
