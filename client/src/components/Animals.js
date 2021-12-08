import { useContext } from "react";
import { NewZooContext } from "../context/NewZooContextProvider";
import { isValid } from "../utils/functions";

const Animals = () => {

  const { data, error, loading } = useContext(NewZooContext);

  return (
    <ul>
      {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
          isValid(data) ?
            data.data ?
            data.data.map((item, index) => {
              return (<li key={index}>
                <p>{item.name}</p>
                <p>{item.sex}</p>
                <p>{item.specie}</p>
                <p>{item.description}</p>
                <p>{item.habitat}</p>
                <p>{item.sound}</p>
                <p>{item.phrase}</p>
                <p>{item.energy}</p>
              </li>
              )
            })
          : <div>Try again, there is no zoo available right now</div>
        : <div>Error</div>
      }
    </ul>
  );
}

export default Animals;