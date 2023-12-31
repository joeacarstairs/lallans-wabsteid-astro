import img192w from '$images/lallans/issue53-192w.jpg';
import img274w from '$images/lallans/issue53-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 53,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1998',
  price: '3.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The fifty-third issue o the Lallans magazine.',
    'en-GB': 'The fifty-third issue of the Lallans magazine.',
  },
  contributors: [
    'Ken Angus',
    'Mavis Beckett',
    'Prior Adam Blackadder o Coldingham',
    'Donald Campbell',
    'Joe Corrie',
    'Sheila Douglas',
    'Kenneth D Farrow',
    'Muriel Ferrier',
    'Pete Fortune',
    'George Hardie',
    'Douglas Kynoch',
    'Margaret Macaulay',
    'John Manson',
    'Ann Matheson',
    'Elaine Morton',
    'Josephine Neill',
    'William Neill',
    'Prior John Olle o Coldingham',
    'John S Phillips',
    'George Philp',
    'David Purves',
    'Allan Ramsay',
    'Lydia Robb',
    'Derek Ross',
    'Seamas Scott',
    'Anne Smith',
    'James Hall Thomson',
    'Raymond Vettese',
  ],
};

export default issue;
