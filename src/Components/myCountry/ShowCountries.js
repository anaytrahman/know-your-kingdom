import { useState } from 'react'
const ShowCountries = ({ showCountry, countries, filteredCountry }) => {
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    return (
        <>
            {
                showCountry === false &&
                <div className="show-c-details">
                    <div>
                        {
                            countries.length > 0 && filteredCountry.length > 0 &&

                            <h3 className="heading-wrapper">Country List</h3>
                        }

                        {filteredCountry.length === 0 &&
                            <div>
                                <h1>No country Record found!!!</h1>
                            </div>
                        }

                    </div>
                    {
                        countries && countries.length > 0 && (
                            filteredCountry.map((countryData, countryIndex) =>
                                <div className="country-details-wrapper" key={countryIndex}>
                                    <div className="boxes">
                                        <p>( {countryIndex} )</p>
                                        <div className="main-details">
                                            {/* ------------ */}

                                            <div>
                                                <div className="cards-wrapper">
                                                        <h2 className="warning"> {countryData.name}</h2>
                                                </div>
                                                <div  className="basic-wrapper D-flex Justify-Space-betw width-sepcl">
                                                    <div>
                                                        <p>{countryData.nativeName} </p>
                                                    </div>
                                                    <div>
                                                       
                                                        <h6 className="warning">Capital: {countryData.capital}</h6>
                                                    </div>


                                                    <div className="cont-flag">
                                                        <img src={countryData.flag} alt="flag" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ------------ */}
                                            <div className="D-flex Justify-Space-betw width-sepcl mt-20">
                                                {
                                                    <div className="">
                                                        <p className="warning">Currency</p>
                                                        <p>{countryData.currencies[0].code}, <strong>{countryData.currencies[0].name},</strong> <strong>( {countryData.currencies[0].symbol}  )</strong></p>


                                                    </div>
                                                }



                                                <div>
                                                    <p className="warning">Calling Codes</p>
                                                    <p>+{countryData.callingCodes}</p>
                                                </div>
                                                <div>
                                                    <p className="warning"> Region</p>
                                                    <p>{countryData.region}</p>
                                                </div>

                                            </div>



                                        </div>
                                        {/* -----addition details------- */}

                                        <div className="addition-details-wrapper">


                                            {
                                                countryData.borders.length > 0 &&
                                                <div className="cards-wrapper">
                                                    <p className="warning">Borders</p> {countryData.borders.join(' / ')}
                                                </div>
                                            }

                                            {
                                                countryData.population &&
                                                <div className="cards-wrapper">
                                                    <p className="warning">Total Population</p>
                                                    <p> {countryData.population}</p>
                                                </div>
                                            }
                                            {countryData.timezones &&
                                                <div className="cards-wrapper">
                                                    <p className="warning">Time Zone</p>
                                                    {countryData.timezones}
                                                </div>
                                            }

                                            <div className="cards-wrapper">
                                                {showMoreDetails === false &&
                                                    <button type="button" onClick={() => { setShowMoreDetails(true) }} className="btns btn btn-primary">See More Details</button>
                                                }

                                            </div>

                                            {/* wrapping details..will show all after clicking */}
                                            {
                                                showMoreDetails === true &&
                                                <div className="more-details-wrapper">
                                                    {countryData.languages &&
                                                        <div className="cards-wrapper">
                                                            <p className="warning">Languages</p>
                                                            <div className="inline-children">
                                                                <span>{countryData.languages[0].name}</span> ,
                                                                <span>{countryData.languages[0].nativeName}</span> ,
                                                                <span>{countryData.languages[0].iso639_2}</span> ,
                                                                <span>{countryData.languages[0].iso639_1}</span>

                                                            </div>

                                                        </div>
                                                    }

                                                    {countryData.translations &&
                                                        <div className="cards-wrapper">
                                                            <p className="warning">translations</p>
                                                            <div className="inline-children">
                                                                <span>{countryData.translations.de}</span>
                                                                <span>{countryData.translations.es}</span>
                                                                <span>{countryData.translations.fr}</span>
                                                                <span>{countryData.translations.ja}</span>
                                                                <span>{countryData.translations.it}</span>
                                                                <span>{countryData.translations.br}</span>
                                                                <span>{countryData.translations.pt}</span>
                                                                <span>{countryData.translations.nl}</span>
                                                                <span>{countryData.translations.hr}</span>
                                                                <span>{countryData.translations.fa}</span>


                                                            </div>

                                                        </div>
                                                    }
                                                    {
                                                        countryData.subregion &&
                                                        <div className="cards-wrapper">
                                                            <p className="warning">subregion</p>
                                                            {countryData.subregion}
                                                        </div>
                                                    }

                                                    {
                                                        countryData.latlng.length > 0 &&
                                                        <div className="cards-wrapper">
                                                            <p className="warning">latlng</p>
                                                            {countryData.latlng.join(' / ')}
                                                        </div>
                                                    }

                                                    {
                                                        countryData.demonym &&
                                                        <div className="cards-wrapper">
                                                            <p className="warning">demonym</p>
                                                            {countryData.demonym}
                                                        </div>
                                                    }

                                                    {
                                                        countryData.area && countryData.area &&
                                                        <div className="cards-wrapper">
                                                            <p className="warning">area / gini</p>
                                                            {countryData.area} / {countryData.gini}
                                                        </div>
                                                    }

                                                    {
                                                        countryData.numericCode &&
                                                        <div className="cards-wrapper">
                                                            <p className="warning">numericCode</p>
                                                            {countryData.numericCode}
                                                        </div>
                                                    }

                                                    {
                                                        countryData.regionalBlocs &&
                                                        <div className="cards-wrapper">
                                                            <p className="warning">RegionalBlocs</p>
                                                            {countryData.acronym}
                                                        </div>
                                                    }

                                                    {/* fold half details button */}
                                                    <div className="cards-wrapper">
                                                        {showMoreDetails === true &&
                                                            <button type="button" onClick={() => { setShowMoreDetails(false) }} className="btns btn btn-primary">See Less</button>
                                                        }

                                                    </div>



                                                </div>
                                            }





                                        </div>






                                    </div>
                                </div>
                            )

                        )}



                </div>

            }

        </>
    )
}
export default ShowCountries;