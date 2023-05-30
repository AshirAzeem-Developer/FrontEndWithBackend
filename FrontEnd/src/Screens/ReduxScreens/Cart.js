import { useSelector } from "react-redux"

export default function Cart() {
    const dataRecieved = useSelector((a) => a.Products);
    console.log(dataRecieved);

    return (
        <>
            <h1>Cart</h1>
            {
                dataRecieved.map((x, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <img src={x.image} width={250} alt={x.title} />
                            </div>
                            <div>
                                <h3>{x.category}</h3>
                            </div>
                            <div>
                                <h3>{x.title}</h3>
                            </div>
                            <div>
                                <h3>{x.price}</h3>
                            </div>
                            {/* <div>
                    <button onClick={()=>CartData(x)}>
                        Add to Cart
                    </button>
                </div> */}

                        </div>
                    )

                })

            }

        </>

    )
}