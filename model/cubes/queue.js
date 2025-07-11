cube(`queue`, {
  sql_table: `public."Queue"`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    filters: {
      sql: `filters`,
      type: `string`
    },
    
    toall: {
      sql: `${CUBE}."toAll"`,
      type: `boolean`
    },
    
    teamids: {
      sql: `${CUBE}."teamIds"`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    slug: {
      sql: `slug`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    userids: {
      sql: `${CUBE}."userIds"`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
