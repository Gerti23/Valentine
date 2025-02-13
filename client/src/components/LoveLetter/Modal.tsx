import React, { useState } from "react";
import Image from "next/image";
const Modal = ({
  isOpen,
  setIsOpen,
  setAnimationStage,
  animationStage,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAnimationStage: React.Dispatch<
    React.SetStateAction<"idle" | "filling" | "exploding" | "done">
  >;
  animationStage: "idle" | "filling" | "exploding" | "done";
}) => {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isLastModal, setIsLastModal] = useState(false);
  const [finale, setFinale] = useState(false);
  return (
    <>
      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(false);
            setIsSecondModalOpen(false);
            setIsThirdModalOpen(false);
            setFinale(false);
            if (animationStage !== "idle") {
              setAnimationStage("idle");
            }
          }}
          className="fixed h-lvh w-lvw top-0 left-0 right-0 bottom-0 bg-black/40 z-10 "
        />
      )}
      {isOpen && (
        <div
          className={`fixed top-[40%]  left-6 max-sm:right-6 lg:left-[35%] rounded shadow-md p-4 text-red-500   sm:w-[450px] bg-white z-20  ${
            finale && "top-[5%] sm:top-[15%]"
          }`}
        >
          {isSecondModalOpen ? (
            <>
              {isThirdModalOpen ? (
                <>
                  {isLastModal ? (
                    <div className="w-full flex flex-col gap-y-5 ">
                      <span className="font-bold text-red-600 text-xl ">
                        You cannot say &quot;No&quot;.
                        <br />
                        <span className="text-base font-medium">
                          The only option is to be my Valentine 💑💋!
                        </span>
                        <br />
                        <span className="text-base font-medium">so,</span>
                        <br />
                        <span className=" text-2xl font-bold  ">
                          Will you be my Valentine ?{" "}
                        </span>
                      </span>

                      <div className="flex justify-center gap-x-4 w-full">
                        <button
                          onClick={() => {
                            setIsLastModal(false);
                            setIsSecondModalOpen(false);
                            setIsThirdModalOpen(false);
                            setFinale(true);
                          }}
                          className="px-3 py-1.5 bg-red-500   text-white rounded"
                        >
                          Yes
                        </button>

                        <button
                          onClick={() => {
                            setIsLastModal(false);
                            setIsSecondModalOpen(false);
                            setIsThirdModalOpen(false);
                            setFinale(true);
                          }}
                          className="px-3 py-1.5 bg-red-500   text-white rounded"
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col gap-y-5 ">
                      <span className="font-bold text-red-600 text-2xl ">
                        Are you reaaalllyy sure 🧐 ?
                      </span>

                      <div className="flex justify-center gap-x-4 w-full">
                        <button
                          onClick={() => setIsLastModal(true)}
                          className="px-3 py-1.5 bg-red-500   text-white rounded"
                        >
                          Yes
                        </button>

                        <button
                          onClick={() => setIsSecondModalOpen(false)}
                          className="px-3 py-1.5 bg-red-500   text-white rounded"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full flex flex-col gap-y-5 ">
                  <span className="font-bold text-red-600 text-2xl ">
                    Are you sure 🤔 ?
                  </span>

                  <div className="flex justify-center gap-x-4 w-full">
                    <button
                      onClick={() => setIsThirdModalOpen(true)}
                      className="px-3 py-1.5 bg-red-500   text-white rounded"
                    >
                      Yes
                    </button>

                    <button
                      onClick={() => setIsSecondModalOpen(false)}
                      className="px-3 py-1.5 bg-red-500   text-white rounded"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {finale ? (
                <div className="w-full flex flex-col gap-y-4">
                  <div className="w-full text-red-500 font-medium">
                    <span>You are not just my love ,</span>
                    <br />
                    <span className="text-2xl font-bold">
                      You are my favourite FEELING!
                    </span>
                  </div>
                  <Image
                    className="w-full h-96 object-cover"
                    alt="gerti"
                    sizes="100vw"
                    src="/love-couple.jpg"
                    width={0}
                    height={0}
                    // style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ) : (
                <div className="w-full">
                  <span className="font-bold text-xl">
                    Will you be my Valentine 💖 ?
                  </span>
                  <div className="w-full flex mt-5 items-center justify-center gap-x-5">
                    <button
                      onClick={() => setFinale(true)}
                      className="px-3 py-1.5 bg-red-500 text-white rounded"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsSecondModalOpen(true)}
                      className="px-3 py-1.5 bg-red-500 text-white rounded"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
