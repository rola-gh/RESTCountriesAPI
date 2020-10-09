   //Global Var's
   const countriesList =  document.getElementById('countries');
    let countries; //will contain 'fetched data'

    // Event Listeners
   countriesList.addEventListener('change' ,event  => displayCountryInfo(event.target.value));
    // fetch("https://restcountries.eu/rest/v2/all")
    // .then(function(res) {
    //     // console.log(res);
    //     return res.json();
    // })
    // .then(function (data) {
    //     // console.log(data);
    //     initialize(data);
    // })
    // .catch(function (err) {
    //     console.log('Error: ', err);
    // });

    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json() )
        .then(data =>initialize(data))
        .catch(err => console.log('Error: ', err));

    function initialize(countriesData) {
        countries = countriesData;
        let options ='';
        // for (let i=0 ; i <countries.length;i++){
        //     // options +=`<!--<option value="${countries[i].alpha3Code}">${countries[i].name}</option>-->`
        //     options +=`<option value="${countries[i].alpha3Code}">${countries[i].name} (+${countries[i].callingCodes[0]})</option>`
        // }
        countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>` );
        // document.getElementById('countries').innerHTML = options;
        // document.querySelector('#countries').innerHTML = options;
        countriesList.innerHTML = options;
        displayCountryInfo('AFG');
    }
    function displayCountryInfo(countryByAlpha3Code) {
        const countryData  = countries.find(country=> country.alpha3Code ===countryByAlpha3Code);
        console.log(countryData);
        document.querySelector('#flag-container img').src = countryData.flag;
        document.querySelector('#flag-container img').alt = `flag of ${countryData.name}`;
        document.getElementById('capital').innerHTML = countryData.capital;
        document.getElementById('dialing-code').innerHTML = `+${countryData.callingCodes[0]}`;
        document.getElementById('population').innerHTML = countryData.population.toLocaleString('en-US');
        document.getElementById('currencies').innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name}(${c.code})`).join(', ');
        document.getElementById('region').innerHTML = countryData.region;
        document.getElementById('subregion').innerHTML = countryData.subregion;

    }
 