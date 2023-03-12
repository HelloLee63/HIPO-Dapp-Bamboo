import { useRef, useState } from "react";
import { formatDateTime } from "../../../../helpers/formater";

const SycTimer = () => {

  const [sycTime, setSycTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  // {formatDateTime(tx.returnValues.startTimestamp * 1_000) ?? '-'}

  console.log(formatDateTime(1678520644*1_000));

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
        {secondsPassed.toFixed(0)}
        <span className="pl-1">seconds ago</span>
      </div>
      <button onClick={() => getSycTimer(1678520644*1_000)} >Start</button>
      <button onClick={handleStop} >Stop</button>
    </>
  )
}

export default SycTimer