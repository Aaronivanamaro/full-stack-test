import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Send } from "@mui/icons-material";
import { isValid } from "../utils/functions";
import { ZooContext } from "../context/ZooContextProvider";
import { NewZooContext } from "../context/NewZooContextProvider";
import useFetchData from "../customHooks/useFetchData";

const Phrase = () => {
    const navigate = useNavigate();

    const { dataResponse, setDataRequest, isLoading, isError } = useFetchData('post', 'http://localhost:8000/api/zoo');

    const [phrase, setPhrase] = useState('');
    const [phraseError, setPhraseError] = useState(false);
    const [createBtn, setCreateBtn] = useState(false);

    const { newZoo, setNewZoo, setNewAnimalsArr } = useContext(ZooContext);
    const { setData, setError, setLoading } = useContext(NewZooContext);

    const sendData = (e) => {
        e.preventDefault();
        if (isValid(phrase)) {
            setNewZoo(prevState => [...prevState, phrase]);
            setCreateBtn(true);
        } else {
            setPhraseError(true);
        }
    }

    function createNewZoo(e) {
        e.preventDefault();
        setDataRequest(newZoo);
    }

    useEffect(() => {
        if (isValid(dataResponse)) {
            console.log('I got here!');
            setData(dataResponse);
            setError(isError);
            setLoading(isLoading);
            setNewZoo([]);
            setNewAnimalsArr([]);
            navigate('/zoo/animals');
    }
    }, [dataResponse])

    return (
        <div className="main-container zoo-phrase">
            <h2 className="main-title">
                Create a New Zoo
            </h2>
            <p className="description-text">Write a sentence that each zoo animal will say!</p>

            <form noValidate>

                <input
                    className={phraseError ? 'input-field input-yellow error' : 'input-field input-yellow'}
                    onChange={e => setPhrase(e.target.value)}
                    onClick={() => setPhraseError(false)}
                    placeholder="Sentence..."
                />

                {createBtn ?
                    <button className="form-button" style={{ backgroundColor: "green" }}
                            onClick={createNewZoo}>
                        <span>Create Zoo</span>
                        <Send fontSize="18px" />
                    </button>
                    : <button className="form-button" style={{ backgroundColor: "#bda106" }}
                              onClick={sendData}>
                        <span>Send Data</span>
                        <Send fontSize="18px" />
                    </button>
                }

            </form>

        </div>
    );
}

export default Phrase;
