
const App = () => {
    return (
        <div>
            <Person 
                name="Miko"
                age={ 1 }
                hobbies={ ["eat", "sleep", "play games"]}
            />
            <Person 
                name="Angel"
                age={ 9999 }
                hobbies={ ["Praying"]}
            />
            <Person 
                name="Stephano"
                age={ 56 }
                hobbies={ ["Demon Lord Role Playing", "Eating Souls"] }
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))