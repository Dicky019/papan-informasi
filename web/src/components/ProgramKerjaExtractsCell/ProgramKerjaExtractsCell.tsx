import type { ProgramKerjaExtractsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ProgramKerjaExtractsQuery {
    programKerjaExtracts {
      id
      nameProker
      persenProker
      programKerja
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  programKerjaExtracts,
}: CellSuccessProps<ProgramKerjaExtractsQuery>) => {
  return (
    // <div className=" container flex px-1 pt-2 md:flex-row">
    //   <div className="flex px-1 pt-2 md:flex-col">
    //     <p className="-mb-px rounded-t border-b-2 border-blue-400 px-4 py-2 font-semibold text-gray-800 opacity-50">
    //       <button>All</button>
    //     </p>
    //     <p className="rounded-t px-4 py-2 font-semibold text-gray-800 opacity-50">
    //       <button>Clothes</button>
    //     </p>
    //     <p className="rounded-t px-4 py-2 font-semibold text-gray-800 opacity-50">
    //       <button>Electronics</button>
    //     </p>
    //     <p className="rounded-t px-4 py-2 font-semibold text-gray-800 opacity-50">
    //       <button>Others</button>
    //     </p>
    //   </div>

    //   <div className="w-full">
    //     {programKerjaExtracts.map((item) => {
    //       return (
    //         <li key={item.id}>
    //           <div className=" pt-1">
    //             <div className="mb-2 flex items-center justify-between">
    //               <div>
    //                 <span className="inline-block rounded-full bg-emerald-200 py-1 px-2 text-xs font-semibold uppercase text-emerald-600">
    //                   Task in progress
    //                 </span>
    //               </div>
    //               <div className="text-right">
    //                 <span className="inline-block text-xs font-semibold text-emerald-600">
    //                   30%
    //                 </span>
    //               </div>
    //             </div>
    //             <div className="mb-4 flex h-2 overflow-hidden rounded bg-emerald-200 text-xs">
    //               <div
    //                 style={{ width: 30 }}
    //                 className="flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none"
    //               ></div>
    //             </div>
    //           </div>
    //         </li>
    //       )
    //     })}
    //   </div>
    // </div>
    <>
      <section className="bg-white py-14">
        <h1 className="text-header text-gray-900 ">
          Jadwal Keilmuan EXTRACT {process.env.REDWOOD_ENV_EXTRACT_KE}
        </h1>
        <div className="container mx-auto px-6 ">
          <div className=" lg:-mx-12 lg:flex">
            {/* Header */}
            <div className="flex px-1 pt-2 md:flex-col">
              <p className="-mb-px rounded-t border-b-2 border-blue-400 px-4 py-2 font-semibold text-gray-800 opacity-50">
                <button>All</button>
              </p>
              <p className="rounded-t px-4 py-2 font-semibold text-gray-800 opacity-50">
                <button>Clothes</button>
              </p>
              <p className="rounded-t px-4 py-2 font-semibold text-gray-800 opacity-50">
                <button>Electronics</button>
              </p>
              <p className="rounded-t px-4 py-2 font-semibold text-gray-800 opacity-50">
                <button>Others</button>
              </p>
            </div>
            {/* End Header */}
            {/* Card */}
            {programKerjaExtracts.map((e) => (
              <div key={e.id} className="m-4 ml-16 w-full">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-emerald-200 py-1 px-2 text-xs font-semibold uppercase text-emerald-600">
                      {e.programKerja} {' - '}
                      <span className="font-normal">{e.nameProker}</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-semibold text-emerald-600">
                      {e.persenProker}%
                    </span>
                  </div>
                </div>
                <div className="mb-4 flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                  <div
                    style={{ width: `${e.persenProker}%` }}
                    className="flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none"
                  ></div>
                </div>
              </div>
            ))}
            {/* End Card */}
          </div>
        </div>
      </section>
      {/* <!-- component --> */}
    </>
  )
}
