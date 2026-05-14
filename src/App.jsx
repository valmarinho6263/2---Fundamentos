import './App.css';

//CSS Modules

import Welcome from'./components/Welcome';
import BomDia from'./components/BomDia';
import Pai from'./components/Pai';
import Descricao from'./components/Descricao';
import Cachorro from'./components/Cachorro';
import Filho from'./components/Filho';
import Counter from'./components/Counter';
import UserInfoForm from'./components/UserInfoForm';
import Button from './components/Button';
import PaiFunction from'./components/PaiFunction';
import Form from './components/Form';
import RenderCondicional from './components/RenderCondicional';
import LoginButton from './components/LoginButton';
import Warning from'./components/Warning';
import NumberList from'./components/NumberList';
import BotaoEstilizado from'./components/BotaoEstilizado';
import BotaoAzul from'./components/BotaoAzul';
import Exercicio from'./components/Exercicio';



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
     {/*6.8  - Eventos*/}
     <Button />
     {/*6.9  -Passando funcoes de  manipulaçao de eventos como props*/}
     <PaiFunction/>
     {/*6.10  - Eventos de form*/}
     <Form/>
     {/*6.11  - Renderização condicional*/}
    <RenderCondicional user = "Val"/>
    {/*6.12  - Expressao Ternária*/}
    <LoginButton loggedIn ={false}/>
    <LoginButton loggedIn ={true}/>
     {/*6.13  - Render nulo*/}
    <Warning warning = "Temos um Warning"/>
    {/*6.14  - Listas e Chaves*/} 
    <NumberList numbers={[1, 2, 3, 4, 5]} />
    {/*6.15  - Estilos por atributo*/} 
    <BotaoEstilizado/>
    {/*6.16  - Estilos globais*/} 
    <BotaoAzul/>
    {/*6.17  - Exercicios*/}
    <Exercicio/>
</> 
  );
}

export default App;
