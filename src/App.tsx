import Board from './components/Board'
import { TaskProvider } from './contexts/TaskProvider'

const App = () => {
    return (
        <>
            <main className="flex h-full flex-col items-center overflow-hidden pb-10">
                <div className="w-full max-w-screen-fullHd mt-16 mb-[58px]">
                    <h1 className="max-w-screen-fullHd text-foregroundBold text-[40px] font-bold">
                        Your tasks
                    </h1>
                </div>
                <TaskProvider>
                    <Board />
                </TaskProvider>
            </main>
        </>
    )
}

export default App
