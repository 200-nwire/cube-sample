cube(`sla_time_entries`, {
  sql_table: `public."SLATimeEntries"`,
  
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
    
    startedat: {
      sql: `${CUBE}."startedAt"`,
      type: `time`
    },
    
    endedat: {
      sql: `${CUBE}."endedAt"`,
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
