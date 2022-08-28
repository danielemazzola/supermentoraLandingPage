
const RegisterForm = () => {
  return (
    <section>
        <div className="bg-red-100 py-2 px-2">
            <h4 className="uppercase text-red-600 text-center font-bold text-xl description">Obtén tu regalo</h4>
            <p className="text-sm py-2 text-gray-600">Para obterner tu regalo es importante rellenar el formulario</p>
        </div>
        <fom className="flex flex-col py-5 px-2 sm:px-10 md:px-20">
            <div className="flex flex-col my-1">
                <label htmlFor="name" className="my-1">
                    Nombre
                </label>
                <input className="border rounded-lg border-gray-700" type="text" id="name" />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="email" className="my12">
                    E-mail
                </label>
                <input className="border rounded-lg border-gray-700" type="email" id="email" />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="phone" className="my12">
                    Teléfono
                </label>
                <input className="border rounded-lg border-gray-700" type="text" id="phone" />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="nick" className="my-1">
                    Usuario Instagram
                </label>
                <input className="border rounded-lg border-gray-700" type="text" id="nick" />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="check" className="my-1 text-red-900">
                    Estoy de acuerdo en que mis datos
                    <input type="checkbox" htmlForm="check"
                        className="mx-2"
                    />
                </label>
            </div>
            <input
                type="submit"
                value="REGALO"
                className="text-white font-bold bg-sky-400 py-2 mt-2 rounded hover:bg-sky-600 transition-colors"
            />
        </fom>
    </section>
  )
}

export default RegisterForm
