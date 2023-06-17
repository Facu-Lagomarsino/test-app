import "./main.css";
import Statistics from "../../Assets/images/bestSelling.png"
import BarChart from "../../Assets/images/barChart.png"
import LinesChart from "../linesChart/LinesChart";
import PiesChart from "../piesChart/PiesChart";
import BarsChart from "../barsChart/BarsChart";
import Slider from "../swiperjs/Slider";
import slides from "../../Json/mock.json";


export default function Main() {
    return (
        <>

            <main className="main">
                <div className="left">
                    <div className="section-statistics">
                        <img src={Statistics} alt="Statistics" />
                    </div>
                    <div className="section-graph">
                        <div className="chart">
                            <LinesChart />
                        </div>
                        <div className="chart">
                            <BarsChart />
                        </div>
                        <div className="chart">
                            <BarsChart />
                        </div>
                        <div className="chart">
                            <PiesChart />                       
                        </div>
                    </div>
                  
                </div>
                <div className="right">

                    <div className="bar-chart">
                        <img src={BarChart} alt="BarsChart" />
                    </div>

                    <Slider slides={slides} />

                </div>
                
            </main>
           
        </>
    );
}
