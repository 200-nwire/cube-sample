cube(`file`, {
  sql_table: `public."File"`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    size: {
      sql: `size`,
      type: `number`
    },
    
    filename: {
      sql: `${CUBE}."fileName"`,
      type: `string`
    },
    
    s3key: {
      sql: `${CUBE}."s3Key"`,
      type: `string`
    },
    
    mimetype: {
      sql: `mimetype`,
      type: `string`
    },
    
    createdby: {
      sql: `${CUBE}."createdBy"`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    relationid: {
      sql: `${CUBE}."relationId"`,
      type: `string`
    },
    
    relationtype: {
      sql: `${CUBE}."relationType"`,
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
