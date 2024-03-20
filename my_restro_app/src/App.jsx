import ErrorModal from "./components/Cart/ErrorModal";
import Meals from "./components/Meals/Meals";
import Header from "./components/LayOut/Header";



function App() {
  return <>
    <ErrorModal></ErrorModal>
    <Header></Header>
    <main>
      <Meals></Meals>
    </main>
  </>
}


export default App;