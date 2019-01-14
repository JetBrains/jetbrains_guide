// import { mount } from 'enzyme';
// import * as React from 'react';
// import StepsListing, { IStepsListingProps } from './StepsListing';
//
// describe('StepsListing', () => {
//   const steps: IStepsListingProps = {
//     steps: [
//       {
//         id: 'Some Id',
//         excerpt: 'Some Excerpt',
//         html: 'Some Html',
//         fields: {
//           slug: 'Some Slug',
//           technologies: [],
//           topics: [],
//           author: {
//             id: 'Some Id',
//             excerpt: 'Some Excerpt',
//             html: 'Some Html',
//             frontmatter: {
//               title: 'Some Author',
//               headshot: {
//                 childImageSharp: {
//                   fluid: {
//                     aspectRatio: 0.2,
//                     src: 'Some Src',
//                     srcSet: 'Some Srcset',
//                     sizes: 'some sizes'
//                   }
//                 }
//               },
//               label: 'Some Label',
//               type: 'author'
//             },
//             fields: {
//               slug: 'Some Slug',
//               tips: []
//             }
//           }
//         },
//         frontmatter: {
//           title: 'Some Title',
//           steps: ['step1', 'step2'],
//           date: 'Some date',
//           technologies: [],
//           topics: [],
//           author: 'Some Author',
//           type: 'tutorial'
//         }
//       },
//       {
//         id: 'Some Id2',
//         excerpt: 'Some Excerpt2',
//         html: 'Some Html2',
//         fields: {
//           slug: 'Some Slug2',
//           technologies: [],
//           topics: [],
//           author: {
//             id: 'Some Id2',
//             excerpt: 'Some Excerpt2',
//             html: 'Some Html2',
//             frontmatter: {
//               title: 'Some Author2',
//               headshot: {
//                 childImageSharp: {
//                   fluid: {
//                     aspectRatio: 0.2,
//                     src: 'Some Src',
//                     srcSet: 'Some Srcset',
//                     sizes: 'some sizes'
//                   }
//                 }
//               },
//               label: 'Some Label',
//               type: 'author'
//             },
//             fields: {
//               slug: 'Some Slug',
//               tips: []
//             }
//           }
//         },
//         frontmatter: {
//           title: 'Some Title2',
//           steps: ['step1', 'step2'],
//           date: 'Some date',
//           technologies: [],
//           topics: [],
//           author: 'Some Author',
//           type: 'tutorial'
//         }
//       }
//     ]
//   };
//   const wrapper = mount(<StepsListing {...steps} />);
//   it('renders steps', () => {
//     const cards = wrapper.find('ResourceCard');
//     expect(cards.length).toEqual(2);
//     const firstCard = cards.first();
//     expect(firstCard.prop('title')).toEqual(steps.steps[0].frontmatter.title);
//   });
// });
