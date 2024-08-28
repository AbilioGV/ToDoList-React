import { useState } from 'react'
import './App.css'
import { Plus } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import { Check } from 'lucide-react'
import { X } from 'lucide-react'

function App() {


  const [item, setItem] = useState("")
  const [items, setItems] = useState([])

  function Submit(e) {
    e.preventDefault()

    const newItem = { id: item, completed: false }
    setItems([...items, newItem])
    setItem("")
  }

  function deleteItem(itemId) {

    const newItems = items.filter(item => item.id !== itemId)
    setItems(newItems)
  }

  function completeItem(itemId) {

    const findItem = items.find(item => item.id === itemId)
    findItem.completed = !findItem.completed
    const newItems = items.filter(item => item.id !== itemId)
    setItems([...newItems, findItem])

  }

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={Submit}>
        <input type='=text' placeholder='Digite o item' value={item} onChange={e => setItem(e.target.value)} />
        <button type='submit'><Plus size={16}/></button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => completeItem(item.id)}>
              {item.completed ? (
                <X size={16}/>
              ):(
                <Check size={16}/>
              )}
            </button>
            {item.id}
            <button onClick={() => deleteItem(item.id)}><Trash2 size={16}/></button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App