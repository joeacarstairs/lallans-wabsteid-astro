import img192w from '$images/lallans/issue25-192w.jpg';
import img274w from '$images/lallans/issue25-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 25,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1985',
  price: '0.75',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The twanty-fift issue o the Lallans magazine.',
    'en-GB': 'The twenty-fifth issue of the Lallans magazine.',
  },
  contributors: [
    'Robert McLellan',
    'JK Annand',
    'Peter Fortune',
    'William Hershaw',
    'Andy Kinnaird',
    'TS Law',
    'John McDonald',
    'John Manson',
    'Ken Morrice',
    'Craig Nelder',
    'William Neill',
    'John S Phillips',
    'David Purves',
    'Raymond Vettese',
  ],
};

export default issue;
