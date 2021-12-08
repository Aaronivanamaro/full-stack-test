import { useState } from 'react';
import { isValid } from '../utils/functions';
import useFetchData from '../customHooks/useFetchData';

function UrlParser() {
  const [urlFormat, setUrlFormat] = useState('');
  const [urlInstance, setUrlInstance] = useState('');
  const { dataResponse, setDataRequest, isLoading, isError } = useFetchData('post', 'http://localhost:8000/api/parser');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataRequest({ urlFormat, urlInstance });
  }
  console.log(dataResponse);

  return (
    <section className="url-parser"> Url Parser
      <h3>Suggested URLs:</h3>
      <p>/:version/api/:collection/:id</p>
      <p>/6/api/listings/3?sort=desc&limit=10</p>

      <form onSubmit={handleSubmit}>
        <input value={urlFormat} onChange={e => setUrlFormat(e.target.value)} />
        <input value={urlInstance} onChange={e => setUrlInstance(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <div>
        {isLoading ? <div>Loading...</div> :
          isError ? <div>{isError}</div> :
            isValid(dataResponse) ?
              <div>{JSON.stringify(dataResponse)}</div>
              : <div>Try again, there is no zoo available right now</div>
        }
      </div>
    </section>
  )
}

export default UrlParser;
