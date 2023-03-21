import { useEffect, useRef, useState } from "react";
import { formatTimer } from "../../../../helpers/formater";

const SycTimer = () => {

  const [sycTime, setSycTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function getSycTimer(timestamp) {
    clearInterval(intervalRef.current);
    setSycTime(timestamp);
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }

  let secondsPassed = 0;
  if (sycTime != null && now != null) {
    secondsPassed = (now - sycTime) / 1000;
  }

  useEffect(() => {
    let dataMarket = document.getElementById('market-size')
    if(dataMarket) {
      dataMarket.addEventListener('click', 
        () => getSycTimer(Date.now())
      )
    }
  }, [])
  return (
    <>
      <div>
        {formatTimer(now, sycTime, secondsPassed) ?
        <span className="pl-1"> {formatTimer(now, sycTime, secondsPassed)} ago</span> : <span className="pl-1">0 second ago</span>}
      </div>
    </>
  )
}

export default SycTimer