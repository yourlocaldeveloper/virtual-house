export default function Homes({ homes }) {
  return (
    <div className="flex flex-wrap">
      {homes.map((home) => (
        <div className="w-1/3 p-5">
          <div className="text-center">
            <h5>{home.name}</h5>
            <h3>${home.price}</h3>
            <p>Location: {home.location}</p>
            <a>View Here</a>
          </div>
        </div>
      ))}
    </div>
  )
}