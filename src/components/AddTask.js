import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState('')
    const [notes, setNotes] = useState('')
    const [done, setDone] = useState(false)

    const onSubmit = (e) => {
      e.preventDefault()

      if(!task) {
        alert('Please add a task')
        return
      }

      onAdd({ task, notes, done })

      setTask('')
      setNotes('')
      setDone(false)
    }


  return (
    <Form className="my-3" onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Notes (optional)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add some notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="d-none">
        <Form.Control
          type="checkbox"
          value={done}
          onChange={(e) => setDone(e.currentTarget.checked)}
        />
      </Form.Group>

      <input className="btn btn-secondary" type="submit" value="Save Task" />
    </Form>
  );
};

export default AddTask;
