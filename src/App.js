import ChainProvider from "./chain/ChainProvider";
import AppRouters from "./routing/AppRouters";
import WalletProvider from "./wallet/WalletProvider";

function App() {
  return (
    <ChainProvider>
      <WalletProvider>
        <AppRouters />
      </WalletProvider>
    </ChainProvider>
  );
}
export default App;
