import './App.css';
import Counter from '../Counter/Counter'
import SmartCounter from '../SmartCounter/SmartCounter';
import '../IfoodCounter/IfoodCounter.css';
import IfoodCounter from '../IfoodCounter/IfoodCounter';


export default function App(){
  return(
    <>
    <h1>Ifood</h1>
    <IfoodCounter />
    </>

  );
}