import { getLallansIssue } from '$data/lallans';
import { getScotsoun } from '$data/scotsoun';
import type { TranslationsDictionary } from '$types/TranslationsDictionary';

// This maun be kept up til date bi haund. There is
// nae compile-time check that aw routes hae been
// translatit.
const tBreadcrumbs = {
  '/': {
    sco: () => 'Hame',
    'en-GB': () => 'Home',
  },
  '/furthsettins/': {
    sco: () => 'Furthsettins',
    'en-GB': () => 'Publications',
  },
  '/furthsettins/lallans/': {
    sco: () => 'Lallans',
    'en-GB': () => 'Lallans',
  },
  '/furthsettins/scotsoun/': {
    sco: () => 'Scotsoun',
    'en-GB': () => 'Scotsoun',
  },
  '/jyne/': {
    sco: () => 'Jyne',
    'en-GB': () => 'Join',
  },
  '/jyne/paypal/': {
    sco: () => 'PayPal',
    'en-GB': () => 'PayPal',
  },
  '/jyne/paypal/individual-uk/': {
    sco: () => 'Individual (UK)',
    'en-GB': () => 'Individual (UK)',
  },
  '/jyne/paypal/individual-non-uk/': {
    sco: () => 'Individual (non-UK)',
    'en-GB': () => 'Individual (non-UK)',
  },
  '/jyne/paypal/institution-uk/': {
    sco: () => 'Institutional (UK)',
    'en-GB': () => 'Institutional (UK)',
  },
  '/news/': {
    sco: () => 'News',
    'en-GB': () => 'News',
  },
  ...Object.fromEntries(
    Object.keys(getLallansIssue).map((lallansIssueNumber) => [
      `/furthsettins/lallans/${lallansIssueNumber}/`,
      {
        sco: () => `Lallans ${lallansIssueNumber}`,
        'en-GB': () => `Lallans ${lallansIssueNumber}`,
      },
    ])
  ),
  ...Object.fromEntries(
    Object.keys(getScotsoun).map((scotsounId) => [
      `/furthsettins/scotsoun/${scotsounId}/`,
      {
        sco: () => `Scotsoun ${scotsounId}`,
        'en-GB': () => `Scotsoun ${scotsounId}`,
      },
    ])
  ),
};

type Raw = typeof tBreadcrumbs;
export default tBreadcrumbs as TranslationsDictionary<Raw>;
