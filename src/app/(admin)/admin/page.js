export default function Admin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="p-8 bg-gray-800 text-center rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
        <p className="text-gray-400 text-lg">
          Manage your platform settings and user data here.
        </p>
        <button className="mt-6 px-6 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition duration-300">
          Go to Settings
        </button>
      </div>
    </div>
  );
}
