cube(`ticket_sla`, {
  sql_table: `public."TicketSLA"`,
  
  joins: {
    ticket: {
      sql: `${CUBE.ticketid} = ${ticket.id}`,
      relationship: `many_to_one`
    },
    
    sla_goals: {
      sql: `${CUBE.slagoalid} = ${sla_goals.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    totaltime: {
      sql: `${CUBE}."totalTime"`,
      type: `number`
    },
    
    breached: {
      sql: `breached`,
      type: `boolean`
    },
    
    ticketid: {
      sql: `${CUBE}."ticketId"`,
      type: `string`
    },
    
    slagoalid: {
      sql: `${CUBE}."slaGoalId"`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    resolvedat: {
      sql: `${CUBE}."resolvedAt"`,
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
