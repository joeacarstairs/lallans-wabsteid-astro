import img192w from '$images/lallans/issue45-192w.jpg';
import img274w from '$images/lallans/issue45-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 45,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1995',
  price: '2.50',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The forty-fift issue o the Lallans magazine.',
    'en-GB': 'The forty-fifth issue of the Lallans magazine.',
  },
  contributors: [
    'Mavis Beckett',
    'David Purves',
    'Kenneth Farrow',
    'W George Pritchard',
    'John S Phillips',
    'Gavin Sprott',
    'Tom Wilson',
    'Neil MacCallum',
    'James Lowe',
    'Soutar Davie',
    'Douglas Kynoch',
    'Lilian Andersen',
    'Angus Watson',
    'Alec Scott',
    'Bessie JB MacArthur',
    'David C Purdie',
    'William J Rae',
    'James McLaren Ritchie',
    'Seumas Scott',
  ],
};

export default issue;
