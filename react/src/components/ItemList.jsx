


const ItemList = ({macchine}) => {

    return(
        <>
            <ul>
                {
                    macchine.map((macchina, index) => (
                        <li key={index}>{macchina}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ItemList