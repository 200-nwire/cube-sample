view(`sla_statistics`, {
  cubes: [
    {
      join_path: `ticket_sla`,
      includes: [
        `breached`,
        `resolved_at`,
        `average_total_time`,
        `min_total_time`,
        `percentile_25`,
        `percentile_50`,
        `percentile_75`,
        `max_total_time`
      ]
    },
    {
      join_path: `ticket_sla.sla_goals`,
      prefix: true,
      includes: [
        `goalType`
      ]
    }
  ]
});
