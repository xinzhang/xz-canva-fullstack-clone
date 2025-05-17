import React from 'react'
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

const LoginCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-9 w-full max-w-md mx-4 transition-all duration-300">
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800">Jump back in</h3>
          <p className="p-3 text-gray-500">
            Sign in to continue to Canva
          </p>
        </div>
        <Button variant="outline" className={`w-full flex items-center justify-center gap-3 py-6 text-gray-700 border-gray-300
          hover:border-[#8b3dff] hover:text-[#8b3dff] transition-all duration-300 group transform hover:scale-[1.05] active:scale-[0.95] 
          `}>
            <div className="bg-white rounded-full p-1 flex items-center justify-center group-hover:bg-[#8b3dff]/10 transition-colors duration-300">
              <LogIn className="w-5 h-5 group-hover:text-[#8b3dff] transition-colors duration-300" />
            </div>
            <span className="font-medium">Continue with google</span>
        </Button>
      </div>
    </div>
  )
}

export default LoginCard