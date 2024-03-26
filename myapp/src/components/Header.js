import logoshopping from "../components/images/logoshopping.jpg";

export default function header(){
    return(
        <header>
            <img src={logoshopping} alt="shopping bag"/>
            <h1>Product Catlog</h1>        
            </header>
    );
}