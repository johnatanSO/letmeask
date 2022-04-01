import '../styles/auth.css'
import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Button from '../compontents/Button/Button'
import {useState} from 'react'
import {getDatabase, ref, push, set} from 'firebase/database'

function NewRoom() {
  const {user} = useAuth()
  const database = getDatabase()
  const navigate = useNavigate()

  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(e){
    e.preventDefault()

    if(newRoom.trim() === ''){
      return
    }
    const roomRef = ref(database, 'rooms')
    const firebaseRoom = await push(roomRef)
    set(firebaseRoom, {
      title: newRoom,
      authorId: user.id,
    })


    navigate(`/rooms/${firebaseRoom.key}`)
  }


  return (
    <div id="page-auth">
      <aside>
        <img src={"../assets/images/illustration.svg"}alt="Ilustração simbolizando perguntas e respostas." />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={"../assets/images/logo.svg"} alt="Logo letmeask" />
          <h2>Criar uma nova sala</h2>
         
          <form onSubmit={handleCreateRoom}>
            <input value={newRoom} onChange={(event)=>{setNewRoom(event.target.value)}} placeholder='Nome da sala...' type="text" />
            <Button>Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}

export default NewRoom