import { getPrevNextBySlug, ISlugEntry, ISlugResult } from './utils';

const e0: ISlugEntry = { slug: '/slug0', label: 'Slug 0' };
const e1: ISlugEntry = { slug: '/slug1', label: 'Slug 1' };
const e2: ISlugEntry = { slug: '/slug2', label: 'Slug 2' };
const e3: ISlugEntry = { slug: '/slug3', label: 'Slug 3' };
const e4: ISlugEntry = { slug: '/slug4', label: 'Slug 4' };

describe('Tutorial Utilities', () => {
  it('should handle empty list', () => {
    const entries: ISlugEntry[] = [];
    const actual: ISlugResult = getPrevNextBySlug(entries, '/slug0');
    const expected = { previous: undefined, next: undefined };
    expect(actual).toEqual(expected);
  });

  it('should handle list with 1', () => {
    const entries: ISlugEntry[] = [e0];
    const actual: ISlugResult = getPrevNextBySlug(entries, '/slug0');
    const expected = { previous: undefined, next: undefined };
    expect(actual).toEqual(expected);
  });

  it('should handle list with 2', () => {
    const entries: ISlugEntry[] = [e0, e1];
    expect(getPrevNextBySlug(entries, '/slug0').previous).toEqual(undefined);
    expect(getPrevNextBySlug(entries, '/slug0').next).toEqual(e1);
    expect(getPrevNextBySlug(entries, '/slug1').previous).toEqual(e0);
    expect(getPrevNextBySlug(entries, '/slug1').next).toEqual(undefined);
  });

  it('should handle list with 3', () => {
    const entries: ISlugEntry[] = [e0, e1, e2];
    expect(getPrevNextBySlug(entries, '/slug0').previous).toEqual(undefined);
    expect(getPrevNextBySlug(entries, '/slug0').next).toEqual(e1);
    expect(getPrevNextBySlug(entries, '/slug1').previous).toEqual(e0);
    expect(getPrevNextBySlug(entries, '/slug1').next).toEqual(e2);
    expect(getPrevNextBySlug(entries, '/slug2').previous).toEqual(e1);
    expect(getPrevNextBySlug(entries, '/slug2').next).toEqual(undefined);
  });

  it('should handle list with 4', () => {
    const entries: ISlugEntry[] = [e0, e1, e2, e3];
    expect(getPrevNextBySlug(entries, '/slug0').previous).toEqual(undefined);
    expect(getPrevNextBySlug(entries, '/slug0').next).toEqual(e1);
    expect(getPrevNextBySlug(entries, '/slug1').previous).toEqual(e0);
    expect(getPrevNextBySlug(entries, '/slug1').next).toEqual(e2);
    expect(getPrevNextBySlug(entries, '/slug2').previous).toEqual(e1);
    expect(getPrevNextBySlug(entries, '/slug2').next).toEqual(e3);
    expect(getPrevNextBySlug(entries, '/slug3').previous).toEqual(e2);
    expect(getPrevNextBySlug(entries, '/slug3').next).toEqual(undefined);
  });

  it('should handle list with 5', () => {
    const entries: ISlugEntry[] = [e0, e1, e2, e3, e4];
    expect(getPrevNextBySlug(entries, '/slug0').previous).toEqual(undefined);
    expect(getPrevNextBySlug(entries, '/slug0').next).toEqual(e1);
    expect(getPrevNextBySlug(entries, '/slug1').previous).toEqual(e0);
    expect(getPrevNextBySlug(entries, '/slug1').next).toEqual(e2);
    expect(getPrevNextBySlug(entries, '/slug2').previous).toEqual(e1);
    expect(getPrevNextBySlug(entries, '/slug2').next).toEqual(e3);
    expect(getPrevNextBySlug(entries, '/slug3').previous).toEqual(e2);
    expect(getPrevNextBySlug(entries, '/slug3').next).toEqual(e4);
    expect(getPrevNextBySlug(entries, '/slug3').previous).toEqual(e2);
    expect(getPrevNextBySlug(entries, '/slug3').next).toEqual(e4);
    expect(getPrevNextBySlug(entries, '/slug4').previous).toEqual(e3);
    expect(getPrevNextBySlug(entries, '/slug4').next).toEqual(undefined);
  });
});
