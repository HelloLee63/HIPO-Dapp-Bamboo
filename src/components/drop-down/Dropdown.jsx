import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '../../helpers/ultility'

const Dropdown  = props => {

  const { item, subItems, styles } = props
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={classNames("inline-flex w-full justify-center items-center rounded-md px-3 py-2", styles.button)}>
          <span className={classNames(styles.text)}>{item.name}</span>
          <ChevronDownIcon className="h-5 w-5 text-menu-arrow" aria-hidden="true" />
        </Menu.Button>
      </div>
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
              <Menu.Item className={classNames(styles.item)}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {sub.name}
                  </a>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown;