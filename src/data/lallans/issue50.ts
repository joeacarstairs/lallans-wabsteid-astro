import img192w from '$images/lallans/issue50-192w.jpg';
import img274w from '$images/lallans/issue50-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 50,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1997',
  price: '3.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The fiftieth issue o the Lallans magazine.',
    'en-GB': 'The fiftieth issue of the Lallans magazine.',
  },
  contributors: [
    'Aald Daa',
    'Lilian Anderson',
    'John Brewster',
    'Donald Campbell',
    'Soutar Davie',
    'Sheila Douglas',
    'Kenneth D Farrow',
    'King James VI',
    'Craig Halliday',
    'Brent Hodgson',
    'TS Law',
    'Mary McIntosh',
    'IR Mitchell',
    'William Neill',
    'Liz Niven',
    'David C Purdie',
    'David Purves',
    'Lydia Robb',
    'John Stewart o Baldynneis',
    'Raymond Vettese',
    'Colin Will',
    'Peter D Wright',
  ],
};

export default issue;
