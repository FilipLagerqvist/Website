import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <header className='home-header'>
                <h1>Filip's stringing & racket customization</h1>
                <p className='home-subtitle'>Stockholm, Sweden</p>
            </header>

            <section className='features'>
                <figure>
                    <img src="/images/serve 2.jpg" alt="Filip's serve" />
                    <figcaption>Filip's serve</figcaption>
                </figure>
                <figure>
                    <img src="/images/IMG_0013-0.00.07.476.jpg" alt="Filip's forehand" />
                    <figcaption>Filip's forehand</figcaption>
                </figure>
            </section>

            <section className='lower-section'>
                <p>Professional stringing & racket customization services in Stockholm.</p>
            </section>

            <footer className='home-footer'>Stockholm, Sweden</footer>
        </div>
    )
}