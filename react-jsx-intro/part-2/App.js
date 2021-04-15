
const App = () => {
    return (
        <div>
            <Tweet
                name="Mike Jones"
                username="Bobby Flay"
                date={new Date().toDateString()}
                message="I love bunnies!"
            />
            <Tweet
                name="Jessica Nguyen"
                username="Angel Fob"
                date={new Date().toDateString()}
                message="Why you do this to me?!?!"
            />
            <Tweet
                name="Steven Delatorre"
                username="Jake Bell"
                date={new Date().toDateString()}
                message="I need to throw fish."
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))