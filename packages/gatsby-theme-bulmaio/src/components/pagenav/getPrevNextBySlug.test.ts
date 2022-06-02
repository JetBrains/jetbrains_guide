import getPrevNextBySlug from './getPrevNextBySlug';
import { PrevNext } from './models';

const entries: PrevNext[] = [
  { slug: 'slug1', label: 'label1' },
  { slug: 'slug2', label: 'label2' },
  { slug: 'slug3', label: 'label3' },
  { slug: 'slug4', label: 'label4' },
  { slug: 'slug5', label: 'label5' },
];

describe('Get Previous Next', () => {
  it('should get next', () => {
    const currentSlug = 'slug1';
    const { previous, next } = getPrevNextBySlug(entries, currentSlug);
    expect(previous).toBeUndefined();
    if (next) {
      expect(next.label).toBe(entries[1].label);
    }
  });

  it('should get previous', () => {
    const currentSlug = 'slug5';
    const { previous, next } = getPrevNextBySlug(entries, currentSlug);
    expect(next).toBeUndefined();
    if (previous) {
      expect(previous.label).toBe(entries[3].label);
    }
  });

  it('should get both', () => {
    const currentSlug = 'slug3';
    const { previous, next } = getPrevNextBySlug(entries, currentSlug);
    if (previous) {
      expect(previous.label).toBe(entries[1].label);
    }
    if (next) {
      expect(next.label).toBe(entries[3].label);
    }
  });
});
