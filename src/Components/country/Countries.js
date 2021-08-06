import TextField from '@material-ui/core/TextField';
import { useEffect, useRef, useState } from 'react';
import A from './A';
// import Paper from '@material-ui/core/Paper';
// import Fade from '@material-ui/core/Fade';
// import { makeStyles } from '@material-ui/core/styles';
// const [checked, setChecked] = React.useState(false);

import ShowCountries from './ShowCountries';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    const [searchData, setSearchData] = useState('');

    const [showCountry, setShowCountry] = useState(false);

    const [errMsg, setErrMsg] = useState(false);

    // const classes = useStyles();


    const searchInp = useRef(null);
    useEffect(() => {

        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then((result) => {
                setCountries(result);
                console.log('result', result)

                localStorage.setItem("countries", JSON.stringify(result));

            }).catch(e => {
                const dataFromLocalStorage = JSON.parse(localStorage.getItem("countries"));
                console.log('localStro', dataFromLocalStorage)
                setCountries(dataFromLocalStorage);
            });

        if (filteredCountry.length > 0) {
            setErrMsg(true)
        }
    }, []);

    const clickHandler = () => {
        alert('Search button Clicked')
    }

    const showHandler = () => {
        setShowCountry(true);
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
        <div className="main-container">
            <div className="action-wrapper">
                <div>{
                    showCountry === true &&
                    <h3 className="warning">Search and Know about the Country</h3>
                }

                </div>
                <div className="search-wrapper">

                    {/* <Fade in={checked}>
                    <Paper elevation={4} className={classes.paper}>
                        <svg className={classes.svg}>
                            <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                        </svg>
                    </Paper>
                </Fade> */}
                    <div>
                        {
                            showCountry === true &&
                            <TextField className="search-input" id="standard-search" label="Eg: India" type="search"
                                onChange={(e) => {
                                    setSearchData(e.target.value);
                                }}
                                inputRef={searchInp}

                            />

                        }

                    </div>
                    <div className="btn-wrap">

                        {showCountry === false ?
                            <button onClick={showHandler} className="btn btn-secondary mt-3 btns mr-4">Show All Countries</button> :
                            <div>
                                {
                                    filteredCountry.length > 0 &&
                                    <button onClick={() => { setShowCountry(false) }} className="btn btn-danger mt-3 btns mr-4">Hide Countries</button>

                                }

                            </div>

                        }

                    </div>

                </div>
            </div>

            {/* country show */}





            <ShowCountries

                countries={countries}
                showCountry={showCountry}
                filteredCountry={filteredCountry}
            />
            {/* <A nium={124} hidauy={"hi i am hidayt"} countries={countries} /> */}

        </div>
    )
}

export default Countries;