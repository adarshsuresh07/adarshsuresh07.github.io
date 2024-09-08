export default function Header() {

    function rotateCards(){
        const elements = document.getElementsByClassName("flip");
        for (let i = 0; i < elements.length; i++) {
            console.log(elements.item(i));
            elements.item(i).setAttribute("style","transform: rotateY(-180deg);")
        }
    }

    return (
        <header class="card header" style={{ '--card-width': '100%' }}>
            <name>Adarsh S</name>
            <row class="" onClick={rotateCards}>
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Personal</a>
            </row>
        </header>
    )
}