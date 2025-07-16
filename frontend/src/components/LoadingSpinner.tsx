const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-primary-glow/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Medical cross pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="medicalCross" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M45,20 L55,20 L55,45 L80,45 L80,55 L55,55 L55,80 L45,80 L45,55 L20,55 L20,45 L45,45 Z" fill="currentColor" className="text-primary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medicalCross)" />
        </svg>
      </div>
      
      {/* Main spinner */}
      <div className="relative z-10">
        <div className="glass-card p-8 rounded-2xl">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="animate-spin">
                <img 
                  src="/lovable-uploads/c4a16660-f9be-4e7f-8d59-dfa08469d58d.png" 
                  alt="Loading..." 
                  className="h-16 w-auto drop-shadow-lg"
                />
              </div>
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Loading Global Health Data
              </h2>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;