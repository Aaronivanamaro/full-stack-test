import { useState, createContext } from 'react';

export const ZooContext = createContext();

const ZooContextProvider = ({ children }) => {
    const [newZoo, setNewZoo] = useState([]);
    const [newAnimalsArr, setNewAnimalsArr] = useState([]);

    return (
        <ZooContext.Provider value={ { newZoo, setNewZoo, newAnimalsArr, setNewAnimalsArr } }>
            { children }
        </ZooContext.Provider>
    );
}
 
export default ZooContextProvider;