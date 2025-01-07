import Header from './components/Header'
import Board from './components/Board'

const App = () => {
    return (
        <>
            <Header />
            <main className="flex flex-row justify-center">
                <Board />
            </main>
        </>
    )
}

export default App
