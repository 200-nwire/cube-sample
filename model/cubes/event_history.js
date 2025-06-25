cube(`event_history`, {
  sql_table: `public."EventHistory"`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    changes: {
      sql: `changes`,
      type: `string`
    },
    
    data: {
      sql: `data`,
      type: `string`
    },
    
    action: {
      sql: `action`,
      type: `string`
    },
    
    eventtype: {
      sql: `${CUBE}."eventType"`,
      type: `string`
    },
    
    entitytype: {
      sql: `${CUBE}."entityType"`,
      type: `string`
    },
    
    entityid: {
      sql: `${CUBE}."entityId"`,
      type: `string`
    },
    
    createdby: {
      sql: `${CUBE}."createdBy"`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
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
