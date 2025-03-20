cube(`prisma_migrations`, {
  sql_table: `public._prisma_migrations`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    applied_steps_count: {
      sql: `applied_steps_count`,
      type: `number`
    },
    
    checksum: {
      sql: `checksum`,
      type: `string`
    },
    
    migration_name: {
      sql: `migration_name`,
      type: `string`
    },
    
    logs: {
      sql: `logs`,
      type: `string`
    },
    
    finished_at: {
      sql: `finished_at`,
      type: `time`
    },
    
    rolled_back_at: {
      sql: `rolled_back_at`,
      type: `time`
    },
    
    started_at: {
      sql: `started_at`,
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
