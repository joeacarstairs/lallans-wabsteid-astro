import img192w from '$images/lallans/issue38-192w.jpg';
import img274w from '$images/lallans/issue38-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 38,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Whitsuntid 1992',
  price: '2.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The thirty-echtth issue o the Lallans magazine.',
    'en-GB': 'The thirty-eighth issue of the Lallans magazine.',
  },
  contributors: [
    'John Phillips',
    'John Murray',
    'Sam Gilliland',
    'WG Pritchard',
    'David Stevely',
    'William Neill',
    'Athole Cameron',
    'Lilian Anderson',
    'Pete Fortune',
    'Gavin Douglas',
    'James Hall Thomson',
    'William Hershaw',
    'Davit W Potter',
    'John Manson',
    'Alexander McGregor',
    'Peter Cameron',
    'William J Rae',
    'Florence Russell',
    'Soutar Davie',
  ],
};

export default issue;
