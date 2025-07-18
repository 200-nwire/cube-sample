cube(`sla_time_entries`, {
  sql_table: `public."SLATimeEntries"`,
  
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
    
    previouspassedseconds: {
      sql: `${CUBE}."previousPassedSeconds"`,
      type: `number`
    },
    
    ticketid: {
      sql: `${CUBE}."ticketId"`,
      type: `string`
    },
    
    slagoalid: {
      sql: `${CUBE}."slaGoalId"`,
      type: `string`
    },
    
    assignedtoid: {
      sql: `${CUBE}."assignedToId"`,
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
    },
    
    pausescheduledat: {
      sql: `${CUBE}."pauseScheduledAt"`,
      type: `time`
    },
    
    startscheduledat: {
      sql: `${CUBE}."startScheduledAt"`,
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
