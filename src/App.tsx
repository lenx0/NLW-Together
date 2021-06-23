import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    //exact garante que o endereço seja exatamente o listado para ser acessado,se não colocar isso, ele pode mostrar varias rotas ao mesmo tempo na pagina
    <BrowserRouter>
      <Route path="/" exact component={Home} />        
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
