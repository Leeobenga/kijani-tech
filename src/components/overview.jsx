import cabbage from "/src/assets/cabbage-3722498.jpg"
import wallTunnel from "/src/assets/wall-tunnel-4181125_1280.jpg"
import planting from "/src/assets/planting-2839128.jpg"
import photovoltaic from "/src/assets/photovoltaic-system-2742302_1280.jpg"

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
                <p>Supporting smallholder farmers and rural communities in Kenya by promoting sustainable agricultural practices and innovative climate finance solutions. Through accessible financial models, renewable energy intergration and climate-smart technologies aiming to enhance food security, economic resilience and environmental sustainability to ensure no family is forced to migrate due to climate hardship</p>               
            </article>
        </div>
    )
}

export default Overview