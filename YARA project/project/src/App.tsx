
import { FileAnalyzer } from './components/FileAnalyzer';
// index.js or App.js
import './index.css';  // Ensure this line is present

function App() {
  return (
    <div
      style={{
        backgroundImage: `url("./assests/3607424.jpg")`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
      className="flex flex-col items-center justify-start"
    >
      {/* Logo Section */}
      <div className="w-full max-w-3xl bg-white p-4 flex justify-center shadow-md">
        <img
          src="https://i.pinimg.com/474x/66/a2/bd/66a2bdf40cf67368f3f18488a46c3673.jpg"  // Replace with your logo URL
          alt="Logo"
          className="h-16"
        />
      </div>
      

      {/* Header Section */}
      <header className="w-full max-w-3xl bg-white p-8 text-center shadow-lg">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">File Analyzer Tool</h1>
        <p className="text-lg text-gray-600 mb-4">Analyze and manage your files effortlessly with our tool</p>
      </header>

      {/* About Section */}
      <section className="w-full max-w-3xl bg-white p-8 mb-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600">
          Our File Analyzer Tool helps you scan, identify, and manage your files in real-time. Whether you need
          to check file integrity, detect threats, or analyze file contents, we’ve got you covered.
        </p>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-3xl p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center" >Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-Time Scanning</h3>
            <p className="text-gray-600">Quickly scan files to identify issues or threats as they are uploaded.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">User-Friendly Interface</h3>
            <p className="text-gray-600">Easy-to-use dashboard for file management and results presentation.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Customizable Alerts</h3>
            <p className="text-gray-600">Get real-time alerts based on your preferences and file status.</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-6">Key Features</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Feature 1</h2>
            <p>Scanning Using Yara Rule.</p>
        </div>
        <div className="card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Feature 2</h2>
            <p>Detection File Type And File description.</p>
        </div>
        <div className="card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Feature 3</h2>
            <p>Hashing Using Md5 and SHA-256.</p>
        </div>
    </div>
</div>


      {/* Operations Section */}
      <section className="w-full max-w-3xl bg-white p-8 mb-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 mb-4">
          Upload your files to the platform, select the scanning options you prefer, and let the tool do the rest.
          Our system analyzes your files quickly and presents detailed results that help you understand file integrity
          and potential risks.
        </p>
      </section>

      {/* File Analyzer Component */}
      <section className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg mb-8">
        <FileAnalyzer />
      </section>
    </div>
  );
}

export default App;
