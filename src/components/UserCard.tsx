import { FaUserCircle } from "react-icons/fa";

interface PersonType {
  name: string;
  following: boolean;
}

interface UserCardProps {
  person: PersonType;
}

const UserCard = ({ person }: UserCardProps) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl transition-colors duration-200 hover:bg-gray-50">
      {/* Left Section: Avatar & Name */}
      <section className="flex items-center space-x-3">
        <FaUserCircle className="text-4xl text-gray-400" />
        <span className="font-medium text-gray-800 text-sm sm:text-base">
          {person.name}
        </span>
      </section>

      {/* Right Section: Toggle Follow Button */}
      <button
        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
          person.following
            ? "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:text-red-600 hover:border-red-200"
            : "bg-blue-600 text-white border-transparent hover:bg-blue-700 shadow-sm"
        }`}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
