import { useState } from 'react';
import { isValid } from '../utils/functions';
import useFetchData from '../customHooks/useFetchData';

function ErrorAlarm() {
  const [errorsQuantity, setErrorsQuantity] = useState('');
  const [timeout, setTimeout] = useState('');
  const { dataResponse, setDataRequest, isLoading, isError } = useFetchData( 'post', 'api/logger' );

  return (
    <section className="zoo"> Error Alarm
      <input value={errorsQuantity} onChange={e => setErrorsQuantity(e.target.value)}/>
      <input value={timeout} onChange={e => setTimeout(e.target.value)}/>
      <button onClick={() => setDataRequest({ errorsQuantity, timeout })}>Send</button>
      <ul>
        { isLoading ? <div>Loading...</div> : 
          isError ? <div>{ isError }</div> :
          isValid(dataResponse) ? 
          <div>{JSON.stringify(dataResponse.data)}</div>
          : <div>Try again, there is no zoo available right now</div>        
        }
      </ul>
    </section>
  )
}

export default ErrorAlarm;
