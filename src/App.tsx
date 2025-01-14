import Board from './components/Board'
import TaskFilter from './components/TaskFilter'
import { TaskProvider } from './contexts/TaskProvider'

const App = () => {
    return (
        <>
            <main className="flex h-screen flex-col items-center w-fit md:w-full md:overflow-hidden pb-5 xl:pb-10 px-2 xl:px-10 fullHd:px-0">
                <TaskProvider>
                    {/* w-full */}
                    <div className="self-start md:self-auto md:w-screen max-w-screen-fullHd mt-16 mb-[58px] flex flex-row justify-between">
                        <h1 className="text-white-87 text-3xl xl:text-[40px] font-bold  m-r-10 md:m-r-0">
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
