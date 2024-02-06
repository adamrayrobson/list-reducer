import PropTypes from 'prop-types';
export default function Todo({ id, title, complete, dispatch, ACTION}) {
  return (
     <div key={id}>
          <span style={{ color: complete ? '#AAA' : '#000' }}>{title}</span>
          <button onClick={() => dispatch({ type: ACTION.TOGGLE_TODO, payload: id })}>Toggle</button>
          <button onClick={() => dispatch({ type: ACTION.DELETE_TODO, payload: id })}>Delete</button>
        </div>
  )
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  ACTION: PropTypes.object.isRequired,
};
