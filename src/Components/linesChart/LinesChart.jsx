import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var benefits = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

var mydata = {
    labels: months,
    datasets: [ // Each of the lines of the graph
        {
            label: 'Benefits',
            data: benefits,
            tension: 0.5,
            fill : true,
            borderColor: "#FFFFFF",
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Other line',
            data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
            borderColor: 'rgba(220, 200, 150)',
        },
    ],
};

var myoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={mydata} options={myoptions}/>
}
