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
    
    ticketid: {
      sql: `${CUBE}."ticketId"`,
      type: `number`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    statusid: {
      sql: `${CUBE}."statusId"`,
      type: `string`
    },
    
    typeid: {
      sql: `${CUBE}."typeId"`,
      type: `string`
    },
    
    categoryid: {
      sql: `${CUBE}."categoryId"`,
      type: `string`
    },
    
    priorityid: {
      sql: `${CUBE}."priorityId"`,
      type: `string`
    },
    
    assignedtoid: {
      sql: `${CUBE}."assignedToId"`,
      type: `string`
    },
    
    assignedtoteamid: {
      sql: `${CUBE}."assignedToTeamId"`,
      type: `string`
    },
    
    customerid: {
      sql: `${CUBE}."customerId"`,
      type: `string`
    },
    
    companyid: {
      sql: `${CUBE}."companyId"`,
      type: `string`
    },
    
    slaid: {
      sql: `${CUBE}."slaId"`,
      type: `string`
    },
    
    title: {
      sql: `title`,
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
