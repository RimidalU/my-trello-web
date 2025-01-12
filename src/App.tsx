import Board from './components/Board'
import TaskFilter from './components/TaskFilter'
import { TaskProvider } from './contexts/TaskProvider'

const App = () => {
    return (
        <>
            <main className="flex h-full flex-col items-center overflow-scroll md:w-screen md:overflow-hidden pb-5 xl:pb-10 px-2 xl:px-10 fullHd:px-0">
                <TaskProvider>
                    <div className="w-full max-w-screen-fullHd mt-16 mb-[58px] flex flex-row justify-between">
                        <h1 className="text-foregroundBold text-3xl xl:text-[40px] font-bold">
                            Your tasks
                        </h1>
                        <TaskFilter />
                    </div>
                    <Board />
                </TaskProvider>
            </main>
        </>
    )
}

export default App
