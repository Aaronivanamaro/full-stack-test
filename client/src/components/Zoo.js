import { useContext, useState } from 'react';
import { isValid } from '../utils/functions';
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
    <section className="main-container zoo-name">
      <div>

        <h2 className="main-title">Zoo Generator</h2>
        <p className="description-text">Choose a name and create your own zoo!</p>

        <form noValidate onSubmit={handleSubmit}>

          <input
            className={ zooNameError ? 'input-field input-green error' : 'input-field input-green' }
            onChange={ e => setZooName(e.target.value) }
            onClick={ () => setZooNameError(false) }
            placeholder="Zoo Name"
          />
          
          <button className="form-button" style={{ backgroundColor: "#235221" }}>
            <span>Next</span>
            <ArrowForwardIosIcon fontSize="18px"/>
          </button>
        
        </form>
      
      </div>
    </section>
  )
}

export default Zoo;
