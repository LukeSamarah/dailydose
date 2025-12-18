'use client'

export default function VideoHeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/webm/copy_F189B18E-367C-43A0-A1D9-86F9FCB98831.webm" type="video/webm" />
      </video>
      
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Wir kümmern uns um Ihr Social Media,
          </h1>
          <h2 className="text-3xl md:text-5xl font-light">
            damit Sie es nicht müssen.
          </h2>
        </div>
      </div>
    </div>
  )
}