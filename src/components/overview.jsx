import cabbage from "/src/assets/cabbage-3722498.webp"
import wallTunnel from "/src/assets/wall-tunnel-4181125_1280.webp"
import planting from "/src/assets/planting-2839128.webp"
import photovoltaic from "/src/assets/photovoltaic-system-2742302_1280.webp"

const Overview = () => {
    return (
        <div className="overview"> 
            <div className="stripes"></div>
            <div className="slideshow">
                <div className="slide">
                    <img src={cabbage} alt="crops" />
                </div>
                <div className="slide">
                    <img src={wallTunnel} alt="greenhouse" />
                </div>
                <div className="slide">
                    <img src={planting} alt="greenhouse-crops" />
                </div>
                <div className="slide">
                    <img src={photovoltaic} alt="solar-panel" />
                </div>
            </div>  
            <div className="second-stripe"></div>                      
            <article className="mission">
                <h3>Mission</h3>
                <h1>Smart farming for a Sustainable Future</h1>
                <p>
                    Empowering smallholder farmers and rural communities in Kenya by promoting sustainable agricultural 
                    practices and innovative climate finance solutions. By integrating renewable energy, AI-driven insights, 
                    and climate-smart technologies, we create accessible financial models that strengthen food security, 
                    boost economic resilience, and advance environmental sustainability ensuring no family is forced to migrate due to climate hardship.
                </p>               
            </article>
        </div>
    )
}

export default Overview