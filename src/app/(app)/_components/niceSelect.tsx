import { useCallback, useRef, useState } from 'react'
import useClickAway from 'react-use/lib/useClickAway'

const NiceSelect = ({
  options,
  defaultCurrent,
  placeholder,
  className,
  onChange,
  name,
}: any) => {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(options[defaultCurrent])
  const onClose = useCallback(() => {
    setOpen(false)
  }, [])
  const ref = useRef(null)

  useClickAway(ref, onClose)

  const currentHandler = (item: any) => {
    setCurrent(item)
    onChange(item, name)
    onClose()
  }

  return (
    <div
      className={`nice-select ${className} ${open && 'open'}`}
      role='button'
      tabIndex={0}
      onClick={() => setOpen(prev => !prev)}
      onKeyPress={e => e}
      ref={ref}>
      <span className='current'>{current?.text || placeholder}</span>
      <ul
        className='list'
        role='menubar'
        onClick={e => e.stopPropagation()}
        onKeyPress={e => e.stopPropagation()}>
        {options?.map((item: any) => (
          <li
            key={item.value}
            data-value={item.value}
            className={`option ${item.value === current?.value && 'selected focus'}`}
            role='menuitem'
            onClick={() => currentHandler(item)}
            onKeyPress={e => e}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NiceSelect
