cube(`ticket_counter`, {
  sql_table: `public."TicketCounter"`,
  
  joins: {
    
  },
  
  dimensions: {
    lastnumber: {
      sql: `${CUBE}."lastNumber"`,
      type: `number`
    },
    
    companyid: {
      sql: `${CUBE}."companyId"`,
      type: `string`
    },
    
    prefix: {
      sql: `prefix`,
      type: `string`
    },
    
    domains: {
      sql: `domains`,
      type: `string`
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
