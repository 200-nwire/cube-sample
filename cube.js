
module.exports = {
  queryRewrite: (query, { securityContext }) => {
    const cubeNames = [
      ...(query.dimensions || []),
      ...(query.measures || []),
    ].map((e) => e.split(".")[0]);
// @ts-ignore
    console.log("CUBES utilisés :", cubeNames);
    // @ts-ignore
    console.log("SECURITY CONTEXT :", securityContext);

    if (securityContext.companyIds) {
      cubeNames.forEach(cube => {
        query.filters.push({
          member: `${cube}.companyId`,
          operator: 'equals',
          values: securityContext.companyIds,
        });
      });
    }

const excludedCompanyIds = ["bcn00kc2q66j", "h1wgedy43j4e"];


    cubeNames.forEach(cube => {
      query.filters.push({
        member: `${cube}.companyId`,
        operator: 'notEquals',
        values: excludedCompanyIds,
      });
    });
// @ts-ignore
    console.log("FILTRES FINAUX :", JSON.stringify(query.filters, null, 2));

    return query;
  },
};
