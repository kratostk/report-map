import React, { useState } from 'react'
import logo from '../Image/logo.png'

interface Fleet {
    fleetID: number;
    fleetDecs: string;
}

interface fleetLocation {
    status: string;
    carRegistration: string;
    location: string;
    lat: string;
    long: string;
    time: string;
    speed: number;
    oil: number;

}

function Home(): JSX.Element {
    const [fleet, setFleet] = useState<Array<Fleet> | null>(null)
    const [fleetLocation, setFleetLocation] = useState<Array<fleetLocation> | null>(null)


    return (
        <div>
            <div className="flex bg-white">
                <img className="flex-start" src={logo} width='150' />

                <div className="flex flex-row-reverse items-center ">
                    <div className="relative inline-flex col-start-1 col-end-3">
                        <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                        <select className="border border-gray-400 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-[#ffffff] hover:border-gray-400 focus:outline-none appearance-none">
                            <option >Please select Fleet</option>
                            <option value=''>K-Trak</option>
                            <option>True</option>
                            <option>กรมการขนส่งทางบก</option>
                            <option>Boss</option>
                        </select>
                    </div>
                </div>
            </div>

            <hr></hr>
            <hr></hr>

            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-yellow-400 text-white border-yellow-400">Status</th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-yellow-400 text-white border-yellow-400">Car registration</th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-yellow-400 text-white border-yellow-400">Time</th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-yellow-400 text-white border-yellow-400">Location</th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-yellow-400 text-white border-yellow-400">Speed</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 5 }, (v, i) => (

                        <>
                            <tr>
                                <td className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-white text-gray-600 border-yellow-400"'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                                    </svg>
                                </td>
                                <td className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-white text-gray-600 border-yellow-400"'>พม 5564</td>
                                <td className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-white text-gray-600 border-yellow-400"'>07.06.22 09.30 AM</td>
                                <td className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-white text-gray-600 border-yellow-400"'>อาคารอื้อจือเหลียง 968 ถนนพระราม 4 แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500.</td>
                                <td className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-white text-gray-600 border-yellow-400"'>0</td>

                            </tr>
                        </>
                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default Home