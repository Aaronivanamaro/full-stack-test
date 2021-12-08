import { useContext, useState } from 'react';
import { isValid } from '../utils/functions';
import { Button, TextField } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom'
import { ZooContext } from '../context/ZooContextProvider';

function Zoo() {

  const navigate = useNavigate();

  const [zooName, setZooName] = useState('');
  const [zooNameError, setZooNameError] = useState(false);

  const { setNewZoo } = useContext(ZooContext);

  function handleSubmit(e) {
    e.preventDefault();

    setZooNameError(false);

    if (isValid(zooName)) {
      setNewZoo(prevState => [...prevState, zooName] );
      setZooName('');
      navigate('/zoo/new');
    } else {
      setZooNameError(true);
    }
  }

  return (
    <section className="zoo">
      <div>

        <h2>Welcome to the Zoo</h2>
        <p>Choose a name and create your own zoo!</p>

        <form noValidate onSubmit={handleSubmit}>

          <TextField
            onChange={e => setZooName(e.target.value)}
            label="Zoo Name"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            error={zooNameError}
          />
          
          <Button
            type="submit" variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            sx={{ my: 1 }}>
            Next
          </Button>
        
        </form>
      
      </div>
    </section>
  )
}

export default Zoo;
