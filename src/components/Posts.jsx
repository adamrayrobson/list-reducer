import { useList } from "../hooks/useList"
export default function Posts() {
  const { state } = useList()
  console.log('LISt', state.list)


  return (
    <div>{
      state.list.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>
            <p>{item.quantity}</p>
            <p>{item.completed ? 'Completed' : 'Not Completed'}</p>
          </div>
        )
    })}</div>
  )
}
