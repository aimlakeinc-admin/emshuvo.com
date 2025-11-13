import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative py-6 border-t border-gray-700/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-2">
              © 2025 Evan Mahmud Shuvo
            </p>
            <p className="text-gray-400">
              All Rights Reserved.
            </p>
          </div>
      </div>
    </footer>
  );
}

