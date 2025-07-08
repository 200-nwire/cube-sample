cube(`ticket`, {
  sql_table: `public."Ticket"`,
  
  joins: {
    ticket_status: {
      sql: `${CUBE.statusid} = ${ticket_status.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    slaBreached: {
      sql: `${CUBE}."slaBreached"`,
      type: `boolean`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    sourceData: {
      sql: `${CUBE}."sourceData"`,
      type: `string`
    },
    
    ticketNumber: {
      sql: `${CUBE}."ticketNumber"`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
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
    
    subCategoryId: {
      sql: `${CUBE}."subCategoryId"`,
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
    
    holdReason: {
      sql: `${CUBE}."holdReason"`,
      type: `string`
    },
    
    createdAt: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    updatedAt: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`
    }
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
    },

    statusCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE.statusid} = ${ticket_status.id}` }
      ]    
    },

    categoryCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE.categoryid} = ${CUBE.categoryid}` }
      ]
    },

    subCategoryCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE.subcategoryid} = ${CUBE.subcategoryid}` }
      ]
    },
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
