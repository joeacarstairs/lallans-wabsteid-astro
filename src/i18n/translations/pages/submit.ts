import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Submit',
    'en-GB': () => 'Submit',
  },
  'on-pause-para-1': {
    sco: () => `
      As o July 2025, submissions are on haud due tae staffin issues. We leuk
      forrit tae acceptin your submissions til Lallans 107 in the near futur.
    `,
    'en-GB': () => `
      As of July 2025, submissions are on hold due to staffing issues. We look
      forward to accepting your submissions to Lallans 107 in the near future.
    `,
  },
  'submit-para-1': {
    sco: () => `
      We ar acceptin submeissions til Lallans 107.
    `,
    'en-GB': () => `
      We are accepting submissions to Lallans 107.
    `,
  },
  'submit-para-2': {
    sco: () => `
      Read the copyricht statement ablo. Gin you're happy wi thon, send us your
      cuttie tales, poesie and drama til
      <a href="mailto:lallans@hotmail.co.uk">lallans@hotmail.co.uk</a>.
    `,
    'en-GB': () => `
      Read the copyright statement below. If you're happy with it, send us your
      short stories, poetry and drama to
      <a href="mailto:lallans@hotmail.co.uk">lallans@hotmail.co.uk</a>.
    `,
  },
  'submit-para-3': {
    sco: () => `
      We luik forrit tae haein your submeission, whither you’ve been submittin
      for years or you’re a first-time writer!
    `,
    'en-GB': () => `
      We look forward to having your submission, whether you’ve been
      submitting for years or you’re a first-time writer!
    `,
  },
  'copyright-heading': {
    sco: () => 'Copyricht statement',
    'en-GB': () => 'Copyright statement',
  },
  'copyright-body': {
    sco: () => `
      Pieces submitted to Lallans, should be the original work of the person
      submitting them. Copyright remains with the author, however, submitting a
      piece for inclusion gives the Scots Language Society, though Lallans or
      other title, the right, in perpetuity, to republish the work in hard copy
      or digital form and to reformat it as necessary.
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
