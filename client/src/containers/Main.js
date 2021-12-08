import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Zoo from '../components/Zoo';
import UrlParser from '../components/UrlParser';
import Form from '../components/Form';
import Phrase from '../components/Phrase';
import ZooContextProvider from '../context/ZooContextProvider';
import NewZooContextProvider from '../context/NewZooContextProvider';
import Animals from '../components/Animals';
// import ErrorAlarm from '../components/ErrorAlarm';

const Main = () => {
    return (
        <main>
            <ZooContextProvider>
                <NewZooContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/zoo" element={<Zoo />} />
                        <Route path="/zoo/new" element={<Form />} />
                        <Route path="/zoo/new/phrase" element={<Phrase />} />
                        <Route path="/zoo/animals" element={<Animals />} />
                        <Route path="/url-parser" element={<UrlParser />} />
                        {/* <Route path="/error-alarm" element={<ErrorAlarm />} />                 */}
                    </Routes>
                </NewZooContextProvider>
            </ZooContextProvider>
        </main>
    );
}

export default Main;