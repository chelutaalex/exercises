


const ItemList = ({macchine}) => {

    return(
        <>
            <ul>
                {
                    macchine.map((car, index) => (
                        <li key={index}>{car}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ItemList