export default function Loading() {
  return (
    <div 
      className="flex min-h-screen items-center justify-center relative"
      style={{
        backgroundImage: 'url(/images/header-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Loader Content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white animate-spin"></div>
          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <div className="text-white text-2xl font-bold">QB</div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-white text-2xl font-semibold mb-2">Loading...</h2>
        <p className="text-white/80 text-sm">Please wait while we prepare your experience</p>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}