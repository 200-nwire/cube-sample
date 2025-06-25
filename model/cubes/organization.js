cube(`organization`, {
  sql_table: `public."Organization"`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    enabled: {
      sql: `enabled`,
      type: `boolean`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    prefix: {
      sql: `prefix`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    domains: {
      sql: `domains`,
      type: `string`
    },
    
    maincontactid: {
      sql: `${CUBE}."mainContactId"`,
      type: `string`
    },
    
    darklogourl: {
      sql: `${CUBE}."darkLogoUrl"`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    logourl: {
      sql: `${CUBE}."logoUrl"`,
      type: `string`
    },
    
    name: {
      sql: `name`,
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
