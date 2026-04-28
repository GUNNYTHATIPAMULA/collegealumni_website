import React from 'react'
import { useNavigate } from 'react-router-dom';
const Loginpage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-blue-900">WELCOME BACK</h2>
          <p className="text-slate-500 font-medium">TKR Alumni Portal</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Username or Email</label>
            <input className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-900 outline-none transition" placeholder="Enter your credentials" />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Password</label>
            <input type="password" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-900 outline-none transition" placeholder="••••••••" />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="rounded border-slate-300" /> Remember me
            </label>
            <a href="#" className="text-blue-800 font-bold">Forgot?</a>
          </div>

          <button onClick={() => { navigate("/alumnidashboard") }} className="w-full bg-blue-900 text-white font-bold py-4 rounded-2xl shadow-blue-200 shadow-lg hover:bg-blue-800 transition transform hover:scale-[1.02]">
            Sign In
          </button>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-xs uppercase font-bold">New Here?</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <button onClick={() => navigate("/register")} className="w-full border-2 border-blue-900 text-blue-900 font-bold py-4 rounded-2xl hover:bg-blue-50 transition">
            Create Alumni Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage



