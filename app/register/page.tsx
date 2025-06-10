"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useAuth } from "@/lib/auth";
import { registerSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { 
  AlertCircle, 
  Leaf, 
  UserPlus, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Mail, 
  User, 
  Sparkles,
  Shield,
  CheckCircle,
  Star,
  Zap,
  Users,
  Brain,
  Upload,
  TrendingUp,
  Scan,
  Lock,
  CheckCircle2,
  Rocket,
  Award,
  Camera
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove as EventListener);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, []);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setIsLoading(true);
    setError(null);
    
    try {
      await register(
        values.fullname,
        values.username,
        values.email,
        values.password
      );
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred. Please try again.");
      }
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl animate-pulse transition-transform duration-1000"
          style={{
            top: `${20 + mousePosition.y * 0.01}%`,
            left: `${10 + mousePosition.x * 0.01}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-teal-300/15 rounded-full blur-2xl animate-bounce transition-transform duration-1000"
          style={{
            top: `${40 + mousePosition.y * -0.02}%`,
            right: `${20 + mousePosition.x * 0.015}%`,
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-green-200/20 rounded-full blur-xl animate-pulse delay-1000 transition-transform duration-1000"
          style={{
            bottom: `${20 + mousePosition.y * 0.01}%`,
            left: `${25 + mousePosition.x * -0.01}%`,
          }}
        ></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 animate-grid-move"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      {/* Elegant Header with Transparent Background */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-3' : 'py-5'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mr-3 group-hover:rotate-6 transition-transform duration-300">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">Agri<span className="text-emerald-600">Scan</span></span>
            </Link>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center px-4 py-2 rounded-xl hover:bg-emerald-50 transition-all duration-300 border-2 border-transparent hover:border-emerald-200 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen items-center justify-center p-4 pt-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Side - Register Form */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm overflow-hidden transform hover:scale-[1.01] transition-all duration-500 rounded-2xl">
                  {/* Gradient Top Bar */}
                  <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-size-200 animate-gradient-x"></div>
                  
                  <CardHeader className="space-y-1 pb-6 pt-8 text-center">
                    {/* Logo Animation */}
                    <div className="flex justify-center mb-6">
                      <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg mb-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                          <Leaf className="w-9 h-9 text-white group-hover:rotate-12 transition-transform duration-500" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                            AgriScan
                          </span>
                          <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-slate-800 mb-2">
                      Buat Akun Baru
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base">
                      Masukkan detail Anda untuk membuat akun AgriScan dan bergabung dengan komunitas petani digital
                    </CardDescription>

                    {/* Welcome Badge */}
                    <div className="mt-4">
                      <span className="bg-gradient-to-r from-emerald-100 via-teal-100 to-green-100 text-emerald-700 border border-emerald-200/50 px-4 py-2 text-sm font-medium shadow-sm rounded-full inline-flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Registrasi Gratis & Aman
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-5 px-6">
                    {error && (
                      <Alert variant="destructive" className="bg-red-50 text-red-700 border border-red-200 animate-shake">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}
                    
                    {success && (
                      <Alert className="bg-emerald-50 text-emerald-700 border border-emerald-200 animate-fade-in">
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          Registrasi berhasil! Mengalihkan ke halaman login...
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-medium">Nama Lengkap</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    placeholder="Masukkan nama lengkap Anda" 
                                    className="border-slate-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 shadow-sm pl-10"
                                    {...field} 
                                    disabled={isLoading || success}
                                  />
                                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                </div>
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-medium">Username</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    placeholder="Pilih username unik" 
                                    className="border-slate-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 shadow-sm pl-10"
                                    {...field} 
                                    disabled={isLoading || success}
                                  />
                                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                </div>
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-medium">Email</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    type="email" 
                                    placeholder="Masukkan alamat email Anda" 
                                    className="border-slate-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 shadow-sm pl-10"
                                    {...field} 
                                    disabled={isLoading || success}
                                  />
                                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                </div>
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-medium">Password</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Buat password (min. 6 karakter)" 
                                    className="border-slate-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 shadow-sm pl-10 pr-10"
                                    {...field} 
                                    disabled={isLoading || success}
                                  />
                                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                  <button 
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors duration-200"
                                    onClick={() => setShowPassword(!showPassword)}
                                  >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                  </button>
                                </div>
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 hover:from-emerald-600 hover:via-teal-600 hover:to-green-600 text-white shadow-md hover:shadow-lg transition-all duration-500 py-6 mt-6 relative overflow-hidden group"
                          disabled={isLoading || success}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <UserPlus className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          {isLoading ? "Sedang Mendaftar..." : "Buat Akun"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                  
                  <CardFooter className="flex justify-center py-6 border-t border-slate-100 bg-slate-50/80">
                    <p className="text-sm text-slate-600">
                      Sudah punya akun?{" "}
                      <Link 
                        href="/login" 
                        className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        Masuk Sekarang
                      </Link>
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Right Side - Benefits & Features */}
            <div className="hidden lg:block">
              <div className="space-y-6">
                {/* Main Benefits Card */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"></div>
                  
                  <div className="text-center mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Bergabung dengan AgriScan</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Dapatkan akses ke teknologi AI terdepan untuk deteksi penyakit tanaman dan tingkatkan produktivitas pertanian Anda
                    </p>
                  </div>
                  
                  {/* Feature Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["AI Powered", "Real-time Analytics", "Expert System", "Cloud Storage"].map((feature, idx) => (
                      <span key={idx} className="bg-emerald-50/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-700 border border-emerald-200/50">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20 relative overflow-hidden">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a085' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  
                  <div className="relative">
                    <h4 className="text-lg font-bold text-slate-800 mb-4 text-center">Keuntungan Bergabung</h4>
                    <div className="space-y-3">
                      {[
                        { icon: Brain, title: "Deteksi AI Akurat", desc: "Teknologi machine learning dengan akurasi 98.7%" },
                        { icon: Upload, title: "Upload Mudah", desc: "Unggah foto dan dapatkan hasil dalam 2.3 detik" },
                        { icon: Shield, title: "Data Terlindungi", desc: "Keamanan data tingkat enterprise" },
                        { icon: Users, title: "Komunitas Petani", desc: "Bergabung dengan 15K+ petani Indonesia" }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-lg hover:shadow-md transition-all duration-300 group hover:scale-[1.02] transform">
                          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            <benefit.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-800 text-sm">{benefit.title}</h5>
                            <p className="text-xs text-slate-600">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Rocket, value: "< 30s", label: "Setup Time", color: "from-blue-400 to-blue-500", detail: "Quick Start" },
                    { icon: Award, value: "100%", label: "Free", color: "from-emerald-400 to-green-500", detail: "No Hidden Costs" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 group border border-white/30 relative overflow-hidden"
                    >
                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-lg`}></div>
                      
                      <div className="relative">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-1">
                          {stat.value}
                        </div>
                        <div className="text-slate-600 text-sm font-medium mb-1">{stat.label}</div>
                        <div className="text-slate-500 text-xs">{stat.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 inline-flex items-center shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-emerald-700 font-medium">Gratis selamanya untuk petani Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-x { 
          background-size: 200% 200%; 
          animation: gradient-x 3s ease infinite; 
        }
        
        .animate-shake { 
          animation: shake 0.5s ease-in-out; 
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-size-200 { 
          background-size: 200% 200%; 
        }
      `}</style>
    </div>
  );
}