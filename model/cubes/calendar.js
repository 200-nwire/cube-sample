cube(`calendar`, {
  sql_table: `public."Calendar"`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    rrule: {
      sql: `rrule`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    endtime: {
      sql: `${CUBE}."endTime"`,
      type: `string`
    },
    
    starttime: {
      sql: `${CUBE}."startTime"`,
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
