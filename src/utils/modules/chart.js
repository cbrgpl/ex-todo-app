import {
  Chart,
  BarElement,
  LinearScale,
  CategoryScale,
  BarController,
  Legend,
  Title,
  Tooltip
}  from 'chart.js'

Chart.register(
  BarElement,
  LinearScale,
  CategoryScale,
  BarController,
  Legend,
  Title,
  Tooltip
)


export {
  Chart
}