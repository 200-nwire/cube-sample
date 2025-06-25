cube(`comment`, {
  sql_table: `public."Comment"`,
  
  joins: {
    ticket: {
      sql: `${CUBE.ticketid} = ${ticket.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    isprivate: {
      sql: `${CUBE}."isPrivate"`,
      type: `boolean`
    },
    
    ticketid: {
      sql: `${CUBE}."ticketId"`,
      type: `string`
    },
    
    content: {
      sql: `content`,
      type: `string`
    },
    
    createdbyid: {
      sql: `${CUBE}."createdById"`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`
    },
    
    deletedat: {
      sql: `${CUBE}."deletedAt"`,
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
