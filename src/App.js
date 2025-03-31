import Header from "./components/Header";
import Main from "./components/Main";
import "./Styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  const dark = true;
  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
