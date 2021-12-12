import './App.css';
import Profil from './profil/Profil';

function App() {
  return (
    <div className="App">
      <Profil name = "Aubrey MBOLO"/>
      <Profil bio ="Amoureux de technologie"/>
      <Profil job ="Etudiant"/>
      <Profil>
        <img src="https://images.unsplash.com/photo-1609252547589-421ef5b8a882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="images"></img>
      </Profil>
      <Profil names ="Geldof"/>
    </div>
  );
}

export default App;
