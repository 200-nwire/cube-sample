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
    statusid: {
      sql: `statusid`,
      type: `string`
    },
    statusname: {
      sql: `ticketstatusname`,
      type: `string`
    },
    ticketid: {
      sql: `ticketid`,
      type: `string`
    },
        categoryid: {
      sql: `categoryid`,
      type: `string`
    },
    subcategoryid: {
      sql: `subcategoryid`,
      type: `string`
    },
    assignedtoid: {
      sql: `assignedtoid`,
      type: `string`
    },
    assignedtoteamid: {
      sql: `assignedtoTeamid`,
      type: `string`
    },
    customerid: {
      sql: `customerid`,
      type: `string`
    },
    companyid: {
      sql: `companyid`,
      type: `string`
    },
    slabreached: {
      sql: `slabreached`,
      type: `boolean`
    },
    holdreason: {
      sql: `holdreason`,
      type: `string`
    },
    createdat: {
      sql: `createdat`,
      type: `time`
    },
    categoryname: {
      sql: `categoryname`,
      type: `string`
    },
    subcategoryname: {
      sql: `subcategoryname`,
      type: `string`
    },
    ticketpriorityname: {
      sql: `ticketpriorityname`,
      type: `string`
    },
    ticketeamname: {
      sql: `ticketeamname`,
      type: `string`
    },
    companyname: {
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
        { sql: `${CUBE.statusid} = ${CUBE.statusid}` }
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
