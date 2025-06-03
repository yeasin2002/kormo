export const EarningCards = () => {
  return (
    <div className="absolute top-4 right-7 bg-white rounded-2xl p-4 border-2 border-black shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
      <div className="text-xs text-gray-600 mb-1">Money in</div>
      <div className="text-2xl font-black text-black">$45,230.50</div>
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <div>
          <div className="font-bold">2,145</div>
          <div>Earned</div>
        </div>
        <div>
          <div className="font-bold">1,890</div>
          <div>Jobs</div>
        </div>
      </div>
    </div>
  );
};

export const JobStateCard = () => {
  return (
    <div className="absolute top-20 left-7 bg-white rounded-2xl p-4 border-2 border-black shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-600">Active</span>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>
      <div className="text-xl font-black text-black">127 Jobs</div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
      </div>
    </div>
  );
};

export const ProfileCard = () => {
  return (
    <div className="absolute top-40 right-20 bg-white rounded-2xl p-4 border-2 border-black shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-sm">JS</span>
        </div>
        <div>
          <div className="font-bold text-black text-sm">John Smith</div>
          <div className="text-xs text-gray-600">john@techcorp.com</div>
        </div>
      </div>
      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full inline-block">
        Available
      </div>
      <div className="flex justify-between mt-3 text-xs">
        <div>
          <div className="font-bold text-black">$85.00</div>
          <div className="text-gray-600">Rate/hr</div>
        </div>
        <div>
          <div className="font-bold text-black">24</div>
          <div className="text-gray-600">Projects</div>
        </div>
      </div>
    </div>
  );
};

export const JobTaskCard = () => {
  return (
    <div className="absolute bottom-10 left-10 space-y-3">
      <div className="bg-purple-100 rounded-lg p-3 border-2 border-black shadow-md transform -rotate-1">
        <div className="text-xs text-purple-600 mb-1">🎨 Design Task</div>
        <div className="font-bold text-black text-sm">Update design system</div>
      </div>
      <div className="bg-blue-100 rounded-lg p-3 border-2 border-black shadow-md transform rotate-2">
        <div className="text-xs text-blue-600 mb-1">📋 Management</div>
        <div className="font-bold text-black text-sm">Assign new tasks</div>
      </div>
      <div className="bg-green-100 rounded-lg p-3 border-2 border-black shadow-md transform -rotate-2">
        <div className="text-xs text-green-600 mb-1">💻 Development</div>
        <div className="font-bold text-black text-sm">Build mobile app</div>
      </div>
    </div>
  );
};

export const NotificationCard = () => {
  return (
    <div className="absolute bottom-36 right-7 space-y-2">
      <div className="bg-white rounded-lg p-2 border-2 border-black shadow-md text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="font-bold">New job posted</span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-2 border-2 border-black shadow-md text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span className="font-bold">Payment received</span>
        </div>
      </div>
    </div>
  );
};

export const CompanyLogos = () => {
  return (
    <div className="absolute top-60 left-20 flex space-x-2">
      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">G</span>
      </div>
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">M</span>
      </div>
      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">N</span>
      </div>
    </div>
  );
};

export const FloatingElements = () => {
  return (
    <>
      <div className="absolute top-1/4 right-8 bg-yellow-400 text-black px-3 py-2 rounded-lg border-2 border-black shadow-lg transform rotate-12">
        <span className="text-sm font-bold">Hiring!</span>
      </div>
      <div className="absolute bottom-1/3 right-16 bg-white text-black px-3 py-2 rounded-lg border-2 border-black shadow-lg transform -rotate-6">
        <span className="text-sm font-bold">Remote</span>
      </div>
      <div className="absolute top-1/2 left-8 bg-green-400 text-black px-3 py-2 rounded-lg border-2 border-black shadow-lg transform rotate-6">
        <span className="text-sm font-bold">$120/hr</span>
      </div>
    </>
  );
};

export const SecureLogin = () => {
  return (
    <div className="absolute bottom-6 right-6 bg-blue-400 text-black px-4 py-2 rounded-lg border-2 border-black shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
      <span className="text-sm font-bold">Secure Login ✨</span>
    </div>
  );
};
