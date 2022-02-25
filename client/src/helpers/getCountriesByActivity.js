export const getCountriesByActivity = (allContries = [], activity = '') => {
  const countriesWithActivities = allContries.filter(
    (country) => country.activities.length > 0
  );

  let countries = [];

  for (const country of countriesWithActivities) {
    for (const activities of country.activities) {
      if (activity.length > 0) {
        if (activities.name === activity) {
          countries.push(country);
        }
      }
    }
  }

  return countries;
};
