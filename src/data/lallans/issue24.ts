import img192w from '$images/lallans/issue24-192w.jpg';
import img274w from '$images/lallans/issue24-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 24,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Whitsuntid 1985',
  price: '0.75',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The twanty-fowerth issue o the Lallans magazine.',
    'en-GB': 'The twenty-fourth issue of the Lallans magazine.',
  },
  contributors: [
    'James Begg',
    'Sheena Blackhall',
    'Margaret Ferguson',
    'Stuart Ferguson',
    'William Hershaw',
    'Tom Hubbard',
    'Andy Kinnaird',
    'Derrick McClure',
    'John McDonald',
    'Janet Murray',
    'WS Milne',
    'John S Philips',
    'David Purves',
    'William J Rae',
    'Raymond Vettese',
  ],
};

export default issue;
