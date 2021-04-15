const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Kenny" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))