function App() {
  return (
    <div>
      <div className="message">
        <div>
          <p>
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <h5>Ada Lovelace</h5>
        </div>
        <button>Refresh</button>
      </div>

      <main>
        <section className="clock">
          <h1>
            <span>icon</span> GOOD MORNING, IT’S CURRENTLY{' '}
            <span>11:37 bst</span> <span>IN LONDON, UK</span>
          </h1>
          <button>MORE</button>
        </section>

        <section className="info">
          <ul>
            <li>
              <h2>Current timezone</h2>
              <p>Europe/London</p>
            </li>
            <li>
              <h2>Day of the year</h2>
              <p>295</p>
            </li>
            <li>
              <h2>Day of the week</h2>
              <p>5</p>
            </li>
            <li>
              <h2>Week number</h2>
              <p>42</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
