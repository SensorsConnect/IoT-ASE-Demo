import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Logo Section */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-center">
          <div className="relative size-48">
            <Image
              src="/localelive-light-icon.png"
              alt="IoT-ASE Logo"
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/localelive-dark-icon.png"
              alt="IoT-ASE Logo"
              fill
              className="object-contain hidden dark:block"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Localelive
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          The pulse of places lives at your fingertips.
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
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Real-time Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your IoT devices in real-time with live data updates and
              instant notifications.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Device Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Easily manage and configure your IoT devices through an intuitive
              interface.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Data Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gain insights from your device data with powerful analytics and
              visualization tools.
            </p>
          </div>
        </div>
      </div>

      {/* Example Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          How It Works
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="shrink-0 size-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Connect Devices</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect your IoT devices to our platform using secure protocols
                  and authentication.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="shrink-0 size-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-300 font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Monitor Data</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  View real-time data streams and device status through our
                  intuitive dashboard.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="shrink-0 size-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-300 font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Analyze & Optimize</h3>
                <p className="text-gray-600 dark:text-gray-300">
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
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-4xl mx-auto text-center">
        {/* <div className="bg-white dark:bg-gray-800 rounded-lg p-12 text-center"> */}
          <h2 className="text-3xl font-bold text-white dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-900 dark:text-gray-300 mb-8">
            Try our demo now and experience the future of IoT management.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-white text-blue-600 dark:bg-gray-700 dark:text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            Launch Demo
          </Link>
        </div>
      </div>
    </div>
  );
} 