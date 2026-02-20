export default function WorkSectionSkeleton() {
  return (
    <section className="px-6 py-12 -mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-4 w-24 bg-gray-200 rounded mx-auto mb-8 -mt-8 animate-pulse" />
        </div>

        {/* Tab buttons and View more Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8 sm:mb-12">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-24 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-12 w-24 bg-gray-200 rounded-full animate-pulse" />
          </div>
          <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse" />
        </div>

        {/* Projects Skeleton Cards */}
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-6 px-6">
          <div className="flex gap-6 pb-4 min-w-max">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl overflow-hidden flex-shrink-0 w-[320px] shadow-sm"
              >
                {/* Image Skeleton */}
                <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
                </div>

                {/* Content Skeleton */}
                <div className="p-6 space-y-3">
                  {/* Title Skeleton */}
                  <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                  
                  {/* Description Skeleton */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Skeleton */}
        <div className="flex justify-center gap-2 mt-2 mb-3 py-4 bg-gray-50 rounded-lg xl:hidden">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
