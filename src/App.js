import ChainProvider from "./chain/ChainProvider";
import AppRouters from "./routing/AppRouters";
import WalletProvider from "./wallet/WalletProvider";
import KnownTokensProvider from "./web3/KnownTokensProvider";
import ProtocolTokensProvider from "./web3/ProtocolTokensProvider";

function App() {
  return (
    <ChainProvider>
      <WalletProvider>
        <KnownTokensProvider>
          <ProtocolTokensProvider>
            <AppRouters />
          </ProtocolTokensProvider>
        </KnownTokensProvider>
      </WalletProvider>
    </ChainProvider>
  );
}
export default App;
