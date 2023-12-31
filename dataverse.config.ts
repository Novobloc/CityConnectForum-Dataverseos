export const config = {
  name: "communityforum", // app name should NOT contain "-"
  logo: "https://shivamangina.in/favicon.png",
  website: [], // you can use localhost:(port) for testing
  defaultFolderName: "Community Forum",
  description: "",
  models: [
    {
      isPublicDomain: false, // default
      schemaName: "post.graphql",
      encryptable: [],
      // encryptable: ["text", "images", "videos"], // strings within the schema and within the array represent fields that may be encrypted, while fields within the schema but not within the array represent fields that will definitely not be encrypted
    },
    {
      isPublicDomain: true,
      schemaName: "profile.graphql",
      encryptable: [],
    },
  ],
  ceramicUrl: null, // leave null to deploy ComposeDB on our Ceramic node "https://dataverseceramicdaemon.com"
};
