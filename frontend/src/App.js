import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateVoitureForm from './components/CreateVoitureForm'
import NavBar from "./components/NavBar";
import VoitureList from "./components/VoitureList";
import Voitures from "./components/Voitures";
import { VoitureListProvider } from "./context/VoitureContext";
import VoitureDetail from "./components/VoitureDetail";
import UpdateVoitureForm from './components/UpdateVoitureForm';

function App() {
  return (
    <Router>
      <VoitureListProvider>
        <div className="container">
          <NavBar />
          <hr />
          <Routes>
            <Route path="/new" element={<CreateVoitureForm />} />
            <Route path="/" element={<Voitures />}>
              <Route index element={<VoitureList />} />
              <Route path=":id" element={<VoitureDetail />} />
              <Route path=":id/edit" element={<UpdateVoitureForm />} />
            </Route>
          </Routes>
        </div>
      </VoitureListProvider>
    </Router>
  );
}

export default App;
