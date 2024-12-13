import './App.css'
import Saudacao from './components/01Saudacao'
import Contador from './components/02Contador'
import ToggleTema from './components/03ToggleTema'
import Cadastro from './components/04Cadastro'
import Lista from './components/05Lista'
import InputControlado from './components/06InputControlado'
import ListaNomes from './components/07ListaNomes'
import FiltroLista from './components/08FiltroLista'
import Carrosel from './components/09Carrosel'
import JogoAdivinhacao from './components/10JogoAdivinhacao'
import Relogio from './components/11Relogio'
import Cronometro from './components/12Cronometro'
import ListaTarefa from './components/13LIstaTarefas'
import FiltroLista2 from './components/14FiltroLista2'
import ToDoList from './components/15ToDoList'
import Carrosel2 from './components/16Carrossel2'
import CalculadoraIMC from './components/17CalculadoraIMC'
import Acordeao from './components/18Acordeao'
import ContagemRegressiva from './components/19ContagemRegressiva'
import FetchDados from './components/20FetchDados'
import FormularioCadastro from './components/21FormularioCadastro'
import Modal from './components/22Modal'
import ExibirDados from './components/23ExibirDados'
import FormFeedback from './components/24FormFeedback'
import Tabs from './components/25Tabs'
import DarkMode from './components/26DarkMode'

function App() {

  return (
    <>
      <Saudacao/>
      <Contador/>
      <ToggleTema/>
      <Cadastro/>
      {/* <Lista/> */}
      <InputControlado/>
      <ListaNomes/> 
      {/* <FiltroLista/> */}
      {/* <Carrosel/>  */}
      <JogoAdivinhacao/>
      <Relogio/>
      <Cronometro/>
      <ListaTarefa/>
      <FiltroLista2/>
      <ToDoList/>
      <Carrosel2/>
      <CalculadoraIMC/>
      <Acordeao/>
      <ContagemRegressiva/>
      <FetchDados/>
      <FormularioCadastro/>
      <Modal/>
      {/* <ExibirDados/> */}
      <FormFeedback/>
      <Tabs/>
      <DarkMode/>
    </>
  )
}

export default App
