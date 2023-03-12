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
        name: 'Your Profile', href: '#'
      },
      {
        name: 'Settings', href: '#'
      },
      {
        name: 'Sign out', href: '#'
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
        name: 'Your Profile', href: '#'
      },
      {
        name: 'Settings', href: '#'
      },
      {
        name: 'Sign out', href: '#'
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
        name: 'Your Profile', href: '#'
      },
      {
        name: 'Settings', href: '#'
      },
      {
        name: 'Sign out', href: '#'
      }
    ],
    to: '/liquidityprovider'
  },
]