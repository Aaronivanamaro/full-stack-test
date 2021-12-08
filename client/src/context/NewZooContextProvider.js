import { useState, createContext } from 'react';

export const NewZooContext = createContext();

const NewZooContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <NewZooContext.Provider value = { { 
                data, setData, error, setError, loading, setLoading
        } } >
            { children }
        </NewZooContext.Provider>
    );
}
 
export default NewZooContextProvider;