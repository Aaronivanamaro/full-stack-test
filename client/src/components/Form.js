import { useState, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import { isValid } from "../utils/functions";
import { ZooContext } from "../context/ZooContextProvider";

const Form = () => {

    const navigate = useNavigate();

    const inputName = useRef('');
    const inputMale = useRef('');
    const inputFemale = useRef('');
    const inputSpecie = useRef('');

    const { setNewAnimalsArr, newAnimalsArr, setNewZoo } = useContext(ZooContext);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [sex, setSex] = useState('');
    const [sexError, setSexError] = useState(false);
    const [specie, setSpecie] = useState('');
    const [specieError, setSpecieError] = useState(false);

    const [addAnotherAnimal, setAddAnotherAnimal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError(false)
        setSexError(false)
        setSpecieError(false)

        if (isValid(name) === false) {
            setNameError(true)
        }
        if (isValid(sex) === false) {
            setSexError(true)
        }
        if (isValid(specie) === false) {
            setSpecieError(true)
        }
        if (isValid(name) && isValid(sex) && isValid(specie)) {
            setNewAnimalsArr(prevState => [...prevState, { name, sex, specie }]);
            setName('');
            setSex('');
            setSpecie('');
            setAddAnotherAnimal(true);
            inputName.current.value = '';
            inputMale.current.value = '';
            inputFemale.current.value = '';
            inputSpecie.current.value = '';
            window.scrollTo(0, 0);
        }
    }

    function redirectLastForm () {
        setNewZoo(prevState => [...prevState, newAnimalsArr]);
        navigate('/zoo/new/phrase');
    }

    function checkRadioBtn(e) {
        setSex(e.target.previousElementSibling.value);
        if (e.target.previousElementSibling.checked === false) {
            e.target.previousElementSibling.checked = true;
        }
    }
    
    return (
        <div className="main-container zoo-animals">
            <h2 className="main-title">
                Create your Zoo Animals
            </h2>

            {addAnotherAnimal ?
                <div className="info-container">
                    <div>
                        <InfoIcon sx={{ fontSize: 35, color: '#a4e2ff' }} />
                        <p>You may add as many animals as you wish. When you finish, press the button below.</p>
                    </div>
                    <button className="form-button"
                        style={{ textShadow: '2px 2px 1.2px rgba(0, 0, 0, 0.55)' }}
                        onClick={redirectLastForm} >
                        <span>Next Form</span>
                        <ArrowForwardIosIcon fontSize="18px" />
                    </button>
                </div>
                : null
            }

            <form noValidate onSubmit={handleSubmit}>

                <input
                    className={nameError ? 'input-field input-orange error' : 'input-field input-orange'}
                    onChange={e => setName(e.target.value)}
                    onClick={() => setNameError(false)}
                    placeholder="Name"
                    ref={inputName}
                />

                <div className="options-container">
                    <label htmlFor="specie">Specie:</label>
                    <select
                        className={specieError ? 'input-field input-orange error' : 'input-field input-orange'}
                        value={specie}
                        onClick={() => setSpecieError(false)}
                        onChange={e => e.target.value !== "Select" ? setSpecie(e.target.value) : null}
                        name="specie"
                        ref={inputSpecie}>
                        <option value="Select">Select:</option>
                        <option value="Tiger">Tiger</option>
                        <option value="Snake">Snake</option>
                        <option value="Lion">Lion</option>
                        <option value="Monkey">Monkey</option>
                        <option value="Iguana">Iguana</option>
                        <option value="Zebra">Zebra</option>
                        <option value="Eagle">Eagle</option>
                        <option value="Fox">Fox</option>
                        <option value="Giraffe">Giraffe</option>
                    </select>
                </div>

                <div className="specie-form-container">
                    <p>Sex:</p>
                    <div className="radio-buttons-container"
                         onClick={() => setSexError(false) }>

                        <div className={sexError ? 'radio-buttons-items radio-error' : 'radio-buttons-items'}>
                            <input type="radio" name="sex" value="Male" ref={inputMale}
                                   onChange={e => setSex(e.target.value)} />
                            <label htmlFor="sex" onClick={checkRadioBtn}>Male</label>
                        </div>
                        
                        <div className={sexError ? 'radio-buttons-items radio-error' : 'radio-buttons-items'}>
                            <input type="radio" name="sex" value="Female" ref={inputFemale}
                                   onChange={e => setSex(e.target.value)} />
                            <label htmlFor="sex" onClick={checkRadioBtn}>Female</label>
                        </div>

                    </div>
                </div>

                <button className="form-button"
                    style={{ backgroundColor: "#ac5a0e", margin: '1.5rem 0' }}>
                    <span>Next Animal</span>
                    <ArrowForwardIosIcon fontSize="18px" />
                </button>

            </form>

        </div>
    );
}

export default Form;
