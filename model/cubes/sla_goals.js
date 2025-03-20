cube(`sla_goals`, {
  sql_table: `public."SLAGoals"`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    workhours: {
      sql: `${CUBE}."workHours"`,
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
    
    priorityid: {
      sql: `${CUBE}."priorityId"`,
      type: `string`
    },
    
    categoryid: {
      sql: `${CUBE}."categoryId"`,
      type: `string`
    },
    
    typeid: {
      sql: `${CUBE}."typeId"`,
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
