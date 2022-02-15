import { FaTimes } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <Row>
      <Col className="my-1 d-flex justify-content-between">
        <div className="d-flex flex-row">
          <Form.Check
            type="checkbox"
            id={task.id}
            onChange={() => onToggle(task.id)}
            className="mt-1 me-3"
          />
          <div
            className={`${
              task.done && 'text-decoration-line-through text-secondary'
            }`}
            onDoubleClick={() => onToggle(task.id)}
          >
            <h4>{task.task} </h4>
            <p>{task.notes}</p>
          </div>
        </div>
        <div className="ms-2">
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Task;
