import PropTypes from 'prop-types';
export default function Item({
  item,
  handleChecked,
}) {
  return (
    <>
      <section style={ { display: 'flex' } }>
        <input
          style={ { marginRight: '40px' }}
          type="checkbox"
          value={ item.checked }
          onChange={ () => {
            handleChecked(!item.checked);
          }
          } />
        <p
          style={ {
            marginRight: '40px'
          } }
          className="description"
        >
          { item.description }
        </p>

        <p
          style={ {
            marginRight: '40px'
          } }
          className="qty"
        >
          { item.qty }
        </p>
      </section>
    </>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  handleChecked: PropTypes.func.isRequired,
};
