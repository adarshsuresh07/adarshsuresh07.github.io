import Sukuna from "../assets/img/pink2.jpg"
import Header from "./Header"
import Aboutme from "./Aboutme"
import Stats from "./Stats"
import OneLiner from "./OneLiner"
import ContactMe from "./Contactme"

export default function Landing() {

    return (
        <main className="container">
            <main className="grid-container">
                <main className="grid-row" style={{ '--row-height': '10%' }}>
                    <Header />
                </main>
                <main className="grid-row" style={{ '--row-height': '90%' }}>
                    <main className="grid-col">
                        <main className="grid-row" style={{ '--row-height': '60%' }}>
                            <section className="card flip" style={{ '--card-width': '70%' }}>
                                <OneLiner/>
                            </section>
                            <section className="card profile flip" style={{ '--card-width': '30%' }}>
                                <img src={Sukuna} alt="Julia Huang" />
                            </section>
                        </main>
                        <main className="grid-row" style={{ '--row-height': '40%' }}>
                            <section className="card description flip" style={{ '--card-width': '50%' }}>
                                <Aboutme />
                            </section>
                            <section className="card contact flip" style={{ '--card-width': '50%' }}>
                                <p>Have some questions?</p>
                                <a href="#">Contact me</a>
                            </section>
                        </main>
                    </main>
                    <main className="grid-col" style={{ '--col-width': '30%' }}>
                        <main className="grid-row" style={{ '--row-height': '85%' }}>
                            <section className="card project-1 flip" style={{ '--card-width': '100%' }}>
                                <ContactMe/>
                            </section>
                        </main>
                        <main className="grid-row" style={{ '--row-height': '15%' }}>
                            <row>
                                <Stats />
                            </row>
                        </main>
                    </main>
                </main>
            </main>
        </main>
    )
}