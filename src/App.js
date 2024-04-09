import logo from './logo.svg';
import './App.css';
import { ColorPicker } from './pages/components/ColorPicker';
import { ChatRoom } from './pages/components/Chat';

function App() {
  return (
    <div >
      <ChatRoom />
      <ColorPicker />
    </div>
  );
}

export default App;
