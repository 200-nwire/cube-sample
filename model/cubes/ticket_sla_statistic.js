cube(`ticket_sla_statistic`, {
  sql: `SELECT 
          goals."goalType" as "goaltype", 
          sla."totalTime" as "totaltime",
          t."createdAt" as "createdat",
          t."companyId" as "companyid",
          sla."breached" as "breached",
          goals."targetTime" as "targettime",
          t."assignedToId" as "assignedtoid"      
        FROM public."TicketSLA" sla 
        LEFT JOIN public."SLAGoals" goals 
        ON goals."id" = sla."slaGoalId"
        LEFT JOIN public."Ticket" t 
        ON sla."ticketId" = t.id
        `,

  measures: {
    average_total_time: {
      sql: `NULLIF(${CUBE}.totalTime, 0)`,
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
      sql: `PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY totalTime) FILTER (WHERE totalTime > 0)`,
      type: `number`
    },
    percentile_50: {
      sql: `PERCENTILE_CONT(0.50) WITHIN GROUP (ORDER BY totalTime) FILTER (WHERE totalTime > 0)`,
      type: `number`
    },
    percentile_75: {
      sql: `PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY totalTime) FILTER (WHERE totalTime > 0)`,
      type: `number`
    },
    percentBreached: {
      sql: `100.0 * ${countBreached} / NULLIF(${count}, 0)`,
      type: 'number',
      format: 'percent'
    },
    count: {
      sql: `totalTime`,
      type: `count`
    },
    countBreached: {
      sql: `CASE WHEN breached = true THEN 1 ELSE NULL END`,
      type: `count`
    },
  },

  dimensions: {
    goaltype: {
      sql: `goalType`,
      type: `string`
    },
    createdat: {
      sql: `createdAt`,
      type: `time`
    },
    companyid: {
      sql: `companyId`,
      type: `string`
    },
    breached: {
      sql: `breached`,
      type: `boolean`
    },
    targettime: {
      sql: `targetTime`,
      type: `string`
    },
    ticketid: {
      sql: `ticketId`,
      type: `string`,
      primaryKey: true
    },
    assignedtoid: {
      sql: `assignedToId`,
      type: `string`
    },
  }
});
