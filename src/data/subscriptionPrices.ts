import MembershipType from '$enums/MembershipType';
import type Price from '$types/Price';

export const annualSubscriptionPrice: { [key in MembershipType]: Price } = {
  [MembershipType.IndividualUk]: '25.00',
  [MembershipType.IndividualNonUk]: '37.50',
  [MembershipType.InstitutionUk]: '30.00',
};
