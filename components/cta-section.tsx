"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐ廃品回収のお見積もりを
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            お電話一本で、迅速・丁寧なサービスをご提供します。
            無料お見積もりで、料金の不安を解消しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-white/90" asChild>
              <Link href="#contact">無料お見積もり</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="tel:0120-123-456">今すぐ電話する</Link>
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-white/80">
              <span className="font-bold text-white">エコクリーン </span>
              は、年中無休で営業しています。<br className="hidden md:inline" />
              急な依頼にも対応可能です。まずはお気軽にご連絡ください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}