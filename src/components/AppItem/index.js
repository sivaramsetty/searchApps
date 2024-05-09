// Write your code here
import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem
  return (
    <div className="imgCon">
      <li className="listImg">
        <img src={imageUrl} alt={appName} className="logos" />
        <p>{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
