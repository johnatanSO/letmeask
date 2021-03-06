import '../styles/auth.css'
import {useNavigate} from 'react-router-dom'
import Button from '../compontents/Button/Button'
import useAuth from '../hooks/useAuth'

function Home() {
  const navigate = useNavigate()
  const {user, signInWithGoogle} = useAuth()


  async function handleJoinRoom() {

  }

  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle()
    }
    navigate('/rooms/new')
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
          
          <button onClick={handleCreateRoom} className="loginGoogle">
            <img src={"./assets/images/google-icon.svg"} alt="Login com google" />
          Crie sua sala com Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input placeholder='Digite o código da sala...' type="text" />
            <Button>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home