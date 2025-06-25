cube(`sla_goals`, {
  sql_table: `public."SLAGoals"`,
  
  joins: {
    calendar: {
      sql: `${CUBE.calendarid} = ${calendar.id}`,
      relationship: `many_to_one`
    },
    
    sla: {
      sql: `${CUBE.slaid} = ${sla.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    filters: {
      sql: `filters`,
      type: `string`
    },
    
    metadata: {
      sql: `metadata`,
      type: `string`
    },
    
    calendarid: {
      sql: `${CUBE}."calendarId"`,
      type: `string`
    },
    
    slaid: {
      sql: `${CUBE}."slaId"`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    goaltype: {
      sql: `${CUBE}."goalType"`,
      type: `string`
    },
    
    targettime: {
      sql: `${CUBE}."targetTime"`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}."updatedAt"`,
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
