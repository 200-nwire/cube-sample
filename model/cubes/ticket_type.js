cube(`ticket_type`, {
  sql_table: `public."TicketType"`,
  
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
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    defaultteamid: {
      sql: `${CUBE}."defaultTeamId"`,
      type: `string`
    },
    
    workflowid: {
      sql: `${CUBE}."workflowId"`,
      type: `string`
    },
    
    color: {
      sql: `color`,
      type: `string`
    },
    
    icon: {
      sql: `icon`,
      type: `string`
    },
    
    description: {
      sql: `description`,
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
