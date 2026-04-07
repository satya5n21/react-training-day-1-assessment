import Header from './components/Header'
import './App.css'

// Main App component ----------
function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <Header />
      <main>
        <h1>My AI Journey Begins</h1>
        <section className="assignments">
          <div>
            <h3>Assignment 1: Dynamic Year</h3>
            <p>The current year is: <strong>{currentYear}</strong></p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
