/** @type {import ("drizzle-kit".Config)} */
export default ({
    dialect: 'postgresql',
    schema: "./configs/schema.js",
    dbCredentials: {
      url: 'postgresql://neondb_owner:AHqP6T3uigDe@ep-fragrant-tree-a5fkqaj3.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require',
    }
  });