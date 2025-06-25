cube(`calendar_exception`, {
  sql_table: `public."CalendarException"`,
  
  joins: {
    calendar: {
      sql: `${CUBE.calendarid} = ${calendar.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    calendarid: {
      sql: `${CUBE}."calendarId"`,
      type: `string`
    },
    
    note: {
      sql: `note`,
      type: `string`
    },
    
    date: {
      sql: `date`,
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
