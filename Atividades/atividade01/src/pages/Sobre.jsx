
export const Sobre = () => {
    return (
        <div className="mt-4 border-2 border-sky-600 rounded-md p-4">
            <div>
                <div className="bg-sky-600 w-28 h-28 rounded-full mx-auto"></div>
                    <h2 className="text-center text-2xl my-4">Minhas redes:</h2>
                <div className="flex justify-center gap-4">
                    <div className="flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo github" className="w-8"/>
                        <a href="https://github.com/danilozxz" target="_blank" className="underline">Github</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="https://cdn.icon-icons.com/icons2/3041/PNG/512/linkedin_logo_icon_189225.png" alt="logo linkedin" className="w-8"/>
                        <a href="https://www.linkedin.com/in/dev-danilo-fernandes/" target="_blank" className="underline">Linkedin</a>
                    </div>
                    
                </div>
                <p>
                    Sou desenvolvedor front-end e estudante do 3º período de Sistemas para internet pelo programa embarque digital da prefeitura do Recife.
                    Procuro sempre estar estudando para aumentar o meu nível de conhecimento nesse vasto universo da tecnologia.
                    Gosto muito de aprender e isso faz com que eu passe a maior parte do meu tempo em busca de solidificar os meus conhecimentos e ir atrás de novos.
                </p>
            </div>
        </div>
    )
}