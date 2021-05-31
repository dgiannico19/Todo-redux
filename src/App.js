import Header from './components/Header.jsx';
import TodoPages from './components/TodoPages.jsx';
import GlobalStyle from './styles/GlobalStyles.jsx';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <TodoPages />
    </div>
  );
}

export default App;
