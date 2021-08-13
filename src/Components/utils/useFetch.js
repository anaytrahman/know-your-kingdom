import { useEffect, useState } from "react"

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [loader, setLoader] = useState(false);
  
    useEffect(() => {
        setLoader(true);
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((result) => {
                setData(result)
                setLoader(false);
                localStorage.setItem("countries", JSON.stringify(result));
            })
            .catch((error) => {
                const dataFromLocalStorage = JSON.parse(localStorage.getItem("countries"));
                setData(dataFromLocalStorage);
                setLoader(false);
                setError(error)
            })

           
    }, [])

    console.log('country2', data)

    return {
        data,
        error,
        loader
    }
}