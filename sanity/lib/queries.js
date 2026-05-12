import { groq } from 'next-sanity';

export const globalSettingsQuery = groq`*[_type == "globalSettings"][0]{
  phoneNumber,
  address,
  email,
  copyrightText,
  legalDisclaimer,
  linkedinUrl,
  contactSuccessMessage,
  shareTitle,
  shareDescription,
  "shareImage": shareImage.asset->url
}`;

export const homePageQuery = groq`*[_type == "homePage"][0]{
  heroHeadline,
  heroSubheadline,
  "heroBackgroundImage": heroBackgroundImage.asset->url,
  missionHeadline,
  missionCopy,
  missionButtonText,
  missionButtonLink,
  "missionImage": missionImage.asset->url,
  teamHeadline,
  teamCopy,
  teamButtonText,
  teamButtonLink,
  "teamImages": teamImages[].asset->url,
  offeringsHeadline,
  offeringsCopy,
  offeringsButtonText,
  offeringsButtonLink,
  advisorHeadline,
  advisorCopy,
  ctaHeadline,
  ctaButtonText,
  ctaButtonLink,
  "ctaImage": ctaImage.asset->url
}`;

export const missionPageQuery = groq`*[_type == "missionPage"][0]{
  heroHeadline,
  "heroImage": heroImage.asset->url,
  editorialHeadline,
  editorialParagraphs,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  advisorHeadline,
  advisorCopy,
  ctaHeadline,
  ctaButtonText,
  ctaButtonLink,
  "ctaImage": ctaImage.asset->url
}`;

export const teamPageQuery = groq`*[_type == "teamPage"][0]{
  heroHeadline,
  "heroImage": heroImage.asset->url,
  introHeadline,
  introParagraphs,
  teamListHeadline,
  teamMembers[]{
    name,
    title,
    "image": image.asset->url,
    shortSummary,
    fullBio,
    email,
    linkedInUrl
  },
  ctaHeadline,
  ctaButtonText,
  ctaButtonLink,
  "ctaImage": ctaImage.asset->url
}`;

export const offeringsPageQuery = groq`*[_type == "offeringsPage"][0]{
  heroHeadline,
  "heroImage": heroImage.asset->url,
  introHeadline,
  introCopy,
  offeringsCategories[]{
    categoryName,
    products,
    needs,
    disclaimer
  },
  ctaHeadline,
  ctaButtonText,
  ctaButtonLink,
  "ctaImage": ctaImage.asset->url
}`;

export const connectPageQuery = groq`*[_type == "connectPage"][0]{
  heroHeadline,
  "heroImage": heroImage.asset->url,
  introHeadline,
  introCopy
}`;
