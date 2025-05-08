cube(`ticket`, {
  sql_table: `public."Ticket"`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    ticketId: {
      sql: `${CUBE}."ticketId"`,
      type: `number`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    statusId: {
      sql: `${CUBE}."statusId"`,
      type: `string`
    },
    
    typeId: {
      sql: `${CUBE}."typeId"`,
      type: `string`
    },
    
    categoryId: {
      sql: `${CUBE}."categoryId"`,
      type: `string`
    },
    
    priorityId: {
      sql: `${CUBE}."priorityId"`,
      type: `string`
    },
    
    assignedToId: {
      sql: `${CUBE}."assignedToId"`,
      type: `string`
    },
    
    assignedToTeamId: {
      sql: `${CUBE}."assignedToTeamId"`,
      type: `string`
    },
    
    customerId: {
      sql: `${CUBE}."customerId"`,
      type: `string`
    },
    
    companyId: {
      sql: `${CUBE}."companyId"`,
      type: `string`
    },
    
    slaId: {
      sql: `${CUBE}."slaId"`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },

    slaBreached: {
      sql: `${CUBE}."slaBreached"`,
      type: `boolean`
    },
    
    createdAt: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    updatedAt: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`
    },
    
  },
  
  measures: {
    count: {
      type: `count`
    },

    slaBreachedCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE}."slaBreached" = true` }
      ]
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
