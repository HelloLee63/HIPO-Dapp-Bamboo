import { useRef, useState } from "react";
import { formatTimer } from "../../../../helpers/formater";


const SycTimer = () => {

  const [sycTime, setSycTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  // {formatDateTime(tx.returnValues.startTimestamp * 1_000) ?? '-'}

  console.log(Date.now());
  

  function getSycTimer(timestamp) {
  // function getSycTimer() {
    clearInterval(intervalRef.current);
    setSycTime(timestamp);
    // setSycTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (sycTime != null && now != null) {
    secondsPassed = (now - sycTime) / 1000;
  }

  return (
    <>
      <div>
        {formatTimer(now, sycTime, secondsPassed)}
        <span className="pl-1"> ago</span>
      </div>
      <button onClick={() => getSycTimer(Date.now()-8*1_000)} >Start</button>
      <button onClick={handleStop} >Stop</button>
    </>
  )
}

export default SycTimer