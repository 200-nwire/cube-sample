cube(`ticket_category`, {
  sql_table: `public."TicketCategory"`,
  
  joins: {
    ticket: {
      sql: `${CUBE}.id = ${ticket}."categoryId"`,
      relationship: `one_to_many`
    },
    
    sla_goals: {
      sql: `${CUBE}.id = ${sla_goals}."categoryId"`,
      relationship: `one_to_many`
    }
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
