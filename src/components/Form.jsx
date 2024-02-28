import PropTypes from 'prop-types';
export default function Form({
  onSubmit,
  description,
  onDescriptionChange,
  qty,
  onQtyChange
}) {
  return (
    <>
      <form
        onSubmit={
          (ev) => {
            ev.preventDefault();
            onSubmit(description, qty,);
          }
        }>

        <textarea
          value={ description }
          onChange={ (ev) => {
            onDescriptionChange(ev.target.value);
          } }
        />

        <input
          type="number"
          placeholder="#"
          value={ qty }
          onChange={ (ev) => {
            onQtyChange(ev.target.value);
          } } />

        <button type="submit">submit</button>
      </form>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  qty: PropTypes.number.isRequired,
  onQtyChange: PropTypes.func.isRequired,
};
