cube(`automation_rule`, {
  sql_table: `public."AutomationRule"`,
  
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
    
    conditions: {
      sql: `conditions`,
      type: `string`
    },
    
    action: {
      sql: `action`,
      type: `string`
    },
    
    metadata: {
      sql: `metadata`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    trigger: {
      sql: `trigger`,
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
