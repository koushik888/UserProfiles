import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://www.pinterest.com/pin/3588874696775081/',
    name: 'Leo Dass',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://www.pinterest.com/pin/1058416349924958097/',
    name: 'Surya',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://www.pinterest.com/pin/151855818677393007/',
    name: 'Mari',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://www.pinterest.com/pin/4222193393458277/',
    name: 'Karthik',
    role: 'Technical Architect',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} />
      ))}
    </ul>
  </div>
)
export default App
