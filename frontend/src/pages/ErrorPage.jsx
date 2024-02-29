import errorGriffin from '../assets/errorgriffin.png'

export default function ErrorPage(props) {
  return (
    <div className='flex flex-col items-center bg-red-600'>
        <h1 className="font-bold text-5xl">{props.errorValue}</h1>
        <img className="w-screen h-screen" src={errorGriffin} alt="" />
    </div>
  )
}
