import { PARTNERS } from "../../app/shared/PARTNERS.js";

export const selectAllPartners = () => PARTNERS;

export const selectFeaturedPartner = () => {
  return PARTNERS.find((partner) => partner.featured);
};
