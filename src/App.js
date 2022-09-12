import UserRoutes from "./UserRoutes";
import Navbar from "./components/Navbar/Navbar";
import s from "./components/App.module.css"

function App () {
  return (
    <div className={s.container}>
      <Navbar/>
      <UserRoutes/>
    </div>
  );
}

export default App;
