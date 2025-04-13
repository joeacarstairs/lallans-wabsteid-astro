import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Furthsettins: discontinued',
    'en-GB': () => 'Publications: discontinued',
  },
  para: {
    sco: () => `
      We uisst tae sell back issues o Lallans and Scotsoun CDs frae this page,
      but this isnae feasible ony mair. We're leukin at the options for a new
      wey o distributin thir furthsettins.
    `,
    'en-GB': () => `
      We used to sell back issues of Lallans and Scotsoun CDs from this page,
      but this isn't feasible any more. We're looking at the options for a new
      way of distributing these publications.
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
