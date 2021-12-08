import { useState, useEffect } from 'react';
import { isValid } from '../utils/functions';
import axios from 'axios';

const useFetchData = ( method, url ) => {
    const [dataRequest, setDataRequest] = useState(null);
    const [dataResponse, setDataResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isValid(dataRequest)) {
            setIsLoading(true);
            try {
                axios({
                    method: method,
                    url: url,
                    data: {
                        data: dataRequest
                    }
                }).then(res => {
                    setDataResponse(res.data);
                });
            } catch (err) {
                setIsError(err);
            }
            setIsLoading(false);    
        }
    // eslint-disable-next-line
    }, [dataRequest]);  

    return { dataResponse, setDataRequest, isLoading, isError }
}
 
export default useFetchData;