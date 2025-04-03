cube(`ticket_sla`, {
  sql_table: `public."TicketSLA"`,
  
  joins: {
    ticket: {
      sql: `${CUBE}."ticketId" = ${ticket}.id`,
      relationship: `many_to_one`
    },
    
    sla_goals: {
      sql: `${CUBE}."slaGoalId" = ${sla_goals}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
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
    
    totaltime: {
      sql: `${CUBE}."totalTime"`,
      type: `number`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    resolvedat: {
      sql: `${CUBE}."resolvedAt"`,
      type: `time`
    },
    
    total_time: {
      sql: `${CUBE}."totalTime"`,
      type: `number`
    },
    
    resolved_at: {
      sql: `${CUBE}."resolvedAt"`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    average_total_time: {
      sql: `AVG(total_time)`,
      type: `number`
    },
    
    min_total_time: {
      sql: `MIN(total_time)`,
      type: `number`
    },
    
    percentile_25: {
      sql: `PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY total_time)`,
      type: `number`
    },
    
    percentile_50: {
      sql: `PERCENTILE_CONT(0.50) WITHIN GROUP (ORDER BY total_time)`,
      type: `number`
    },
    
    percentile_75: {
      sql: `PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY total_time)`,
      type: `number`
    },
    
    max_total_time: {
      sql: `MAX(total_time)`,
      type: `number`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
