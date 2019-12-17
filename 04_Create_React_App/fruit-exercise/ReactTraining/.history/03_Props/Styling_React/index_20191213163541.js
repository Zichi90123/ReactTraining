
class App extends React.Component {
  render() {
    return (
      <div >
        <h1>Slot Machines</h1>
        <div className="Machine">
        <Machine 
          s1="🍒"
          s2="🍒"
          s3="🍒"
        />
        </div>
        <div className="Machine">
        <Machine className="Machine"
          s1="🍒"
          s2="🍒"
          s3="🍊"
        />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

