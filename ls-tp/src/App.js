import logo from './logo.svg';
import './App.css';
import BoardComponent from "./components/controlpanel/board.component";
function App() {
  return (
    <div id="container">
      <main className="main-content">
        <BoardComponent nRow="10" nCol="10"></BoardComponent>
      </main> 
    </div>
  );
}

export default App;