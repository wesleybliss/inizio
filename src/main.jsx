import ReactDOM from 'react-dom/client'
import './index.css'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import App from './components/App/App'

dayjs.extend(utc)
dayjs.extend(timezone)

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
