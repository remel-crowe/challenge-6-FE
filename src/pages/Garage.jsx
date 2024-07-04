import CarCard from "../components/CarCard";
import AddCarModal from "../components/AddCarModal";

import { useState } from "react";

const Garage = ({ cars, onAdd, onRemove }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {showModal && <AddCarModal onAdd={onAdd} onClose={handleCloseModal} />}
      {cars.length === 0 ? (
        <div className="flex flex-col items-center mt-10">
          <h1 className="font-bold mb-10">
            Your Garage Is Empty! Try Adding a car!
          </h1>

          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none mb-1"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Add Car
            </span>
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="font-bold my-10 text-center">Your Garage</h1>
          <div className="flex flex-col md:flex-row md:gap-4 mb-10 items-center justify-center">
            {cars.map((car, index) => (
              <CarCard
                carData={car}
                key={car._id}
                index={index}
                onRemove={() => onRemove(index)}
              />
            ))}
          </div>

          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none mb-1"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Add Another Car
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Garage;
