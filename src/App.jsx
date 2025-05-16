import React from 'react'

function App() {
    return (
        <div className="h-screen bg-[url('../images/fundo.png')] bg-repeat justify-center items-center p-5">
            <header className="flex flex-col justify-center items-center">
                <img src="../images/capa.png" alt="Capa" width="60%" className="rounded-t-3xl"/>
                <div className="justify-center items-center bg-[#c5c5b2] w-[60%] py-1">
                    <nav>
                        <ul className="flex justify-center items-center gap-x-3 text-blue-950 font-bold text-3xl">
                            <li className="p-5">
                                <a href="#home" className="">HOME</a>
                            </li>
                            <h1>|</h1>
                            <li className="p-5">
                                <a href="#sobre" className="">BIOGRAFIA</a>
                            </li>
                            <h1>|</h1>
                            <li className="p-5">
                                <a href="#contato" className="">CONTATO</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="flex justify-center">
                <div className="justify-start items-start bg-white w-[60%] py-5 px-3">
                    <h1 className="text-2xl font-bold text-left text-[#8f8f79] mb-5">Biografia</h1>
                    <div className="space-y-5">
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            <footer>
                <div className="flex justify-center mt-4">
                    <h1 className="font-medium text-lg">Todos os direitos reservados</h1>
                </div>
            </footer>

        </div>

    )
}

export default App
