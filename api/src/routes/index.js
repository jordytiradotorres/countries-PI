const { Router } = require('express');
// Importar todos los routers;

const Sequelize = require('sequelize');

const axios = require('axios');

let id = 1;

//Traemos las tablas de db
const { Country, Activity, country_activity } = require('../db.js');

// const Countries = require('./countries.js');

const router = Router();

// Configurar los routers
// router.use('/countries', Countries);

// Busco la data de la API
const countriesApi = async () => {
  const countriesUrl = await axios.get('https://restcountries.com/v3/all');
  const countries = await countriesUrl.data.map((country) => {
    return {
      name: country.name.common,
      id: country.cca3,
      flags: country.flags[0],
      continent: country.continents[0],
      capital:
        country.capital != null ? country.capital : 'No se encontro capital',
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
  });
  return countries;
};

router.get('/countries', async (req, res, next) => {
  // Se traen todos los paises desde la API a la DB para utilizarlos desde ahi
  // Se almacenan solo los datos necesarios para la ruta principal
  // Se obtiene un listado de los paises

  // Guardo en una constante lo que obtengo de la api
  const countries = await countriesApi();

  // Guardo el name pasado por query
  const queryName = req.query.name;
  const queryContinent = req.query.continent;
  const queryActivity = req.query.filter;
  const { param, order } = req.query;

  function FilterCountries(filter) {
    let countries = [];
    return Activity.findOne({
      where: { name: filter },
      include: [
        {
          model: Country,
        },
      ],
    }).then((response) => {
      response.countries.forEach((co) =>
        countries.push({
          name: co.name,
          flags: co.flags,
          continent: co.continent,
          id: co.id,
          population: co.population,
        })
      );
      return countries;
    });
  }

  function GetCountriesOrdered(order, param) {
    let countries = [];
    return Country.findAll({
      order: [[param, order]],
    }).then((response) => {
      response.forEach((co) =>
        countries.push({
          name: co.name,
          flags: co.flags,
          continent: co.continent,
          id: co.id,
          population: co.population,
        })
      );
      return countries;
    });
  }

  try {
    // Si la db esta llena no se hace nada
    let full = await Country.findAll({
      include: {
        model: Activity,
      },
    });
    // Si no hay datos, se crean
    if (!full.length) {
      // bulkCreate busca los campos en el objeto y los pasa a la tabla
      // los datos del objeto para los que no hay campos en la tabla, no los guarda
      await Country.bulkCreate(countries);
    }
  } catch (error) {
    console.log(error);
  }

  if (queryName) {
    let countryName = await Country.findAll({
      where: {
        name: {
          // Operador que busca coincidencias y no es case sensitive
          //Si solo pongo queryName me toma la busqueda exacta
          [Sequelize.Op.iLike]: `%${queryName}%`,
        },
      },
    });
    countryName.length
      ? res.status(200).send(countryName)
      : res.status(500).send('the country was not found');
  } else if (queryContinent) {
    let countryContinent = await Country.findAll({
      where: {
        continent: {
          // Operador que busca coincidencias y no es case sensitive
          //Si solo pongo queryName me toma la busqueda exacta
          [Sequelize.Op.iLike]: `%${queryContinent}%`,
        },
      },
    });
    countryContinent.length
      ? res.status(200).send(countryContinent)
      : res.status(500).send('no hay paises en ese continente');
  } else if (queryActivity) {
    FilterCountries(queryActivity)
      .then((countries) => res.json(countries))
      .catch((err) => next(err));
  } else if (param && order) {
    GetCountriesOrdered(order, param)
      .then((countries) => res.json(countries))
      .catch((err) => next(err));
  } else {
    let full = await Country.findAll({
      include: {
        model: Activity,
      },
    });
    res.status(200).send(full);
  }
});

router.get('/countries/:id', async (req, res) => {
  // Obtener el detalle de un país en particular
  // Debe traer solo los datos pedidos en la ruta de detalle de país
  // Incluir los datos de las actividades turísticas correspondientes

  const countryId = req.params.id;

  let countryById = await Country.findByPk(countryId, {
    include: {
      model: Activity,
    },
  });

  res.status(200).send(countryById);
});

// activities
function GetActivities() {
  let activities = [];
  return Activity.findAll().then((response) => {
    response.forEach((ac) => activities.push(ac.name));
    return activities;
  });
}

router.get('/activity', (req, res, next) => {
  GetActivities()
    .then((activities) => res.json(activities))
    .catch((err) => next(err));
});

function AddNewActivity(name, difficulty, duration, season, countryId) {
  return Activity.create({
    id: id++,
    name,
    difficulty,
    duration,
    season,
  }).then((result) => result.addCountries(countryId));
}

router.post('/activity', (req, res, next) => {
  const { name, difficulty, duration, season, countryId } = req.body;
  AddNewActivity(name, difficulty, duration, season, countryId)
    .then(() => res.json({ message: 'Activity created' }))
    .catch((err) => next(err));
});

module.exports = router;
