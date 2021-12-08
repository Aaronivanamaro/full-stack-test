import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Alert from '@mui/material/Alert';
import {
    Container, Button, Typography, TextField, FormControl, InputLabel,
    FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, Select
} from "@mui/material";
import { isValid } from "../utils/functions";
import { ZooContext } from "../context/ZooContextProvider";

const Form = () => {

    const navigate = useNavigate();

    const { setNewAnimalsArr } = useContext(ZooContext);

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
        else {
            setNewAnimalsArr(prevState => [...prevState, { name, sex, specie }]);
            setName('');
            setSex('');
            setSpecie('');
            setAddAnotherAnimal(true);
            window.scrollTo(0, 0);
        }
    }

    return (
        <Container maxWidth="sm" sx={{ pt: 2 }}>
            <Typography variant="h4" gutterBottom component="h2" sx={{ textAlign: 'center' }}>
                Create your Zoo Animals
            </Typography>

            {addAnotherAnimal ?
                <div className="info-container">
                    <Alert severity="info" sx={{ mt: 4 }}>
                        You may add as many animals as you wish. When you finish, press the button below
                    </Alert>
                    <Button
                        onClick={() => navigate('/zoo/new/phrase')}
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        sx={{ my: 1, mt: 3, mx: 'auto' }}>
                        Next
                    </Button>
                </div>
                : null
            }

            <form noValidate onSubmit={handleSubmit}>

                <TextField
                    sx={{ maxWidth: 300 }}
                    onChange={e => setName(e.target.value)}
                    label="Name"
                    fullWidth
                    variant="outlined"
                    required
                    margin="normal"
                    error={nameError}
                />

                <FormControl sx={{ maxWidth: 300 }} required
                    fullWidth margin='normal' error={sexError}>
                    <InputLabel>Sex</InputLabel>
                    <Select
                        value={sex}
                        label="Age"
                        onChange={e => setSex(e.target.value)}
                    >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ display: 'block' }} required
                    margin='normal' error={specieError}>
                    <FormLabel>Specie</FormLabel>
                    <RadioGroup value={specie} onChange={e => setSpecie(e.target.value)}>
                        <FormControlLabel value="Tiger" control={<Radio />} label="Tiger" />
                        <FormControlLabel value="Snake" control={<Radio />} label="Snake" />
                        <FormControlLabel value="Lion" control={<Radio />} label="Lion" />
                        <FormControlLabel value="Monkey" control={<Radio />} label="Monkey" />
                        <FormControlLabel value="Eagle" control={<Radio />} label="Eagle" />
                        <FormControlLabel value="Iguana" control={<Radio />} label="Iguana" />
                        <FormControlLabel value="Fox" control={<Radio />} label="Fox" />
                        <FormControlLabel value="Giraffe" control={<Radio />} label="Giraffe" />
                        <FormControlLabel value="Zebra" control={<Radio />} label="Zebra" />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit" variant="contained"
                    endIcon={<ArrowForwardIosIcon />}
                    sx={{ my: 1 }} >
                    Next
                </Button>

            </form>

        </Container>
    );
}

export default Form;