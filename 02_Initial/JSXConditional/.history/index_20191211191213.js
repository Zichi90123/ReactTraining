function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? 'Congrats!' : 'Unlucky'}</p>
                {num === 7 &&
                    <img src="https://i.giphy.com/media/nXx0jZrbnbRxS/giphy.webp" />
                }
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))