import PasswordChangeModal from "../components/PasswordChangeModal.jsx";
import { useState } from "react";

const Profile = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col justify-center align-center text-center pt-[20%]">
      <h1>{user}'s Profile</h1>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-2/4  mx-auto mt-4 md:w-1/6"
        onClick={() => setShowModal(true)}
      >
        Change Password
      </button>
      {showModal && <PasswordChangeModal closeModal={closeModal} />}
    </div>
  );
};

export default Profile;
