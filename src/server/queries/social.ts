

export type SocialLink = {
  platform:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "tiktok";
  url: string;
  previewImage?: string;
};

export const getSocialLinks = (_accountIdArg?: bigint): SocialLink[] => {
  return [{
  "platform": "facebook",
  "url": "https://www.facebook.com/gscapital2/",
  "previewImage": undefined
}, {
  "platform": "instagram",
  "url": "https://www.instagram.com/_gscapital/",
  "previewImage": undefined
}, {
  "platform": "twitter",
  "url": "https://twitter.com/gscapital2",
  "previewImage": undefined
}, {
  "platform": "linkedin",
  "url": "https://es.linkedin.com/company/gscapital",
  "previewImage": undefined
}] as SocialLink[];
}