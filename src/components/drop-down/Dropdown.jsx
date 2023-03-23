import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '../../helpers/ultility'
import { Link, useLocation } from 'react-router-dom'
import { checkIsActive } from '../../helpers/router'
import clsx from 'clsx'

const Dropdown  = props => {

  const { item, subItems, styles } = props
  const { pathname } = useLocation()
  let isActive = checkIsActive(pathname, item.to)
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>        
        {
          subItems.length ?
            (
              <Menu.Button className={classNames("inline-flex w-full justify-center items-center rounded-md px-3 py-2", styles.button)}>
                <span className={clsx(styles.text, {'active': isActive})}>{item.name}</span>
                {subItems.length ? <ChevronDownIcon className="h-5 w-5 text-menu-arrow" aria-hidden="true" /> : <p className="h-5 w-5" />}
              </Menu.Button>
            ) : (
              <Link to={item.to}>
                <div className={classNames("inline-flex w-full justify-center items-center rounded-md px-3 py-2", styles.button)}>
                  <span className={clsx(styles.text, {'active': isActive})}>{item.name}</span>
                  {subItems.length ? <ChevronDownIcon className="h-5 w-5 text-menu-arrow" aria-hidden="true" /> : <p className="h-5 w-5" />}
                </div>
              </Link>
            )
        }
      </div>
      { subItems && 
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={classNames("absolute z-10", styles.items)}>
            { subItems.map((sub) => (
              <div key={sub.name} className="py-1">
                <Link to={sub.to}>
                  <Menu.Item className={classNames(styles.item)}>
                    {({ active }) => (
                      // eslint-disable-next-line
                      <div
                        href="#"
                        className={classNames(
                          active ? 'bg-menu-hover text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        {sub.name}
                      </div>
                    )}
                  </Menu.Item>
                </Link>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      }
    </Menu>
  )
}

export default Dropdown;