import React from 'react'

function home() {
  return (
    <div>
      <aside>
        <img src={"../assets/images/illustration.svg"}alt="Ilustração simbolizando perguntas e respostas." />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div>
          <img src={"../assets/images/logo.svg"} alt="Logo letmeask" />
          <button>
            <img src={"./assets/images/google-icon.svg"} alt="Login com google" />
          Crie sua sala com Google
          </button>
          <div>Ou entre em uma sala</div>
          <form>
            <input placeholder='Digite o código da sala...' type="text" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default home