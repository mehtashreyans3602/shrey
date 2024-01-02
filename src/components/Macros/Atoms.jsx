export const Heading = ({ textValue }) => {
    return (
            <section className="flex items-center justify-center">
                <h1 className=" p-4 border-b-4 border-blue-800 text-white hover:border-white">{textValue}</h1>
            </section>
    )
}