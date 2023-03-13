
const TestButton = props => {

  const { connector } = props
  
  // function handleConnectorSelect(connector) {
  //   console.log(`${connector.name} is clicked`);
  // }

  function handleConnectorSelect() {
    console.log('test2 is clicked');
  }

  return (
    <button onClick={handleConnectorSelect}>{connector.name}</button>
  )
}

export default TestButton