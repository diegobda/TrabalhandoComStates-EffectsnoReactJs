export default function Counter(){
    let quantity = 10;

    // função para acrecentar item de maneira
    function AddQuantity(){
        quantity = quantity + 1;
        document.getElementById("counter-box").innerHTML = quantity;
 }

    return(
        <>
        <h1 id="counter-box">{quantity}</h1>
        <button onClick={AddQuantity}>Aumentar</button>
        </>

    );
}

