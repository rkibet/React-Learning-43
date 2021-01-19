import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionalClick from './components/FunctionalClick';
import Greet from './components/Greet';
import Inline from './components/Inline';
import JsxVersion from './components/JsxVersion';
import Message from './components/Message';
import NameList from './components/NameList';
import NoJsxUsed from './components/NoJsxUsed';
import ParentComponent from './components/ParentComponent';
import Stylesheets from './components/Stylesheets';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import './appStyles.css'
import styles from './appStyles.module.css'
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureCom from './components/PureCom';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Focus from './components/Focus';
import ParentForwardRef from './components/ParentForwardRef';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCount from './components/ClickCount';
import HoverCounter from './components/HoverCounter';
import ButtonClickCount from './components/ButtonClickCount';
import MouseHoverCount from './components/MouseHoverCount';
import UpdatedComponent from './components/WithCounter'
import ClickTwoCounter from './components/ClickTwoCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import {UserProvider} from './components/UserContext'
import ComponentC from './components/ComponentC';
import PostList from './components/PostList';
import PostForm from './components/PostForm';




function App() {
  return (
    <div className="App">
      <PostForm/>
       <PostList/>
        <UserProvider value='Ronald Kibet'>
      <ComponentC/>
      </UserProvider>
        <CounterTwo render={(count,incrementCount)=>(<ClickTwoCounter count={count} incrementCount={incrementCount}/>)}/>
        <CounterTwo render={(count,incrementCount)=>(<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}/>
        <ClickTwoCounter/>
        <HoverCounterTwo/>
        <User render={(isLoggedIn)=>isLoggedIn?'Ronald Kibet':'Guest'}/>
        
        <User name='Ronald Kibet'/>
        <ButtonClickCount name='Ronald Kibet'/>
        <MouseHoverCount/>
        <ClickCount/>
        <HoverCounter/>

        <ErrorBoundary>
        <Hero heroMan='Batman'/>
        </ErrorBoundary>
        
        <ErrorBoundary>
        <Hero heroMan='Spider'/>
        </ErrorBoundary>
        
        <ErrorBoundary>
        <Hero heroMan='Joker'/>
        </ErrorBoundary>

        <PortalDemo/>
        <ParentForwardRef/>
        <Focus/>
        <RefsDemo/>
        <ParentComp/>
        <PureCom/>
        <Table/>
        <FragmentDemo/>
        <LifeCycleA/>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline/>
        <Stylesheets primary={true}/>
        <NameList/>
        <UserGreeting/>
        <ParentComponent/> 
        <EventBind/>
        <ClassClick/>        
        <FunctionalClick/>
        <Welcome name='Kimeli' otherName='Old School Coding'/>
        <Counter/>
        <Message/>
        <Greet name='Mwatela' otherName='Java'><p>This is the Man On Spring Boot Projects ~ Doing good</p></Greet>
        <Greet name='Kidula' otherName='Kotlin'><button>The Consumer</button></Greet>
        <Greet name='Kimeli' otherName='Old School Coding'/>
        <Welcome name='Mwatela' otherName='Java'/>
        <Welcome name='Kidula' otherName='Kotlin'/>
        <Welcome name='Kimeli' otherName='Old School Coding'/>
        <JsxVersion/>
        <NoJsxUsed/> 
    </div>
  );
}

export default App;
