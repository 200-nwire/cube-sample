cube(`ticket_priority`, {
  sql_table: `public."TicketPriority"`,
  
  joins: {
    ticket: {
      sql: `${CUBE}.id = ${ticket}."priorityId"`,
      relationship: `many_to_one`
    },
    
    sla_goals: {
      sql: `${CUBE}.id = ${sla_goals}."priorityId"`,
      relationship: `many_to_one`
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
