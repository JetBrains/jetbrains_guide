import { shallow } from 'enzyme';
import * as React from 'react';
import StepsListing, { IStepsListingProps } from './StepsListing';

describe('StepsListing', () => {
  const steps: IStepsListingProps = {
    steps: [
      {
        id: 'Some Id',
        excerpt: 'Some Excerpt',
        html: 'Some Html',
        fields: {
          slug: 'Some Slug',
          technologies: [],
          topics: [],
          author: {
            id: 'Some Id',
            excerpt: 'Some Excerpt',
            html: 'Some Html',
            frontmatter: {
              title: 'Some Author',
              headshot: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 0.2,
                    src: 'Some Src',
                    srcSet: 'Some Srcset',
                    sizes: 'some sizes'
                  }
                }
              },
              label: 'Some Label',
              type: 'author'
            },
            fields: {
              slug: 'Some Slug',
              tips: []
            }
          }
        },
        frontmatter: {
          title: 'Some Title',
          steps: ['step1', 'step2'],
          date: 'Some date',
          technologies: [],
          topics: [],
          author: 'Some Author',
          type: 'tutorial'
        }
      }
    ]
  };
  const wrapper = shallow(<StepsListing {...steps} />);
  it('renders steps', () => {
    const card = wrapper.find('ResourceCard');
    expect(card.length).toEqual(1);
    expect(card.prop('title')).toEqual(steps.steps[0].frontmatter.title);
  });
});
