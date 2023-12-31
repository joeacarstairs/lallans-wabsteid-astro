import img192w from '$images/lallans/issue49-192w.jpg';
import img274w from '$images/lallans/issue49-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 49,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Whitsuntid 1997',
  price: '3.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The forty-ninth issue o the Lallans magazine.',
    'en-GB': 'The forty-ninth issue of the Lallans magazine.',
  },
  contributors: [
    'Abbot Richard Abercromby',
    'AJ Aitken',
    'Peter Cameron',
    'Soutar Davie',
    'Sheila Douglas',
    'Kenneth D Farrow',
    'Donald Farquhar',
    'Harvey Holton',
    'Charles Kemp',
    'Gordon McFarlane',
    'AD Mackie',
    'Sir Richard Maitland o Lethington',
    'John Manson',
    'George Philp',
    'David C Purdie',
    'David Purves',
    'Dufton Scott',
    'Gavin Sprott',
    'Angus Watson',
    'Peter D Wright',
  ],
};

export default issue;
