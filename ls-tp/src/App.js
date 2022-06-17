import logo from './logo.svg';
import './App.css';
import BoardComponent from "./components/controlpanel/board.component";
import TituloComponent from "./components/titulo/titulo.compoment";
import SidepanelComponent from './components/sidepanel/sidepanel.compoment';
function App() {
  return (
    <div id="container">
      <div className='row'>
        <TituloComponent></TituloComponent>
      </div>
      <div className='row'>
        <div className='col-4'>
        </div>
        <div className='col-4 m-2'>
            <BoardComponent nRow="12" nCol="14"></BoardComponent>
        </div>
        <div className='col-1'>
          <SidepanelComponent></SidepanelComponent>
        </div>
        <div className='col-3'>
        </div>
      </div>
    </div>
  );
}


export default App;