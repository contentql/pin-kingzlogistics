const Test1_1 = ({ title, sub_title, button_text }: any) => {
  return (
    <div>
      <div className='brand green-bg pt-35 pb-35'>{title}</div>
      <div>{sub_title}</div>
      <button>{button_text}</button>
    </div>
  )
}

export default Test1_1
