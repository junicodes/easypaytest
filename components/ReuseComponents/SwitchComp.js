import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'

export default function SwitchComp({onGetSwitchAction}) {
  const [enabled, setEnabled] = useState(false)
  
  useEffect(() => {
    console.log(enabled)
    return onGetSwitchAction(enabled)
  }, [enabled])
  
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-700' : 'bg-gray-100'}
          relative inline-flex flex-shrink-0 h-[36px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[32px] w-[32px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  )
}
