import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Footer from  './components/footer.js';
import FileUpload from './components/file-upload.js';

function App() {
  return (
    <div className="App">
      <Header />
      <FileUpload />
      <Footer />
    </div>
  );
}

export default App;
