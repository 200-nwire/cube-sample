cube(`ticket_priority`, {
  sql_table: `public."TicketPriority"`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    color: {
      sql: `color`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    icon: {
      sql: `icon`,
      type: `string`
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
