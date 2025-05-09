
const Interests_card = (props) => {
  return (
    <div className="sm:flex-row items-center justify-center  p-4 m-2 rounded-md h-auto sm:h-48  w-full max-w-sm sm:max-w-xl ">
      <div className="flex justify-center items-center w-16 h-16">
        <img src={props.image} alt="" className="w-12 h-auto" />
      </div>
      <div>
      <h3 className="text-xl font-semibold text-[#555555]">{props.title}</h3>

        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Interests_card
