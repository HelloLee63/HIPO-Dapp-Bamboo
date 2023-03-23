export const financingCenterAbi =  
  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "liquidityId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "duration",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "liquidityProvider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "principalAmount",
          "type": "uint256"
        }
      ],
      "name": "AddLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "borrwoAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "outputAmount",
          "type": "uint256"
        }
      ],
      "name": "Borrow",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "lender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lendAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "interestAmount",
          "type": "uint256"
        }
      ],
      "name": "Lend",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "pledgor",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "collateralId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "collateralToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateralTokenId",
          "type": "uint256"
        }
      ],
      "name": "Pledge",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "lender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "creditId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lendAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "interestAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reclaimAmount",
          "type": "uint256"
        }
      ],
      "name": "Reclaim",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "liquidityId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "liquidityProvider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "removeAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "principalAmount",
          "type": "uint256"
        }
      ],
      "name": "RemoveLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "debtId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "Repay",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "FINANCING_POOL_REVISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "liquidityId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "add",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "liquidityId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "permitV",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "permitR",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "permitS",
          "type": "bytes32"
        }
      ],
      "name": "addWithPermit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralToken",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "borrowAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minOutputAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowByFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "subCollateralToken",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "borrowAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minOutputAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowByNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "collateralNFTAssetOfIndex",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        }
      ],
      "name": "collateralNFTOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getDebtToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "lendAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minInterestAmount",
          "type": "uint256"
        }
      ],
      "name": "lend",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "pledgeFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "permitV",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "permitR",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "permitS",
          "type": "bytes32"
        }
      ],
      "name": "pledgeFTWithPermit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "collateralId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "pledgeNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "collateralId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "permitV",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "permitR",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "permitS",
          "type": "bytes32"
        }
      ],
      "name": "pledgeNFTWithPermit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "creditId",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "toDuration",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "interestAmount",
          "type": "uint256"
        }
      ],
      "name": "reclaim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "collateralTokenId",
          "type": "uint256"
        }
      ],
      "name": "redeemNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "liquidityId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "remove",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        }
      ],
      "name": "removeCollateralNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralNFT",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "subCollateralToken",
          "type": "address"
        }
      ],
      "name": "removeCollateralNFTSubToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "debtId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "repay",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "reserveByAsset",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "reservePool",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "debtToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "creditToken",
              "type": "address"
            }
          ],
          "internalType": "struct DataStructs.Reserve",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "collateralNFT",
          "type": "address"
        }
      ],
      "name": "setCollateralNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralNFT",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "subCollateralToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "configMap",
          "type": "uint256"
        }
      ],
      "name": "setCollateralNFTSubToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "duration",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "interestToken",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "interestPoolFee",
          "type": "uint24"
        },
        {
          "internalType": "address",
          "name": "interestPool",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "reservePool",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "debtToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "creditToken",
          "type": "address"
        }
      ],
      "name": "setReserve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        }
      ],
      "name": "slotById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "duration",
              "type": "uint32"
            }
          ],
          "internalType": "struct DataStructs.Slot",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "index",
          "type": "uint16"
        }
      ],
      "name": "slotIdByIndex",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "supply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "slotId",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "permitV",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "permitR",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "permitS",
          "type": "bytes32"
        }
      ],
      "name": "supplyWithPermit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalCollateralNFTAssets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSlots",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]