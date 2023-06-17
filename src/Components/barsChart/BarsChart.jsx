import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var benefits = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

var mysoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : -25,
            max : 100
        },
        x: {
            ticks: { color: "#FFFFFF"}
        }
    }
};

var mydata = {
    labels: months,
    datasets: [
        {
            label: 'Benefits',
            data: benefits,
            backgroundColor: '#13B497'
        }
    ]
};

export default function Bars() {
    return <Bar data={mydata} options={mysoptions} />
}
