import React, {useContext} from 'react'
import '../styles/auth.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'


import Button from '../compontents/Button/Button'

function NewRoom() {

  const {user, signInWithGoogle} = useContext(AuthContext)

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
          {user &&
            <h1>{user.name}</h1>
          }
          <h2>Criar uma nova sala</h2>
         
          <form>
            <input placeholder='Nome da sala...' type="text" />
            <Button>Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}

export default NewRoom