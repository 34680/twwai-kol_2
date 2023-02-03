import './App.css';

import {Data} from "./components/Data";
import {LineChart} from "./components/LineChart";

const styles = {
   display: 'flex',
   justifyContent: 'space-between'
};

function App() {
   return (
       <div className="App">
           <div style={styles}>
               <Data/>
           </div>
           <div className="col-10">
            <LineChart/>
          </div>
       </div>
   );
}

export default App;