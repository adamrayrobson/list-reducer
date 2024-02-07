import Item from './Item';
import PropTypes from 'prop-types';

export default function List({ list, handleCheckedById }) {
  console.log('List', { list });
  return (
    <>
      <ol style={ { height: '500px', border: 'red solid 3px' } }>
        {
          list.map(item => {

            return <li key={ item.id }>
              <Item item={ item }
                handleChecked={
                  checked => {
                    handleCheckedById(
                      item.id,
                      checked);
                  }
                } />
            </li>;
          })
        }
      </ol>
    </>
  );
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  handleCheckedById: PropTypes.func.isRequired
};

