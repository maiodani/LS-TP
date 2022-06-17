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
        <div className='col-4'>
            <BoardComponent nRow="10" nCol="10"></BoardComponent>
        </div>
        <div className='col-4'>
          <SidepanelComponent></SidepanelComponent>
        </div>
      </div>
    </div>
  );
}

export default App;