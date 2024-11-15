import Link from "next/link";
import { CiMedicalCross } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import profile from "@/public/images/profilephoto.webp";
import { RiFileSearchLine } from "react-icons/ri";
import { useGetUser, useLogoutUser } from "../hooks/useAuthApi";
import { useState } from "react"; // import useState for handling modal state

const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();
  const logoutMutation = useLogoutUser();
  const { data: user } = useGetUser();
  const [isModalOpen, setIsModalOpen] = useState(false); // state to control modal visibility

  const handleLogout = () => {
    logout();
    logoutMutation.mutate();
    window.location.href = "/auth/login";
  };

  // Function to show modal when logout button is clicked
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-1/6 h-screen bg-primary flex flex-col justify-between px-3 py-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3 font-semibold">
          <CiMedicalCross size={20} />
          <h2 className="font-noto text-white">OPD Monitoring System</h2>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/" passHref>
            <button
              className={`w-[200px] flex items-center gap-4 mx-3 px-4 py-3 rounded-lg text-white ${
                pathname === "/" ? "bg-primartactive" : "bg-white/10"
              }`}
            >
              <RxDashboard />
              <span>Dashboard</span>
            </button>
          </Link>
          <Link href="/user-guide" passHref>
            <button
              className={`w-[200px] flex items-center gap-4 mx-3 px-4 py-3 rounded-lg text-white ${
                pathname === "/user-guide" ? "bg-primartactive" : "bg-white/10 "
              }`}
            >
              <RiFileSearchLine />
              <span>User Guide</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={showModal} // Show modal when logout is clicked
          className="flex items-center gap-4 mx-3 px-4 py-3 rounded-lg text-white"
        >
          <IoLogOutOutline size={20} />
          <span>Log out</span>
        </button>
        <hr className="opacity-20" />
        <div className="flex items-center gap-3 py-3">
          <Image
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover text-white"
          />
          <div className="flex flex-col gap-1">
            <p className="text-sm text-white">{user?.username}</p>
            <p className="text-xs text-slate-300">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center px-6 py-4">
            <h3 className="text-lg font-semibold mb-4 text-black">Are you sure you want to log out?</h3>
            <div className="flex justify-center gap-4 my-2">
              <button
                onClick={handleLogout} // Proceed with logout
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Yes, Sure
              </button>
              <button
                onClick={closeModal} // Cancel logout
                className="bg-gray-500 px-4 py-2 rounded-lg text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
