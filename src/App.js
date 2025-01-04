import Header from "./components/Header/Header.jsx";
import TodoPages from "./components/ToDoPages/ToDoPages.jsx";
import GlobalStyle from "./styles/GlobalStyles.jsx";

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <TodoPages />
  </div>
);

export default App;
