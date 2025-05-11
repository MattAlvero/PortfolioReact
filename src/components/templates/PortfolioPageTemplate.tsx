import React from "react";

type PortfolioPageTemplateProps = {
  children: React.ReactNode;
};

const PortfolioPageTemplate = ({ children }: PortfolioPageTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2025</p>
        <p>
          <a href="mailto:matthewadrianoalvero@gmail.com" className="text-blue-400 hover:underline">
            matthewadrianoalvero@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default PortfolioPageTemplate;
