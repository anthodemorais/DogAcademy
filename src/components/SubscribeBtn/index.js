import gift from './gift.png'
import './style.scss'

function SubscribeBtn() {

  return (
    <>
      <button className="subscribe-btn">
        <img src={gift} alt="gift" />
        Get your free course
      </button>
    </>
  )
}

export default SubscribeBtn