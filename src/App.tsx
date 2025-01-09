// import Header from './components/Header'
import Board from './components/Board'

const App = () => {
    return (
        <>
            {/* <Header /> */}
            <main className="flex flex-col items-center">
                <div className="w-full max-w-screen-fullHd mt-16 mb-[58px]">
                    <h1 className="max-w-screen-fullHd text-foregroundBold text-[40px] font-bold">
                        Your tasks
                    </h1>
                </div>
                <Board />
            </main>
        </>
    )
}

export default App
