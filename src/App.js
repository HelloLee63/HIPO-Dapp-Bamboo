import { useEffect, useState } from "react";
import ChainProvider from "./chain/ChainProvider";
import GeneralProvider from "./layout/components/general-provider/GeneralProvider";
import SplashScreen from "./modules/splash-screen/SplashScreen";
import AppRouters from "./routing/AppRouters";
import WalletProvider from "./wallet/WalletProvider";
import ContractManagerProvider from "./web3/ContractManagerProvider";
import KnownTokensProvider from "./web3/KnownTokensProvider";
import ProtocolTokensProvider from "./web3/ProtocolTokensProvider";
import Web3Provider from "./web3/Web3Provider";

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 5000);
  }, []);
  
  return (
    <GeneralProvider>
      <ChainProvider>
        <WalletProvider>
          <KnownTokensProvider>
            <ProtocolTokensProvider>
              <Web3Provider>
                <ContractManagerProvider>
                  <SplashScreen isDataLoaded={isDataLoaded} />
                  {isDataLoaded && <AppRouters />} 
                </ContractManagerProvider>
              </Web3Provider>
            </ProtocolTokensProvider>
          </KnownTokensProvider>
        </WalletProvider>
      </ChainProvider>
    </GeneralProvider>
  );
}
export default App;
