import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/solid'
import React, {useState, useEffect} from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [userId, setUserId] = useState('')
  useEffect(() => setUserId(typeof window !== 'undefined' ? localStorage.getItem('id') : null), [])

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button >
          
          <UserCircleIcon className="icon" />
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          {userId != null && 
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Profile
                </a>
              )}
            </Menu.Item>}
          {userId == null && 
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/signin"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Sign in
                </a>
              )}
            </Menu.Item>}
            {userId == null && 
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/signup"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Create account
                </a>
              )}
            </Menu.Item>}
            {userId != null && 
              <Menu.Item>
                {({ active }) => (
                <a
                  href="/signout"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Sign out
                </a>
              )}
              </Menu.Item>}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}