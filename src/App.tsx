import Header from './components/Header'
import Board from './components/Board'

const App = () => {
    return (
        <>
            <Header />
            <main className="max-w-screen-fullHd">
                <Board />
            </main>
        </>
    )
}

export default App
