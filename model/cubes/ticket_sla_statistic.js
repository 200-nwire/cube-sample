cube(`ticket_sla_statistic`, {
  sql: `SELECT 
          goals."goalType" as "goaltype", 
          sla."totalTime" as "totaltime",
          t."createdAt" as "createdat",
          t."companyId" as "companyid"
        FROM public."TicketSLA" sla 
        LEFT JOIN public."SLAGoals" goals 
        ON goals."id" = sla."slaGoalId"
        LEFT JOIN public."Ticket" t 
        ON sla."ticketId" = t.id
        `,

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
    },
    createdAt: {
      sql: `createdAt`,
      type: `time`
    },
    companyId: {
      sql: `companyId`,
      type: `string`
    },
    ticketId: {
      sql: `ticketId`,
      type: `string`,
      primaryKey: true
    }
  }
});
