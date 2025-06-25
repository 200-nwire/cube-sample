cube(`sla`, {
  sql_table: `public."SLA"`,
  
  joins: {
    ticket: {
      sql: `${CUBE}.id = ${ticket}."slaId"`,
      relationship: `one_to_many`
    },
    
    sla_goals: {
      sql: `${CUBE}.id = ${sla_goals}."slaId"`,
      relationship: `one_to_many`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    active: {
      sql: `active`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    companyids: {
      sql: `${CUBE}."companyIds"`,
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
