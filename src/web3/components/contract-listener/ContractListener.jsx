import { useCallback, useEffect, useState } from "react"
// import TxStatusModal from "../tx-status-modal/TxStatusModal"
// import UserRejectedModal from "../user-rejected-modal/UserRejectedModal"

const ContractListener = props => {

  const { contract, renderProgress, renderSuccess } = props

  const [userRejectedVisible, setUserRejected] = useState(false)

  const [txStatus, setTxStatus] = useState({
    visible: false,
    state: undefined,
    meta: undefined,
  })

  useEffect(() => {
    if (!contract) {
      return
    }

    function onHash(txHash, meta) {
      setTxStatus(prevState => ({
        ...prevState,
        visible: true,
        state: meta.state,
        meta,
      }))
    }

    function onSuccess(result, meta) {
      setTxStatus(prevState =>
        prevState.meta?.id === meta.id
          ? {
            ...prevState,
            state: meta.state,
          }
          : prevState,
        )
    }

    function onFail(error, meta) {
      if (error.code === 4001) {
        setUserRejected(true);
      } else {
        setTxStatus(prevState =>
          prevState.meta?.id === meta.id
          ? {
            ...prevState,
            state: meta.state,
          }
          : prevState,
          )
      }
    }

    contract.on('tx:hash', onHash)
    contract.on('tx:success', onSuccess)
    contract.on('tx:fail', onFail)

    return () => {
      contract.off('tx:hash', onHash)
      contract.off('tx:success', onSuccess)
      contract.off('tx:fail', onFail)
    }

  }, [contract])

  const handleUserRejectedCancel = useCallback(() => {
    setUserRejected(false)
  }, []);

  const handleStatusModalCancel = useCallback(() => {
    setTxStatus(prevState => ({
      ...prevState,
      visible: false,
      state: undefined,
      txHash: undefined,
    }))
  }, [])

  if (userRejectedVisible) {
    // return <UserRejectedModal onCancel={handleUserRejectedCancel} 
    //     errorText='You rejected the request.'
    //     buttonText='Dismiss'
    //   />
    return <></>
  }

  if (txStatus.visible) {
    return (
      // <TxStatusModal
      //   state={txStatus.state}
      //   txHash={txStatus.meta?.txHash}
      //   renderProgress={() => renderProgress?.(txStatus.meta)}
      //   renderSucess={() => renderSuccess?.(txStatus.meta)}
      //   onCancel={handleStatusModalCancel} 
      // />
      <></>
    )
  }

  return null
}

export default ContractListener