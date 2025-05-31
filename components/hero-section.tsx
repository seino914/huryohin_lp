"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80 mix-blend-multiply z-10" />
        <img
          src="https://images.pexels.com/photos/2682184/pexels-photo-2682184.jpeg"
          alt="廃品回収"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              スムーズな<span className="text-green-300">廃品回収</span>で<br />
              スッキリとした空間に
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              不用品をプロの手で迅速に回収。丁寧な対応と適正価格で、環境に優しいリサイクルをサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                <Link href="#contact">無料見積もり依頼</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Link href="#pricing">料金を確認する</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">お急ぎの方へ</h3>
              <p className="text-white/80 mb-6">
                急な引越しや片付けで困っていませんか？最短当日対応いたします。
              </p>
              <div className="bg-white/10 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">電話一本で即日対応</p>
                  <p className="text-white/70 text-sm">年中無休で営業中</p>
                </div>
                <span className="text-xl font-bold text-white">0120-123-456</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { title: "迅速対応", desc: "最短当日回収" },
            { title: "適正価格", desc: "明確な料金体系" },
            { title: "環境配慮", desc: "再資源化を推進" },
            { title: "安心保証", desc: "プロによる確実処理" },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}