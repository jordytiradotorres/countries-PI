import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addActivity } from '../actions/activities';
import { removeError, setError } from '../actions/ui';

const Activity = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state.activities);
  const { msgError } = useSelector((state) => state.ui);

  console.log(activities);

  const [selectValue, setSelectValue] = useState({
    values: [],
  });

  const [formValues, setFormValues] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
  });

  const { name, difficulty, duration, season } = formValues;

  console.log(formValues);

  const handleChangeSelect = (e) => {
    // creo una nueva instancia de Array a partir de un objeto iterable.
    let value = Array.from(e.target.selectedOptions, (option) => option.value);

    setSelectValue({ values: value });
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendActivity = (e) => {
    e.preventDefault();

    if (isFormValue()) {
      dispatch(
        addActivity({
          name,
          difficulty,
          duration,
          season,
          countryId: selectValue.values,
        })
      );
      navigate('/countries');
    }
  };

  const isFormValue = () => {
    let nameWhitinCharactersSpecials = /[^a-zA-Z0-9 ]+$/gm;
    if (name.trim().length < 3) {
      dispatch(setError('Error: has to be at least 3 characters'));
      return false;
    } else if (nameWhitinCharactersSpecials.test(name)) {
      dispatch(
        setError('Error: the activity name must not have special characters')
      );
      return false;
    } else if (difficulty.length === 0 || difficulty < 0 || difficulty > 5) {
      dispatch(setError('Error: the range is between one and five'));
      return false;
    } else if (duration.length === 0 || duration <= 0) {
      dispatch(setError('Error: duration must be greater than zero'));
      return false;
    } else if (season.length === 0) {
      dispatch(setError('Error: select a season of the year'));
      return false;
    } else if (selectValue.values.length === 0) {
      dispatch(
        setError('Error: select at least one country for said activity')
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <div className="activity">
      <h2 className="activity__title">Add New Activity</h2>

      {msgError && <p className="error">{msgError}</p>}

      <form className="activity__form">
        <div>
          <label>Activity name: </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Write the activity name"
          />
        </div>
        <div>
          <label>Difficulty: </label>
          <input
            type="number"
            name="difficulty"
            onChange={handleChange}
            value={difficulty}
            min={1}
            max={5}
            placeholder="Between 1 and 5"
          />
        </div>
        <div>
          <label>Duration (hs): </label>
          <input
            type="number"
            min={1}
            name="duration"
            onChange={handleChange}
            value={duration}
            placeholder="Duration in hours of the activity"
          />
        </div>
        <div>
          <label>Season: </label>
          <select id="season" name="season" onChange={handleChange}>
            <option value="-">Select a station</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
          </select>
        </div>

        <div>
          <p>Select countries related to this activity:</p>
          <select
            multiple
            id="countries"
            required=""
            name="countryId"
            size="10"
            onChange={handleChangeSelect}
          >
            <option name="AFG" value="AFG">
              Afghanistan
            </option>
            <option name="ALB" value="ALB">
              Albania
            </option>
            <option name="DZA" value="DZA">
              Algeria
            </option>
            <option name="ASM" value="ASM">
              American Samoa
            </option>
            <option name="AND" value="AND">
              Andorra
            </option>
            <option name="AGO" value="AGO">
              Angola
            </option>
            <option name="AIA" value="AIA">
              Anguilla
            </option>
            <option name="ATA" value="ATA">
              Antarctica
            </option>
            <option name="ATG" value="ATG">
              Antigua and Barbuda
            </option>
            <option name="ARG" value="ARG">
              Argentina
            </option>
            <option name="ARM" value="ARM">
              Armenia
            </option>
            <option name="ABW" value="ABW">
              Aruba
            </option>
            <option name="AUS" value="AUS">
              Australia
            </option>
            <option name="AUT" value="AUT">
              Austria
            </option>
            <option name="AZE" value="AZE">
              Azerbaijan
            </option>
            <option name="BHS" value="BHS">
              Bahamas
            </option>
            <option name="BHR" value="BHR">
              Bahrain
            </option>
            <option name="BGD" value="BGD">
              Bangladesh
            </option>
            <option name="BRB" value="BRB">
              Barbados
            </option>
            <option name="BLR" value="BLR">
              Belarus
            </option>
            <option name="BEL" value="BEL">
              Belgium
            </option>
            <option name="BLZ" value="BLZ">
              Belize
            </option>
            <option name="BEN" value="BEN">
              Benin
            </option>
            <option name="BMU" value="BMU">
              Bermuda
            </option>
            <option name="BTN" value="BTN">
              Bhutan
            </option>
            <option name="BOL" value="BOL">
              Bolivia
            </option>
            <option name="BIH" value="BIH">
              Bosnia and Herzegovina
            </option>
            <option name="BWA" value="BWA">
              Botswana
            </option>
            <option name="BVT" value="BVT">
              Bouvet Island
            </option>
            <option name="BRA" value="BRA">
              Brazil
            </option>
            <option name="IOT" value="IOT">
              British Indian Ocean Territory
            </option>
            <option name="VGB" value="VGB">
              British Virgin Islands
            </option>
            <option name="BRN" value="BRN">
              Brunei
            </option>
            <option name="BGR" value="BGR">
              Bulgaria
            </option>
            <option name="BFA" value="BFA">
              Burkina Faso
            </option>
            <option name="BDI" value="BDI">
              Burundi
            </option>
            <option name="KHM" value="KHM">
              Cambodia
            </option>
            <option name="CMR" value="CMR">
              Cameroon
            </option>
            <option name="CAN" value="CAN">
              Canada
            </option>
            <option name="CPV" value="CPV">
              Cape Verde
            </option>
            <option name="BES" value="BES">
              Caribbean Netherlands
            </option>
            <option name="CYM" value="CYM">
              Cayman Islands
            </option>
            <option name="CAF" value="CAF">
              Central African Republic
            </option>
            <option name="TCD" value="TCD">
              Chad
            </option>
            <option name="CHL" value="CHL">
              Chile
            </option>
            <option name="CHN" value="CHN">
              China
            </option>
            <option name="CXR" value="CXR">
              Christmas Island
            </option>
            <option name="CCK" value="CCK">
              Cocos (Keeling) Islands
            </option>
            <option name="COL" value="COL">
              Colombia
            </option>
            <option name="COM" value="COM">
              Comoros
            </option>
            <option name="COK" value="COK">
              Cook Islands
            </option>
            <option name="CRI" value="CRI">
              Costa Rica
            </option>
            <option name="HRV" value="HRV">
              Croatia
            </option>
            <option name="CUB" value="CUB">
              Cuba
            </option>
            <option name="CUW" value="CUW">
              Curaçao
            </option>
            <option name="CYP" value="CYP">
              Cyprus
            </option>
            <option name="CZE" value="CZE">
              Czechia
            </option>
            <option name="COD" value="COD">
              DR Congo
            </option>
            <option name="DNK" value="DNK">
              Denmark
            </option>
            <option name="DJI" value="DJI">
              Djibouti
            </option>
            <option name="DMA" value="DMA">
              Dominica
            </option>
            <option name="DOM" value="DOM">
              Dominican Republic
            </option>
            <option name="ECU" value="ECU">
              Ecuador
            </option>
            <option name="EGY" value="EGY">
              Egypt
            </option>
            <option name="SLV" value="SLV">
              El Salvador
            </option>
            <option name="GNQ" value="GNQ">
              Equatorial Guinea
            </option>
            <option name="ERI" value="ERI">
              Eritrea
            </option>
            <option name="EST" value="EST">
              Estonia
            </option>
            <option name="SWZ" value="SWZ">
              Eswatini
            </option>
            <option name="ETH" value="ETH">
              Ethiopia
            </option>
            <option name="FLK" value="FLK">
              Falkland Islands
            </option>
            <option name="FRO" value="FRO">
              Faroe Islands
            </option>
            <option name="FJI" value="FJI">
              Fiji
            </option>
            <option name="FIN" value="FIN">
              Finland
            </option>
            <option name="FRA" value="FRA">
              France
            </option>
            <option name="GUF" value="GUF">
              French Guiana
            </option>
            <option name="PYF" value="PYF">
              French Polynesia
            </option>
            <option name="ATF" value="ATF">
              French Southern and Antarctic Lands
            </option>
            <option name="GAB" value="GAB">
              Gabon
            </option>
            <option name="GMB" value="GMB">
              Gambia
            </option>
            <option name="GEO" value="GEO">
              Georgia
            </option>
            <option name="DEU" value="DEU">
              Germany
            </option>
            <option name="GHA" value="GHA">
              Ghana
            </option>
            <option name="GIB" value="GIB">
              Gibraltar
            </option>
            <option name="GRC" value="GRC">
              Greece
            </option>
            <option name="GRL" value="GRL">
              Greenland
            </option>
            <option name="GRD" value="GRD">
              Grenada
            </option>
            <option name="GLP" value="GLP">
              Guadeloupe
            </option>
            <option name="GUM" value="GUM">
              Guam
            </option>
            <option name="GTM" value="GTM">
              Guatemala
            </option>
            <option name="GGY" value="GGY">
              Guernsey
            </option>
            <option name="GIN" value="GIN">
              Guinea
            </option>
            <option name="GNB" value="GNB">
              Guinea-Bissau
            </option>
            <option name="GUY" value="GUY">
              Guyana
            </option>
            <option name="HTI" value="HTI">
              Haiti
            </option>
            <option name="HMD" value="HMD">
              Heard Island and McDonald Islands
            </option>
            <option name="HND" value="HND">
              Honduras
            </option>
            <option name="HKG" value="HKG">
              Hong Kong
            </option>
            <option name="HUN" value="HUN">
              Hungary
            </option>
            <option name="ISL" value="ISL">
              Iceland
            </option>
            <option name="IND" value="IND">
              India
            </option>
            <option name="IDN" value="IDN">
              Indonesia
            </option>
            <option name="IRN" value="IRN">
              Iran
            </option>
            <option name="IRQ" value="IRQ">
              Iraq
            </option>
            <option name="IRL" value="IRL">
              Ireland
            </option>
            <option name="IMN" value="IMN">
              Isle of Man
            </option>
            <option name="ISR" value="ISR">
              Israel
            </option>
            <option name="ITA" value="ITA">
              Italy
            </option>
            <option name="CIV" value="CIV">
              Ivory Coast
            </option>
            <option name="JAM" value="JAM">
              Jamaica
            </option>
            <option name="JPN" value="JPN">
              Japan
            </option>
            <option name="JEY" value="JEY">
              Jersey
            </option>
            <option name="JOR" value="JOR">
              Jordan
            </option>
            <option name="KAZ" value="KAZ">
              Kazakhstan
            </option>
            <option name="KEN" value="KEN">
              Kenya
            </option>
            <option name="KIR" value="KIR">
              Kiribati
            </option>
            <option name="UNK" value="UNK">
              Kosovo
            </option>
            <option name="KWT" value="KWT">
              Kuwait
            </option>
            <option name="KGZ" value="KGZ">
              Kyrgyzstan
            </option>
            <option name="LAO" value="LAO">
              Laos
            </option>
            <option name="LVA" value="LVA">
              Latvia
            </option>
            <option name="LBN" value="LBN">
              Lebanon
            </option>
            <option name="LSO" value="LSO">
              Lesotho
            </option>
            <option name="LBR" value="LBR">
              Liberia
            </option>
            <option name="LBY" value="LBY">
              Libya
            </option>
            <option name="LIE" value="LIE">
              Liechtenstein
            </option>
            <option name="LTU" value="LTU">
              Lithuania
            </option>
            <option name="LUX" value="LUX">
              Luxembourg
            </option>
            <option name="MAC" value="MAC">
              Macau
            </option>
            <option name="MDG" value="MDG">
              Madagascar
            </option>
            <option name="MWI" value="MWI">
              Malawi
            </option>
            <option name="MYS" value="MYS">
              Malaysia
            </option>
            <option name="MDV" value="MDV">
              Maldives
            </option>
            <option name="MLI" value="MLI">
              Mali
            </option>
            <option name="MLT" value="MLT">
              Malta
            </option>
            <option name="MHL" value="MHL">
              Marshall Islands
            </option>
            <option name="MTQ" value="MTQ">
              Martinique
            </option>
            <option name="MRT" value="MRT">
              Mauritania
            </option>
            <option name="MUS" value="MUS">
              Mauritius
            </option>
            <option name="MYT" value="MYT">
              Mayotte
            </option>
            <option name="MEX" value="MEX">
              Mexico
            </option>
            <option name="FSM" value="FSM">
              Micronesia
            </option>
            <option name="MDA" value="MDA">
              Moldova
            </option>
            <option name="MCO" value="MCO">
              Monaco
            </option>
            <option name="MNG" value="MNG">
              Mongolia
            </option>
            <option name="MNE" value="MNE">
              Montenegro
            </option>
            <option name="MSR" value="MSR">
              Montserrat
            </option>
            <option name="MAR" value="MAR">
              Morocco
            </option>
            <option name="MOZ" value="MOZ">
              Mozambique
            </option>
            <option name="MMR" value="MMR">
              Myanmar
            </option>
            <option name="NAM" value="NAM">
              Namibia
            </option>
            <option name="NRU" value="NRU">
              Nauru
            </option>
            <option name="NPL" value="NPL">
              Nepal
            </option>
            <option name="NLD" value="NLD">
              Netherlands
            </option>
            <option name="NCL" value="NCL">
              New Caledonia
            </option>
            <option name="NZL" value="NZL">
              New Zealand
            </option>
            <option name="NIC" value="NIC">
              Nicaragua
            </option>
            <option name="NER" value="NER">
              Niger
            </option>
            <option name="NGA" value="NGA">
              Nigeria
            </option>
            <option name="NIU" value="NIU">
              Niue
            </option>
            <option name="NFK" value="NFK">
              Norfolk Island
            </option>
            <option name="PRK" value="PRK">
              North Korea
            </option>
            <option name="MKD" value="MKD">
              North Macedonia
            </option>
            <option name="MNP" value="MNP">
              Northern Mariana Islands
            </option>
            <option name="NOR" value="NOR">
              Norway
            </option>
            <option name="OMN" value="OMN">
              Oman
            </option>
            <option name="PAK" value="PAK">
              Pakistan
            </option>
            <option name="PLW" value="PLW">
              Palau
            </option>
            <option name="PSE" value="PSE">
              Palestine
            </option>
            <option name="PAN" value="PAN">
              Panama
            </option>
            <option name="PNG" value="PNG">
              Papua New Guinea
            </option>
            <option name="PRY" value="PRY">
              Paraguay
            </option>
            <option name="PER" value="PER">
              Peru
            </option>
            <option name="PHL" value="PHL">
              Philippines
            </option>
            <option name="PCN" value="PCN">
              Pitcairn Islands
            </option>
            <option name="POL" value="POL">
              Poland
            </option>
            <option name="PRT" value="PRT">
              Portugal
            </option>
            <option name="PRI" value="PRI">
              Puerto Rico
            </option>
            <option name="QAT" value="QAT">
              Qatar
            </option>
            <option name="COG" value="COG">
              Republic of the Congo
            </option>
            <option name="ROU" value="ROU">
              Romania
            </option>
            <option name="RUS" value="RUS">
              Russia
            </option>
            <option name="RWA" value="RWA">
              Rwanda
            </option>
            <option name="REU" value="REU">
              Réunion
            </option>
            <option name="BLM" value="BLM">
              Saint Barthélemy
            </option>
            <option name="SHN" value="SHN">
              Saint Helena, Ascension and Tristan da Cunha
            </option>
            <option name="KNA" value="KNA">
              Saint Kitts and Nevis
            </option>
            <option name="LCA" value="LCA">
              Saint Lucia
            </option>
            <option name="MAF" value="MAF">
              Saint Martin
            </option>
            <option name="SPM" value="SPM">
              Saint Pierre and Miquelon
            </option>
            <option name="VCT" value="VCT">
              Saint Vincent and the Grenadines
            </option>
            <option name="WSM" value="WSM">
              Samoa
            </option>
            <option name="SMR" value="SMR">
              San Marino
            </option>
            <option name="SAU" value="SAU">
              Saudi Arabia
            </option>
            <option name="SEN" value="SEN">
              Senegal
            </option>
            <option name="SRB" value="SRB">
              Serbia
            </option>
            <option name="SYC" value="SYC">
              Seychelles
            </option>
            <option name="SLE" value="SLE">
              Sierra Leone
            </option>
            <option name="SGP" value="SGP">
              Singapore
            </option>
            <option name="SXM" value="SXM">
              Sint Maarten
            </option>
            <option name="SVK" value="SVK">
              Slovakia
            </option>
            <option name="SVN" value="SVN">
              Slovenia
            </option>
            <option name="SLB" value="SLB">
              Solomon Islands
            </option>
            <option name="SOM" value="SOM">
              Somalia
            </option>
            <option name="ZAF" value="ZAF">
              South Africa
            </option>
            <option name="SGS" value="SGS">
              South Georgia
            </option>
            <option name="KOR" value="KOR">
              South Korea
            </option>
            <option name="SSD" value="SSD">
              South Sudan
            </option>
            <option name="ESP" value="ESP">
              Spain
            </option>
            <option name="LKA" value="LKA">
              Sri Lanka
            </option>
            <option name="SDN" value="SDN">
              Sudan
            </option>
            <option name="SUR" value="SUR">
              Suriname
            </option>
            <option name="SJM" value="SJM">
              Svalbard and Jan Mayen
            </option>
            <option name="SWE" value="SWE">
              Sweden
            </option>
            <option name="CHE" value="CHE">
              Switzerland
            </option>
            <option name="SYR" value="SYR">
              Syria
            </option>
            <option name="STP" value="STP">
              São Tomé and Príncipe
            </option>
            <option name="TWN" value="TWN">
              Taiwan
            </option>
            <option name="TJK" value="TJK">
              Tajikistan
            </option>
            <option name="TZA" value="TZA">
              Tanzania
            </option>
            <option name="THA" value="THA">
              Thailand
            </option>
            <option name="TLS" value="TLS">
              Timor-Leste
            </option>
            <option name="TGO" value="TGO">
              Togo
            </option>
            <option name="TKL" value="TKL">
              Tokelau
            </option>
            <option name="TON" value="TON">
              Tonga
            </option>
            <option name="TTO" value="TTO">
              Trinidad and Tobago
            </option>
            <option name="TUN" value="TUN">
              Tunisia
            </option>
            <option name="TUR" value="TUR">
              Turkey
            </option>
            <option name="TKM" value="TKM">
              Turkmenistan
            </option>
            <option name="TCA" value="TCA">
              Turks and Caicos Islands
            </option>
            <option name="TUV" value="TUV">
              Tuvalu
            </option>
            <option name="UGA" value="UGA">
              Uganda
            </option>
            <option name="UKR" value="UKR">
              Ukraine
            </option>
            <option name="ARE" value="ARE">
              United Arab Emirates
            </option>
            <option name="GBR" value="GBR">
              United Kingdom
            </option>
            <option name="USA" value="USA">
              United States
            </option>
            <option name="UMI" value="UMI">
              United States Minor Outlying Islands
            </option>
            <option name="VIR" value="VIR">
              United States Virgin Islands
            </option>
            <option name="URY" value="URY">
              Uruguay
            </option>
            <option name="UZB" value="UZB">
              Uzbekistan
            </option>
            <option name="VUT" value="VUT">
              Vanuatu
            </option>
            <option name="VAT" value="VAT">
              Vatican City
            </option>
            <option name="VEN" value="VEN">
              Venezuela
            </option>
            <option name="VNM" value="VNM">
              Vietnam
            </option>
            <option name="WLF" value="WLF">
              Wallis and Futuna
            </option>
            <option name="ESH" value="ESH">
              Western Sahara
            </option>
            <option name="YEM" value="YEM">
              Yemen
            </option>
            <option name="ZMB" value="ZMB">
              Zambia
            </option>
            <option name="ZWE" value="ZWE">
              Zimbabwe
            </option>
            <option name="ALA" value="ALA">
              Åland Islands
            </option>
          </select>
        </div>

        <button type="submit" onClick={handleSendActivity}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Activity;
