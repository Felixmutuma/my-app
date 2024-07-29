
import './App.css'

function App() {
  return (
    <>
    <div className='container'>
    <header>
      <nav>
        <h2 className='logo'>FELIX <span>JOHN</span></h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="">Services</a></li>
        </ul>
        <button className='btn'>Contact me</button>
      </nav>
    </header>
    <main>
      <section className='home'>
        <div className='home-content'>
          <h3>Hi, I am Felix <span>John</span></h3>
          <h3>Software developer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Itaque enim natus dolorum quidem inventore quasi sed atque quae voluptates ducimus 
            suscipit dolor porro ad rem nostrum libero consequatur, aspernatur architecto?
          </p>
          <div className="btn-box">
            <button className='btn-1'>Hire me</button>
            <button className='btn-1'>Let's talk</button>
          </div>

        </div>
        <div className="img-container">
          <img src="./src/assets/img1.jpeg" alt="img" />
        </div>
      </section>
    </main>
    {/* <footer>
      <div className="footer-container">
        <div className="social-icons">
          <ul>
            <li><a href=""><img className='icons' src="./src/assets/linkedIn.jpeg" alt="LInkedIn" /></a></li>
            <li><a href=""><img className='icons' src="./src/assets/github.jpeg" alt="GitHub" /></a></li>
            <li><a href=""><img className='icons' src="./src/assets/twitter.jpeg" alt="X" /></a></li>
          </ul>
        </div>
      </div>
    </footer> */}
    </div>
    </>
  )
}

export default App
