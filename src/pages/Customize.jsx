import './Customize.css'

const services = [
    'Stringing',
    'Racket Matching',
    'Racket Weight Adjustment',
    'Racket Balance Adjustment',
    'Racket Swing Weight Adjustment',
]

export default function Customize() {
    return (
        <div className='customize'>
            <header className='customize-header'>
                <h1>Customization</h1>
            </header>

            <section className='customize-content'>
                <div className='services-list'>
                    <h2>Services Offered</h2>
                    <ul>
                        {services.map((service) => (
                            <li key={service}>{service}</li>
                        ))}
                    </ul>
                </div>

                <div className='contact-box'>
                    <p>To get help with any of the above customizations, please send an email.</p>
                    <a href='mailto:filip.lagerqvist@hotmail.se' className='contact-btn'>
                        Send Request
                    </a>
                </div>
            </section>
        </div>
    )
}