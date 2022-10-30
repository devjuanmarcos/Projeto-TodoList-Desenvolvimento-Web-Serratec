import { Container } from '@mui/material';
import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "lem"}}>
      <Form />
      <TodoItem />
    </Container>
  );
}

export default App;
