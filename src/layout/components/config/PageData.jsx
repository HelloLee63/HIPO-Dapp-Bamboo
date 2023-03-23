export const navigation = [
  { 
    name: 'Dashboard', 
    href: '#', 
    current: true,
    subItems: [],
    to: '/dashboard'
  },
  { 
    name: 'Borrower', 
    href: '#', 
    current: false,
    subItems: [
      {
        name: 'Pledge', to: 'borrower/pledge'
      },
      {
        name: 'Borrow', to: 'borrower/borrow'
      },
      {
        name: 'Repay', to: '/borrower/repay'
      }
    ],
    to: '/borrower'
  },
  { 
    name: 'Lender', 
    href: '#', 
    current: false,
    subItems: [
      {
        name: 'lend', to: 'lender/lend'
      },
      {
        name: 'Withdraw', to: 'lender/withdraw'
      }
    ],
    to: '/lender'
  },
  { 
    name: 'Liquidity Provider', 
    href: '#', 
    current: false,
    subItems: [
      {
        name: 'Add Liquidity', to: 'provider/add'
      },
      {
        name: 'Remove Liquidity', to: 'provider/remove'
      }
    ],
    to: '/provider'
  },
]