
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"
import "./Graph.css";

// REGISTER SCALES (important fix)
ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
)



function Graph({ data }) {
  if (!data || data.length === 0) {
    return <p>No Data Available</p>
  }

  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: "Match Score",
        data: data.map(d => d.score),
        backgroundColor: "rgba(75, 102, 192, 0.6)"
      }
    ]
  }

  return (
    <div className="graph-container">
      <h2 className="graph-title">Resume Match Score</h2>
      <Bar data={chartData} />
    </div>
  )
}

export default Graph




// import {
//  Chart as ChartJS,
//  CategoryScale,
//  LinearScale,
//  BarElement,
//  Title,
//  Tooltip,
//  Legend
// } from "chart.js"

// import { Bar } from "react-chartjs-2"

// // REGISTER SCALES (important fix)
// ChartJS.register(
//  CategoryScale,
//  LinearScale,
//  BarElement,
//  Title,
//  Tooltip,
//  Legend
// )

// function Graph({ data }) {

//  if (!data || data.length === 0) return null

//  const chartData = {
//   labels: data.map(d => d.name),
//   datasets: [
//    {
//     label: "Match Score",
//     data: data.map(d => d.score)
//    }
//   ]
//  }

//  return <Bar data={chartData} />
// }

// export default Graph