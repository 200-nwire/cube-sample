cube(`sla_conditions`, {
  sql_table: `public."SLAConditions"`,
  
  joins: {
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
    
    conditions: {
      sql: `conditions`,
      type: `string`
    },
    
    slagoalid: {
      sql: `${CUBE}."slaGoalId"`,
      type: `string`
    },
    
    action: {
      sql: `action`,
      type: `string`
    },
    
    trigger: {
      sql: `trigger`,
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
