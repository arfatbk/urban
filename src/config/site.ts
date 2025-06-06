export const siteConfig = {
  basePath: process.env.ENVIRONMENT === 'local' ? "" : "/",
  name: {
    short: "Swarajya Urban",
    full: "Swarajya Urban Society",
    legal: "Swarajya Urban Co-operative Credit Society Ltd.",
  },
  description: "Your trusted partner in financial growth",
  url: "https://swarajyurban.in",
  socials: {
    facebook:
      "https://www.facebook.com/people/Swarajy-Urban-Co-Op-Credit-Society-Limited-Pathri/61575036741457/",
    instagram:
      "https://www.facebook.com/people/Swarajy-Urban-Co-Op-Credit-Society-Limited-Pathri/61575036741457/",
  },
  email: "swarajyurban@gmail.com",
  contact: "+91 91 5843 1818 ",
} as const;
