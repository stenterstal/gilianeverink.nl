import './App.css'
import Portrait from './assets/self.jpeg'

function App() {

  return (
      <>
        <main>
            <div className="portrait">
                <img src={Portrait} alt=""/>
            </div>
            <div className="info">
                <main>
                    <h1>Gilian Everink</h1>
                    <h3>Student HBO-V</h3>
                    <div className="details">
                        <p>Enschede - Groningen</p>
                        <p>mail@gilianeverink.nl</p>
                    </div>
                </main>
                <footer>
                    <a href=""><button className={"primary-button"}>Download CV</button></a>
                    <a href="https://nl.linkedin.com/in/gilian-everink-937839242"><button>LinkedIn</button></a>
                    <a href="mailto:mail@gilianeverink.nl"><button>Mail</button></a>
                </footer>
            </div>
        </main>
          <p className={"made-by"}>Made by <a href="https://www.stenterstal.com">Sten</a></p>
      </>
  )
}

export default App
