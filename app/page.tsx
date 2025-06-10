"use client"

import {
  Upload,
  Brain,
  CheckCircle,
  Zap,
  Leaf,
  Sparkles,
  Shield,
  TrendingUp,
  LogIn,
  UserPlus,
  ArrowRight,
  Star,
  Timer,
  BarChart3,
  Camera,
  Smartphone,
  Globe,
  Award,
  Target,
  Layers,
  Scan,
  ChevronDown,
  Play,
  Cpu,
  Database,
  Lock,
  Wifi,
  Clock,
  Users,
  Activity,
  FileImage,
  Microscope,
  Beaker,
  Atom,
  Eye,
  Heart,
  ThumbsUp,
  CheckCircle2,
  Rocket,
  Gauge,
  Fingerprint,
  Infinity,
  TrendingUp as Growth,
  Bolt as Lightning,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Petani Padi, Jawa Tengah",
      content: "AgriScan membantu saya mendeteksi penyakit blast lebih cepat. Hasil panen meningkat 30% dan kerugian berkurang drastis!",
      rating: 5,
      image: "B",
      location: "Semarang",
      harvest: "+30%"
    },
    {
      name: "Siti Aminah",
      role: "Petani Organik, Jawa Barat",
      content: "Teknologi AI yang luar biasa! Sekarang saya bisa menangani penyakit tanaman dengan tepat waktu dan presisi tinggi.",
      rating: 5,
      image: "S",
      location: "Bandung",
      harvest: "+25%"
    },
    {
      name: "Ahmad Fauzi",
      role: "Kelompok Tani Maju, Sumatera",
      content: "Interface yang mudah digunakan dan hasil analisis yang akurat. Sangat membantu petani modern seperti kami!",
      rating: 5,
      image: "A",
      location: "Medan",
      harvest: "+40%"
    }
  ];

  const diseases = [
    { name: "Blast Padi", accuracy: 98, cases: "3,456", color: "from-red-500 to-rose-600", severity: "Tinggi" },
    { name: "Bercak Daun", accuracy: 96, cases: "2,890", color: "from-blue-500 to-indigo-600", severity: "Sedang" },
    { name: "Tungro Virus", accuracy: 94, cases: "1,234", color: "from-purple-500 to-violet-600", severity: "Tinggi" },
    { name: "Hawar Daun", accuracy: 97, cases: "2,156", color: "from-emerald-500 to-teal-600", severity: "Sedang" },
    { name: "Kresek Bakteri", accuracy: 95, cases: "1,789", color: "from-orange-500 to-amber-600", severity: "Tinggi" },
    { name: "Busuk Batang", accuracy: 93, cases: "987", color: "from-pink-500 to-rose-600", severity: "Rendah" },
    { name: "Mosaic Virus", accuracy: 96, cases: "1,543", color: "from-green-500 to-emerald-600", severity: "Sedang" },
    { name: "Leaf Curl", accuracy: 94, cases: "1,098", color: "from-cyan-500 to-blue-600", severity: "Rendah" }
  ];

  const features = [
    {
      icon: Zap,
      title: "AI Lightning Detection",
      desc: "Identifikasi penyakit tanaman dalam 2.3 detik menggunakan neural network terdepan",
      color: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      stats: "⚡ 2.3s"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      desc: "Dashboard analitik komprehensif dengan prediksi cuaca dan monitoring IoT",
      color: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      stats: "📊 Live Data"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      desc: "PWA (Progressive Web App) untuk akses offline dan pengalaman native",
      color: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      stats: "📱 PWA Ready"
    },
    {
      icon: Award,
      title: "98.7% Precision",
      desc: "Tingkat akurasi tertinggi dengan model ensemble deep learning",
      color: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      stats: "🎯 98.7%"
    },
    {
      icon: Layers,
      title: "Multi-Platform Sync",
      desc: "Sinkronisasi seamless dengan cloud storage dan backup otomatis",
      color: "from-red-400 to-rose-500",
      bgGradient: "from-red-50 to-rose-50",
      stats: "☁️ Cloud Sync"
    },
    {
      icon: Globe,
      title: "Edge Computing",
      desc: "Infrastruktur edge computing untuk latensi ultra-rendah",
      color: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      stats: "🌐 <50ms"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden relative">
      {/* Advanced Floating Elements with Mouse Parallax */}
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
        <div
          className="absolute w-48 h-48 bg-emerald-300/25 rounded-full blur-lg animate-bounce delay-500 transition-transform duration-1000"
          style={{
            top: `${35 + mousePosition.y * 0.02}%`,
            right: `${35 + mousePosition.x * -0.015}%`,
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
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mr-3">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">Agri<span className="text-emerald-600">Scan</span></span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {["Beranda", "Fitur", "Deteksi", "Testimoni", "Artikel", "FAQ"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-slate-600 hover:text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center px-4 py-2 rounded-xl hover:bg-emerald-50 transition-all duration-300 border-2 border-transparent hover:border-emerald-200 group">
                <LogIn className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Login
              </Link>

              <Link href="/register" className="bg-white text-emerald-600 border-2 border-emerald-300 hover:border-emerald-400 hover:bg-emerald-50 shadow-md hover:shadow-lg transition-all duration-300 px-4 py-2 rounded-xl font-bold flex items-center group">
                <UserPlus className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Revolutionary Hero Section */}
      <section className="relative py-40 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-green-50/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(16,185,129,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(20,184,166,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-100/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-emerald-200/30 animate-float">
          <Cpu className="w-10 h-10 text-emerald-600" />
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-100/50 rounded-xl flex items-center justify-center backdrop-blur-sm border border-teal-200/30 animate-float-delayed">
          <Database className="w-8 h-8 text-teal-600" />
        </div>
        <div className="absolute bottom-40 left-20 w-18 h-18 bg-green-100/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-200/30 animate-bounce">
          <Atom className="w-9 h-9 text-green-600" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-10 animate-fade-in-up">
            <span className="bg-gradient-to-r from-emerald-100 via-teal-100 to-green-100 text-emerald-700 border-2 border-emerald-200/50 px-6 py-3 text-sm font-bold shadow-lg rounded-full inline-flex items-center backdrop-blur-lg group hover:scale-105 transition-all duration-300">
              <Shield className="w-4 h-4 mr-2 animate-pulse" />
              🚀 Revolusi AI untuk Pertanian
              <Lightning className="w-4 h-4 ml-2 text-yellow-500" />
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-800 mb-8 leading-none tracking-tight">
            <span className="block animate-slide-in-left">Deteksi Penyakit</span>
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent relative animate-slide-in-up block">
              Tanaman AI
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-green-400/40 rounded-full animate-pulse"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up delay-300">
            Sistem prediksi penyakit tanaman berbasis{" "}
            <span className="text-emerald-600 font-bold relative">
              machine learning
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-emerald-400 rounded-full"></div>
            </span>{" "}
            yang membantu petani mengidentifikasi dan menangani penyakit tanaman{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up delay-500">
            <Link
              href="/login"
              className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 hover:from-emerald-600 hover:via-teal-600 hover:to-green-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 px-8 py-4 text-lg rounded-2xl font-bold flex items-center justify-center group hover:scale-105 transform overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Upload className="w-5 h-5 mr-3 group-hover:scale-125 transition-transform" />
              Mulai Scan Sekarang
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/register"
              className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-500 px-8 py-4 text-lg rounded-2xl font-bold flex items-center justify-center bg-white/80 backdrop-blur-lg group hover:scale-105 transform"
            >
              <Camera className="w-5 h-5 mr-3 group-hover:scale-125 transition-transform" />
              Lihat Demo Live
              <Play className="w-4 h-4 ml-3 text-emerald-600" />
            </Link>
          </div>


          {/* Animated Scroll Indicator */}
          <div className="absolute -bottom-35 left-0 right-0 flex justify-center z-10">
            <div className="flex flex-col items-center animate-bounce-slow">
              <div className="text-emerald-600 text-sm font-bold mb-2 whitespace-nowrap">Scroll untuk eksplorasi</div>
              <div className="w-8 h-12 border-2 border-emerald-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <ChevronDown className="w-6 h-6 text-emerald-500 mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern How It Works with Interactive Elements */}
      <section id="fitur" className="py-28 bg-gradient-to-br from-white via-slate-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)]"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Cara Kerja
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"> AgriScan</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Proses deteksi revolusioner dalam 3 langkah sederhana dengan teknologi AI terdepan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Upload,
                title: "Upload Foto",
                desc: "Ambil foto berkualitas tinggi daun tanaman yang terindikasi penyakit menggunakan smartphone atau kamera profesional",
                gradient: "from-emerald-400 via-teal-400 to-green-400",
                bgColor: "from-emerald-50 to-teal-50",
                step: "01",
                tech: "Computer Vision",
                features: [""]
              },
              {
                icon: Brain,
                title: "Analisis AI",
                desc: "Algoritma machine learning dengan 50+ layer neural network menganalisis gambar menggunakan teknologi computer vision terdepan",
                gradient: "from-teal-400 via-emerald-400 to-green-400",
                bgColor: "from-teal-50 to-emerald-50",
                step: "02",
                tech: "Deep Learning",
                features: [""]
              },
              {
                icon: CheckCircle,
                title: "Solusi Cerdas",
                desc: "Dapatkan diagnosis akurat dengan confidence score dan rekomendasi penanggulangan yang tepat berdasarkan database terkini",
                gradient: "from-green-400 via-emerald-400 to-teal-400",
                bgColor: "from-green-50 to-emerald-50",
                step: "03",
                tech: "Smart Analytics",
                features: [""]
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-2xl transform group-hover:scale-105 transition-all duration-700 opacity-70`}></div>
                <div className="relative p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-emerald-200/50 group-hover:text-emerald-300/70 transition-colors duration-500">
                    {step.step}
                  </div>

                  {/* Tech Badge */}
                  <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-200">
                    <span className="text-emerald-600 text-xs font-medium">{step.tech}</span>
                  </div>

                  {/* Main Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 relative`}>
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Lightning className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium mb-5">{step.desc}</p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {step.features.map((feature, idx) => (
                      <span key={idx} className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-700 border border-emerald-200/50">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Upload Section with Advanced Features */}
      <section className="py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(20,184,166,0.12),transparent_50%)]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-emerald-200/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-teal-200/40 rounded-full animate-float-delayed blur-sm"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Upload Foto
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"> Tanaman</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
              Drag & drop foto atau klik untuk memilih file dengan teknologi auto-enhancement
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>

              {/* Main Upload Area */}
              <div className="relative border-3 border-dashed border-emerald-300 hover:border-emerald-400 transition-all duration-700 bg-white/90 backdrop-blur-2xl shadow-xl hover:shadow-2xl rounded-3xl group-hover:scale-102 transform overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a085' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                <div className="relative p-12 text-center">
                  {/* Animated Upload Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                      <Upload className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-emerald-300 rounded-full animate-ping opacity-30"></div>
                    <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-emerald-400 rounded-full animate-ping opacity-20 delay-75"></div>
                  </div>

                  <h3 className="text-slate-800 mb-4 text-2xl font-bold">
                    Klik untuk upload atau drag file ke sini
                  </h3>
                  <p className="text-base text-slate-500 font-medium mb-6">
                    Format: JPG, PNG, JPEG (Max 10MB) • Auto-enhance • Smart crop
                  </p>

                  {/* AI Processing Preview */}
                  <div className="bg-gradient-to-r from-slate-50 to-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <div className="flex items-center justify-center space-x-3 text-xs text-slate-600">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1 text-emerald-600" />
                        Computer Vision
                      </div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <div className="flex items-center">
                        <Brain className="w-3 h-3 mr-1 text-teal-600" />
                        Neural Network
                      </div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <div className="flex items-center">
                        <Microscope className="w-3 h-3 mr-1 text-green-600" />
                        Disease Detection
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button with Loading Animation */}
            <Link
              href="/dashboard"
              className="w-full mt-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 hover:from-emerald-600 hover:via-teal-600 hover:to-green-600 text-white shadow-xl hover:shadow-2xl transition-all duration-700 py-4 text-lg rounded-2xl font-bold flex items-center justify-center group hover:scale-102 transform relative overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Scan className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Mulai Scan Sekarang
              <Sparkles className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* Ultimate CTA Section */}
      <section className="py-28 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-white/15 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute top-1/2 left-10 w-10 h-10 bg-white/20 rounded-full animate-bounce blur-sm"></div>

        <div className="container mx-auto px-6 text-center relative">
          {/* Badge */}
          <div className="mb-8">
            <span className="bg-white/20 text-white border border-white/30 px-6 py-2 text-sm font-bold shadow-lg rounded-full inline-flex items-center backdrop-blur-lg group hover:scale-105 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Bergabung Sekarang
              <Rocket className="w-4 h-4 ml-2 text-yellow-300" />
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="block animate-slide-in-left">Siap Revolusi Pertanian Anda?</span>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/login"
              className="relative bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-700 px-8 py-4 text-lg font-bold rounded-2xl flex items-center justify-center group hover:scale-105 transform overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/0 via-emerald-100/50 to-emerald-50/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Upload className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Mulai Scan Gratis
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/register"
              className="border-2 border-white text-white hover:bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-700 px-8 py-4 text-lg font-bold rounded-2xl flex items-center justify-center group hover:scale-105 transform backdrop-blur-lg"
            >
              <Brain className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Demo AI Live
              <Play className="w-5 h-5 ml-3 group-hover:scale-105 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Contact Information */}
      <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mr-3">
                  <Scan className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Agri<span className="text-emerald-400">Scan</span></span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Solusi cerdas untuk deteksi penyakit tanaman berbasis AI yang membantu petani meningkatkan hasil panen.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Tautan Cepat</h3>
              <ul className="space-y-2">
                {["Beranda", "Fitur", "Deteksi", "Testimoni", "Artikel", "FAQ"].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-emerald-500" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Kontak Kami</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="mr-3 w-5 h-5 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-500">
                    <i className="ri-mail-line text-xs"></i>
                  </div>
                  <span className="text-slate-400 text-sm">info@agriscan.id</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-up {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.2s both;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 1s ease-out 0.4s both;
        }
        
        .rounded-4xl {
          border-radius: 2rem;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
        }
        
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }
        
        .backdrop-blur-3xl {
          backdrop-filter: blur(64px);
        }
        
        .border-3 {
          border-width: 3px;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}