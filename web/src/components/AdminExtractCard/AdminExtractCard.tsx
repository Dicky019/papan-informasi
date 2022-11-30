const AdminExtractCard = (props) => {
  return (
    <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
      {/* <!-- Article --> */}
      {/* <article className="overflow-hidden rounded-lg shadow-lg">
        <img
          alt="Placeholder"
          className="block h-80 w-full object-cover"
          src={props.adminExtract.image_url}
        />
        <header className="flex items-center justify-between rounded-md m bg-blue-400 p-2 leading-tight md:p-4">
          <h1 className="text-lg font-semibold text-white  no-underline">
            {props.adminExtract?.name ?? 'Kosong'}
          </h1>
        </header>
      </article> */}
      <div className="carousel-item active float-left w-full">
        <img
          src={props.adminExtract.image_url}
          className="block w-full object-cover"
          alt="Wild Landscape"
        />
      </div>
      {/* <!-- END Article --> */}
    </div>
  )
}

export default AdminExtractCard
