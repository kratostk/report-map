import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IFleet } from "../views/Home";
import { searchFilter } from "../utils/searchFilter";

interface Props {
  isMobileFleetModalOpen: boolean;
  setMobileFleetModal: (v: boolean) => void;
  fleets: IFleet[] | undefined;
  handleSelectFleetOnMobile: React.MouseEventHandler<HTMLLIElement>;
}

const SelectFleetSM = ({
  fleets,
  isMobileFleetModalOpen,
  setMobileFleetModal,
  handleSelectFleetOnMobile,
}: Props): JSX.Element => {
  const cancelButtonRef = useRef(null);
  const [searchString, setSearchString] = useState<string | null>(null);

  const handleSetSearchString = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchString(newValue);
  };

  return (
    <Transition.Root show={isMobileFleetModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 md:hidden"
        initialFocus={cancelButtonRef}
        onClose={setMobileFleetModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto w-full ">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full relative backdropBlur dark:darkBackdropBlur rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="w-full px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex-shrink-0 bg-transparent flex items-center justify-center h-16 w-16 rounded-full sm:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-24 h-24 rounded-2xl p-3 border text-blue-400 border-none bg-transparent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-slate-800 dark:text-white mb-5"
                    >
                      กรุณาเลือก กลุ่มยานยนต์
                    </Dialog.Title>
                    <div className="flex relative col-start-1 col-end-3 w-full">
                      <svg
                        className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 412 232"
                      >
                        <path
                          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                          fill="#648299"
                          fillRule="nonzero"
                        />
                      </svg>

                      <input
                        onChange={handleSetSearchString}
                        type="text"
                        id="search"
                        className="glass-bg bg-glass w-full dark:border border dark:bg-slate-800/50 dark:highlight-white/5 outline:none focus:border-transparent dark:text-slate-400 text-gray-900 text-sm rounded-lg block pl-10 p-2.5"
                        placeholder="เลือกกลุ่มยานยนต์"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full centerBox ">
                  <div className="w-full ">
                    <ul className="mt-4">
                      {fleets && !searchString
                        ? fleets.slice(0, 200).map((item: IFleet) => (
                            <li
                              onClick={handleSelectFleetOnMobile}
                              className="dark:text-white py-4 px-6 dark:hover:bg-slate-800/50 hover:bg-gray-100 cursor-pointer"
                              key={item.fleet_id}
                              value={item.fleet_id}
                            >
                              {item.fleet_desc}
                            </li>
                          ))
                        : searchFilter(fleets, searchString!).map(
                            (item: IFleet) => (
                              <li
                                onClick={handleSelectFleetOnMobile}
                                className="dark:text-white py-4 px-6 dark:hover:bg-slate-800/50 hover:bg-gray-100 cursor-pointer"
                                key={item.fleet_id}
                                value={item.fleet_id}
                              >
                                {item.fleet_desc}
                              </li>
                            )
                          )}
                    </ul>
                  </div>
                </div>

                {/* <div className="bg-transparent px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      ยืนยัน
                    </button>
                  </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SelectFleetSM;
