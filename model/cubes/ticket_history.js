cube(`ticket_history`, {
  sql_table: `public."TicketHistory"`,
  
  joins: {
    ticket: {
      sql: `${CUBE}."ticketId" = ${ticket}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    ticketid: {
      sql: `${CUBE}."ticketId"`,
      type: `string`
    },
    
    action: {
      sql: `action`,
      type: `string`
    },
    
    performedbyid: {
      sql: `${CUBE}."performedById"`,
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
