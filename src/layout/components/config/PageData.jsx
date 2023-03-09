export const navigation = [
  { 
    name: 'Dashboard', 
    href: '#', 
    current: true,
    subItems: []
  },
  { 
    name: 'Borrower', 
    href: '#', 
    current: false,
    subItems: [
      {
        name: 'Your Profile', href: '#'
      },
      {
        name: 'Settings', href: '#'
      },
      {
        name: 'Sign out', href: '#'
      }
    ]
  },
  { 
    name: 'Lender', 
    href: '#', 
    current: false,
    subItems: [
      {
        name: 'Your Profile', href: '#'
      },
      {
        name: 'Settings', href: '#'
      },
      {
        name: 'Sign out', href: '#'
      }
    ]
  },
  { 
    name: 'Liquidity Provider', 
    href: '#', 
    current: false,
    subItems: [
      {
        name: 'Your Profile', href: '#'
      },
      {
        name: 'Settings', href: '#'
      },
      {
        name: 'Sign out', href: '#'
      }
    ]
  },
]