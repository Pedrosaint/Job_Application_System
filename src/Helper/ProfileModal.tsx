import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth"; // Import Firebase auth

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    profilePicture?: string;
    name: string;
    email?: string;
    phone?: string;
  };
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Logs out the user
      navigate("/login"); // Redirects to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex md:items-center z-50 p-3 mt-25"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "40%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white w-full md:w-130 h-[80vh] md:h-[80vh] rounded-2xl md:rounded-md flex shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Sidebar */}
        <div className="w-1/2 bg-gray-100 p-5 border-r-2 border-gray-100">
          <h3 className="text-lg font-bold mb-4 font-mono border-b-4 mx-3 border-gray-500">
            Profile
          </h3>
          <ul className="space-y-3">
            <li className="p-2 rounded-lg bg-gray-200">General</li>
            <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              Account
            </li>
            <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              Privacy
            </li>
            <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              Notifications
            </li>
            <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              Storage
            </li>
            <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              Help
            </li>
          </ul>
        </div>

        {/* Right Content Section */}
        <div className="w-2/2 p-5 relative">
          <button
            className="absolute top-4 right-6 text-gray-500 text-xl"
            onClick={onClose}
          >
            &times;
          </button>

          <div className="flex flex-col items-center">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl">
                {user.name.charAt(0)}
              </div>
            )}

            <h2 className="text-xl font-bold mt-3">{user.name}</h2>
            <p className="text-gray-600">
              {user.email || "No email available"}
            </p>
            <p className="text-gray-700 font-semibold mt-2">{user.phone}</p>

            <button
              className="flex mt-6 items-center gap-2 bg-gray-100 text-red-700 py-2 px-6 rounded-md shadow-xl hover:bg-red-100"
              onClick={handleLogout}
            >
              <LogOut size={20} color="red" />
              Log out
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileModal;
