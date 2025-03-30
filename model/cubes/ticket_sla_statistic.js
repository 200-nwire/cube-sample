cube(`ticket_sla_statistic`, {
  sql: `SELECT 
          goals.goalType, 
          sla.totalTime
        FROM TicketSLA sla 
        LEFT JOIN SLAGoals goals 
        ON goals.id = sla.slaGoalId`,

  measures: {
    average_total_time: {
      sql: `totalTime`,
      type: `avg`
    },
    min_total_time: {
      sql: `totalTime`,
      type: `min`
    },
    max_total_time: {
      sql: `totalTime`,
      type: `max`
    },
    percentile_25: {
      sql: `PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY totalTime)`,
      type: `number`
    },
    percentile_50: {
      sql: `PERCENTILE_CONT(0.50) WITHIN GROUP (ORDER BY totalTime)`,
      type: `number`
    },
    percentile_75: {
      sql: `PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY totalTime)`,
      type: `number`
    },
    count: {
      sql: `totalTime`,
      type: `count`
    }
  },

  dimensions: {
    goalType: {
      sql: `goalType`,
      type: `string`
    }
  }
});
