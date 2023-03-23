import { useRef, useState } from "react";
import { useDebounce } from "rooks";

export function useReload() {
  const [version, setVersion] = useState(0)
  const reloadRef = useRef(
    useDebounce(() => {
      setVersion(preState => preState + 1)
    }, 400),
  )

  return [reloadRef.current, version]
}