import { groq } from 'next-sanity';

export const heroQuery = groq`*[_type == "hero"][0]{
  headline,
  subheadline,
  lottieAnimation
}`;

export const missionQuery = groq`*[_type == "mission"][0]{
  title,
  body,
  ctaLabel,
  ctaLink
}`;

export const teamQuery = groq`*[_type == "team"][0]{
  title,
  content,
  "featuredImage": featuredImage.asset->url,
  ctaLabel
}`;

export const advisorQuery = groq`*[_type == "advisor"][0]{
  title,
  body,
  ctaLabel
}`;

export const offeringsQuery = groq`*[_type == "offerings"][0]{
  title,
  body,
  ctaLabel
}`;
