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
    
    companyid: {
      sql: `${CUBE}."companyId"`,
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
