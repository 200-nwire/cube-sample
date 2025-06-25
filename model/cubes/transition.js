cube(`transition`, {
  sql_table: `public."Transition"`,
  
  joins: {
    workflow: {
      sql: `${CUBE.workflowid} = ${workflow.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    workflowid: {
      sql: `${CUBE}."workflowId"`,
      type: `string`
    },
    
    guard: {
      sql: `guard`,
      type: `string`
    },
    
    actions: {
      sql: `actions`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    fromstatusid: {
      sql: `${CUBE}."fromStatusId"`,
      type: `string`
    },
    
    tostatusid: {
      sql: `${CUBE}."toStatusId"`,
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
