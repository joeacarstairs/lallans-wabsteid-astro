import type { CommitteeMember } from '$types/CommitteeMember';
import CommitteeRole from '$enums/CommitteeRole';
import RabWilsonImg106Src from '$images/committee/rab-wilson-106w.webp';
import RabWilsonImg146Src from '$images/committee/rab-wilson-146w.webp';
import RabWilsonImg192Src from '$images/committee/rab-wilson-192w.webp';
import RabWilsonImg222Src from '$images/committee/rab-wilson-222w.webp';
import JoeCarstairsImg106Src from '$images/committee/joe-carstairs-106w.webp';
import JoeCarstairsImg146Src from '$images/committee/joe-carstairs-146w.webp';
import JoeCarstairsImg192Src from '$images/committee/joe-carstairs-192w.webp';
import JoeCarstairsImg222Src from '$images/committee/joe-carstairs-222w.webp';
import TonyBeekmanImg106Src from '$images/committee/tony-beekman-106w.webp';
import TonyBeekmanImg146Src from '$images/committee/tony-beekman-146w.webp';
import TonyBeekmanImg192Src from '$images/committee/tony-beekman-192w.webp';
import TonyBeekmanImg222Src from '$images/committee/tony-beekman-222w.webp';

const committee: CommitteeMember[] = [
  {
    name: 'Rab Wilson',
    roles: [CommitteeRole.Preses],
    bio: {
      sco: `
        Rab Wilson is a poet wha scrieves predominantly i the Scots leid. He wis
        born an aye-an-oan bides i New Cumnock, East Ayrshire. He is forby a
        playwreicht, newspaper columnist an commentator on the Scots leid.
      `,
      'en-GB': `
        Rab Wilson is a poet who scrieves predominantly in the Scots language.
        He was born and remains in New Cumnock, East Ayrshire. He is also a
        playwright, newspaper columnist and commentator on the Scots language.
      `,
    },
    img: {
      width106: RabWilsonImg106Src,
      width146: RabWilsonImg146Src,
      width192: RabWilsonImg192Src,
      width222: RabWilsonImg222Src,
    },
  },
  {
    name: 'Alan Millar',
    roles: [CommitteeRole.LallansEiditor],
  },
  {
    name: 'Joe Carstairs',
    roles: [CommitteeRole.Secretar, CommitteeRole.Wabmaister],
    bio: {
      sco: `
        Joe haes been i the Associe syne 2019. He is a Scots leid lairner an
        believes eydent at the Scots leid belangs awbody. He is frae Perth
        but bides eenou i Embro, at he haes bidden in syne 2018.
      `,
      'en-GB': `
        Joe has been in the Society since 2019. He is a Scots language learner
        and believes passionately that the Scots language belongs to everyone.
        He is from Perth but now lives in Edinburgh, where he lived since 2018.
      `,
    },
    img: {
      width106: JoeCarstairsImg106Src,
      width146: JoeCarstairsImg146Src,
      width192: JoeCarstairsImg192Src,
      width222: JoeCarstairsImg222Src,
    },
  },
  {
    name: 'Tony Beekman',
    roles: [CommitteeRole.Thesaurer],
    bio: {
      sco: `
        Tony pits in a shift in the day job as a Community Lairnin an
        Development Warker for a central Scottish cooncil. He is also a trade
        union shop steward. Tony is a lifelang lairner o philosophy an likes
        tae reflect on it in the pub ower a pint or a dram. This helps him
        scrieve cutty tales whit he is chuffed tae see in Lallans occasionally.
      `,
      'en-GB': `
        By day, Tony puts in a shift as the Community Learning and Development
        Worker for a central Scottish council. He is also a trade union shop
        steward. Tony is a lifelong learner of philosophy and likes to reflect
        on it in the pub over a pint or a dram. This helps him to write short
        stories which he is chuffed to see in Lallans occasionally.
      `,
    },
    img: {
      width106: TonyBeekmanImg106Src,
      width146: TonyBeekmanImg146Src,
      width192: TonyBeekmanImg192Src,
      width222: TonyBeekmanImg222Src,
    },
  },
  {
    name: 'Derrick McClure',
    roles: [CommitteeRole.HonoraryPreses],
    bio: {
      sco: `
        Derrick is a retired academic wi a record o scholarly publication i the
        Scots leid field.  He served as Preses o the SLS for several year, and
        as Chairman o the Forum for Research in the Languages of Scotland and
        Ulster. Muckle o his recent wark has consisted o literar owersettins
        intil Scots, and several o them hae been pit furth in Lallans.
      `,
      'en-GB': `
        Derrick is a retired academic with a record of scholarly publication in
        the Scots language field.  He served as Preses of the SLS for several
        years, and as Chairman of the Forum for Research in the Languages of
        Scotland and Ulster.  Much of his recent work has consisted of literary
        translations into Scots, several of which have been published in Lallans.
      `,
    },
  },
  {
    name: 'Elaine Morton',
    roles: [CommitteeRole.OrdinaryMember],
    bio: {
      sco: `
        Elaine is a past editor o Lallans an bides on the Commattee tae owersee
        the Sangschaw competeition. Edinburgh is hame an she haes been wi the
        Associe sin 1998. She wad be blithe o mair weemen on the Commattee, sae,
        lasses, dinnae be blate tae come forrit!
      `,
      'en-GB': `
        Elaine is a past editor of Lallans and remains on the Committee to oversee
        the Sangschaw competition. Edinburgh is home and she has been with the
        Society since 1998. She would be pleased to see more women on the
        Committee, so, girls, don’t be shy to come forward!
      `,
    },
  },
  {
    name: 'Tracy Harvey',
    roles: [CommitteeRole.OrdinaryMember],
  },
  {
    name: 'Andy Matthews',
    roles: [CommitteeRole.OrdinaryMember],
  },
];

export default committee;
