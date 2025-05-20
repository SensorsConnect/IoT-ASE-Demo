import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to IoT-ASE Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the power of IoT and Advanced Software Engineering in action.
            Our demo showcases real-time data processing, device management, and
            intelligent analytics.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Demo
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Real-time Monitoring</h3>
            <p className="text-gray-600">
              Monitor your IoT devices in real-time with live data updates and
              instant notifications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Device Management</h3>
            <p className="text-gray-600">
              Easily manage and configure your IoT devices through an intuitive
              interface.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-600">
              Gain insights from your device data with powerful analytics and
              visualization tools.
            </p>
          </div>
        </div>
      </div>

      {/* Example Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="shrink-0 size-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Connect Devices</h3>
                <p className="text-gray-600">
                  Connect your IoT devices to our platform using secure protocols
                  and authentication.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="shrink-0 size-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Monitor Data</h3>
                <p className="text-gray-600">
                  View real-time data streams and device status through our
                  intuitive dashboard.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="shrink-0 size-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Analyze & Optimize</h3>
                <p className="text-gray-600">
                  Use advanced analytics to optimize device performance and make
                  data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Try our demo now and experience the future of IoT management.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Launch Demo
          </Link>
        </div>
      </div>
    </div>
  );
} 