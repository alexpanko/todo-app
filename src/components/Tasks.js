import Container from 'react-bootstrap/Container';

import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <Container className="my-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </Container>
  );
};

export default Tasks;
