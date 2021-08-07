import { CircularProgress, TextField } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import ShowCountries from './ShowCountries';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchData, setSearchData] = useState('');

    const [loader, setLoader] = useState(false);

    const [showCountry, setShowCountry] = useState(false);

    const [errMsg, setErrMsg] = useState(false);
    const [progress, setProgress] = useState(0);



    const searchInp = useRef(null);

    useEffect(() => {
        setLoader(true);
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then((result) => {
                setCountries(result);
                console.log('result', result)
                setLoader(false);
                localStorage.setItem("countries", JSON.stringify(result));

            }).catch(e => {
                const dataFromLocalStorage = JSON.parse(localStorage.getItem("countries"));
                console.log('localStro', dataFromLocalStorage)
                setCountries(dataFromLocalStorage);
                setLoader(false);
            });

        if (filteredCountry.length > 0) {
            setErrMsg(true)
        }




    }, []);

    const clickHandler = () => {
        alert('Search button Clicked')
    }

    const showHandler = () => {
        setShowCountry(false);
    }


    const filteredCountry = countries.filter(country => {
        const searchDataStr = searchData.toLocaleLowerCase().trim();
        const altSpelling = () => {
            return country.altSpellings.filter((item) => item === searchData.trim())
        }

        //    let searchSource = toLowerCase().includes(searchData.toLocaleLowerCase())
        if (
            country.name && country.name.toLowerCase().includes(searchDataStr)
            ||
            country.capital && country.capital.toLowerCase().includes(searchDataStr)
            ||
            country.nativeName && country.nativeName.toLowerCase().includes(searchDataStr)
            ||
            altSpelling()[0] && altSpelling()[0].toLowerCase().includes(searchDataStr)

        ) {
            return country;
        }


    });



    return (
        <div className="">
            <div className="action-wrapper">
                <div className="cards-wrapper">{
                    showCountry === false ?
                        <h3 className="">Search and Know about Your Country</h3> :
                        <h3 className="warning">Click on Show All countries button To Continue..</h3>

                }

                </div>
                <div className="search-wrapper">


                    <div>
                        {
                            showCountry === false &&
                            <TextField className="search-input" id="standard-search" label="Eg: India" type="search"
                                onChange={(e) => {
                                    setSearchData(e.target.value);
                                }}
                                inputRef={searchInp}

                            />

                        }

                    </div>
                    <div className="btn-wrap">

                        {showCountry === true ?
                            <button onClick={showHandler} className="btn btn-secondary mt-3 btns mr-4">Show All Countries</button> :
                            <div>
                                {
                                    filteredCountry.length > 0 &&
                                    <button onClick={() => { setShowCountry(true) }} className="btn btn-danger mt-3 btns mr-4">Hide Countries</button>

                                }

                            </div>

                        }

                    </div>

                </div>
            </div>

            {/* country show */}


           
            {
                loader &&
                <div className="loader-wrapper">
                    <div className="progress-wrapper">
                        <CircularProgress />
                    </div>

                    <div className="loader-msg-wrapper">
                        <p>Loading Countries...</p>
                    </div>
                </div>


            }


            <ShowCountries
                loader={loader}
                countries={countries}
                showCountry={showCountry}
                filteredCountry={filteredCountry}
            />

        </div>
    )
}

export default Countries;