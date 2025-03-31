import Header from "./components/Header";
import Main from "./components/Main";
import "./Styles/components/App.scss";
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
