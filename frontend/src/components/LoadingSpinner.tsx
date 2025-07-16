const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin">
        <img 
          src="/lovable-uploads/c4a16660-f9be-4e7f-8d59-dfa08469d58d.png" 
          alt="Loading..." 
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;