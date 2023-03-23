import { Fragment } from 'react'
import { Listbox as TwListbox, Transition } from '@headlessui/react'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import clsx from 'clsx'

const Listbox = props => {

  const { items, selected, setSelected, styles } = props

  return ( 
    <TwListbox value={selected} onChange={setSelected} className={clsx("h-12 inline-flex", styles.listbox)}>
      {({ open }) => (
        <div className="relative">
          <TwListbox.Button className={clsx("relative w-full", styles.button.normal, open ? styles.button.open : styles.button.unopen)}>
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </TwListbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <TwListbox.Options className={styles.options}>
              {items.map((item) => (
                <TwListbox.Option
                  key={item}
                  className={({ active }) =>
                    `relative cursor-pointer select-none h-12 flex items-center justify-center p-2 ${
                      active ? 'bg-selected-color rounded-10px' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium bg-selected-color rounded-10px' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </TwListbox.Option>
              ))}
            </TwListbox.Options>
          </Transition>
        </div>
      )}
      
    </TwListbox>
  )
}
export default Listbox