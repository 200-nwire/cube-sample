cube(`ticket_metricks`, {
  sql: `SELECT    ticket.id as "ticketid", 
          ticket."createdAt" as "createdat",
          ticket."categoryId" as "categoryid",
          ticket."subCategoryId" as "subcategoryid",
          ticket."statusId" as "statusid",
          ticket."assignedToId" as"assignedtoid",
          ticket."assignedToTeamId" as "assignedtoteamid",
          ticket."companyId" as "companyid",
          ticket."slaBreached" as "slabreached",
          ticket."holdReason" as "holdreason",
          ticket."customerId" as "customerid",
          tc.name as "categoryname",
          tsc.name as "subcategoryname",
          tp."name" as "ticketpriorityname",
          ts."name" as "ticketstatusname",
          team."name" as "ticketeamname",
          org."name" as "companyname",
          ticket."source" as "source"
        FROM public."Ticket" ticket 
        left join "TicketCategory" tc on tc.id = ticket."categoryId"
        left join "TicketCategory" tsc on tsc.id = ticket."subCategoryId"
        left join "TicketPriority" tp on tp.id = ticket."priorityId"
        left join "TicketStatus" ts on ts.id = ticket."statusId"
        left join "Team" team on team.id = ticket."assignedToTeamId"
        left join "Organization" org on org.id  = ticket."companyId"
        `,

  dimensions: {
    statusId: {
      sql: `statusid`,
      type: `string`
    },
    statusName: {
      sql: `ticketstatusname`,
      type: `string`
    },
    ticketId: {
      sql: `ticketid`,
      type: `string`
    },
    categoryId: {
      sql: `categoryid`,
      type: `string`
    },
    subCategoryId: {
      sql: `subcategoryid`,
      type: `string`
    },
    assignedToId: {
      sql: `assignedtoid`,
      type: `string`
    },
    assignedToTeamId: {
      sql: `assignedtoTeamid`,
      type: `string`
    },
    customerId: {
      sql: `customerid`,
      type: `string`
    },
    companyId: {
      sql: `companyid`,
      type: `string`
    },
    slaBreached: {
      sql: `slabreached`,
      type: `boolean`
    },
    holdReason: {
      sql: `holdreason`,
      type: `string`
    },
    createdAt: {
      sql: `createdat`,
      type: `time`
    },
    categoryName: {
      sql: `categoryname`,
      type: `string`
    },
    subCategoryName: {
      sql: `subcategoryname`,
      type: `string`
    },
    ticketPriorityName: {
      sql: `ticketpriorityname`,
      type: `string`
    },
    tickeTeamName: {
      sql: `ticketeamname`,
      type: `string`
    },
    companyName: {
      sql: `companyname`,
      type: `string`
    },
    source: {
      sql: `source`,
      type: `string`
    }
  },

  measures: {
    count: {
      type: `count`
    },

    slaBreachedCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE}."slaBreached" = true` }
      ]
    },

    statusCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE.statusId} = ${CUBE.statusId}` }
      ]    
    },

    categoryCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE.categoryid} = ${CUBE.categoryid}` }
      ]
    },

    subCategoryCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE.subcategoryid} = ${CUBE.subcategoryid}` }
      ]
    },

    teamCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE.assignedtoteamid} = ${CUBE.assignedtoteamid}` }
      ]
    },

    contactCount: {
      type: `count`,
      filters: [
        { sql: `${CUBE.assignedtoid} = ${CUBE.assignedtoid}` }
      ]
    },
  },
});
