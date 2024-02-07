import { useListContext } from "../hooks/useListContext"
import {
  quantityChangeAction,
  submitFormAction,
  textChangeAction
} from "../state/listActions";
import { createItem } from "../services/list";


export default function Create() {
  const { state, dispatch } = useListContext()

  const onTextChange = (e) => {
    e.preventDefault();
    dispatch(textChangeAction(e.target.value))
  }

  const onQuantityChange = (e) => {
    e.preventDefault();
    dispatch(quantityChangeAction(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(submitFormAction(state.text, state.quantity))
    const newItem = {
      text: state.text,
      quantity: state.quantity,
      completed: false,
    }
    const res = await createItem(newItem);
    return res;
  }

  return (
   <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>

        <label htmlFor="text">
          Text
          <input
            type="text"
            name="text"
            value={state.text}
            onChange={onTextChange}
          />
        </label>

        <label htmlFor="number">
          Number
          <input
            type="number"
            name="quantity"
            value={state.quantity}
            onChange={onQuantityChange}
          />
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  )
}
