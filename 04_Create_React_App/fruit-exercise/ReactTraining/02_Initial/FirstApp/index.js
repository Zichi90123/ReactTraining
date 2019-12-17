function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXD extends React.Component {
  render() {
    return (
      <div>
        <h1>My Current Mood is: {getMood()}</h1>
      </div>
    )
  }
}

ReactDOM.render(<JSXD/>, document.getElementById('root'))