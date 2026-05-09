import './App.css';
import Welcome from'./components/Welcome';
import BomDia from'./components/BomDia';
import Pai from'./components/Pai';
import Descricao from'./components/Descricao';
import Cachorro from'./components/Cachorro';
import Filho from'./components/Filho';
import Counter from'./components/Counter';
import UserInfoForm from'./components/UserInfoForm';

function App() {
  return (<>
  {/*6.1  - criação de componentes*/}
  <Welcome />
   {/*6.2  - expressoes do JSX*/}
   <BomDia />
   {/*6.3  - componente dentro de componente*/}
   <Pai />
   <Filho/>
    {/*6.4  -Props*/}
    <Descricao nome= "Val" sonhos = {["aprender react",   "dominar javascript"]}/>
     {/*6.5  -Desestruturacao de props*/}
     <Cachorro nome="Sol" raça ="Shih Tzu" />
     {/*6.6  -useState => hook*/}
     <Counter/>
     {/*6.7  - multiplos estados*/}
     <UserInfoForm/>
     </>

  );
}

export default App;
