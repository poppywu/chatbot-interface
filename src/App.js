import { AppContextProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import ContentArea from './components/ContentArea';
import Chatbot from './components/Chatbot';


function App() {
  return (
    <AppContextProvider>
    <div className="container">
      <Navbar />
      <div className='main'>
        <SideMenu />
        <ContentArea />
      </div>
      <Chatbot />
    </div>
    </AppContextProvider>
  );
}

export default App;
