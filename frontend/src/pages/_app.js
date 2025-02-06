import '../styles/global.css';
import Navbar from '../src/components/Navbar';


function MyApp({component, pageProps}){
    return (
        <>
            <Navbar />
            <Component {...pageProps}/>
        </>
    ); 
};

export default MyApp;