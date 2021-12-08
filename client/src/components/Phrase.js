import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Send } from "@mui/icons-material";
import { Container, Button, Typography, TextField } from "@mui/material";
import { isValid } from "../utils/functions";
import { ZooContext } from "../context/ZooContextProvider";
import { NewZooContext } from "../context/NewZooContextProvider";
import useFetchData from "../customHooks/useFetchData";

const Phrase = () => {
    const navigate = useNavigate();

    const { dataResponse, setDataRequest, isLoading, isError } = useFetchData('post', 'http://localhost:8000/api/zoo');

    const [phrase, setPhrase] = useState('');

    const { newZoo, setNewZoo, newAnimalsArr } = useContext(ZooContext);
    const { setData, setError, setLoading } = useContext(NewZooContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewZoo(prevState => [...prevState, newAnimalsArr, phrase]);
        setDataRequest(newZoo);
        if (isValid(dataResponse)) {
            setData(dataResponse);
            setError(isError);
            setLoading(isLoading);
            navigate('/zoo/animals');
        }    
    }
    
    return (
        <Container maxWidth="sm" sx={{ pt: 2 }}>
            <Typography variant="h4" gutterBottom component="h2">
                Create a New Zoo
            </Typography>

            <form noValidate onSubmit={handleSubmit}>

                <TextField
                    onChange={e => setPhrase(e.target.value)}
                    label="Phrase"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                />

                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{ my: 1 }} >
                    Create Zoo
                </Button>

            </form>

        </Container>
    );
}

export default Phrase;