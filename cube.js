// Cube configuration options: https://cube.dev/docs/config

// NOTE: third-party dependencies and the use of require(...) are disabled for
// CubeCloud users by default.  Please contact support if you need them
// enabled for your account.  You are still allowed to require
// @cubejs-backend/*-driver packages.

module.exports = {
  queryRewrite: (query, { securityContext }) => {
    if (securityContext.companyIds) {
      const cubeNames = [
        ...(query.dimensions || []),
        ...(query.measures || []),
      ].map((e) => e.split(".")[0]);

      cubeNames.forEach(cube => {
        query.filters.push({
          member: `${cube}.companyId`,
          operator: 'in',
          values: securityContext.companyIds,
        });
      })
    }

    return query;   
  },
};

