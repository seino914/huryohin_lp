"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Home, Building, Truck, Recycle, Calendar } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-green-500" />,
      title: "家庭不用品回収",
      description: "引越し、大掃除、遺品整理など、ご家庭の不用品を丁寧に回収します。"
    },
    {
      icon: <Building className="h-10 w-10 text-green-500" />,
      title: "オフィス・事務所",
      description: "移転、リニューアル時のオフィス家具や電子機器などを一括回収。"
    },
    {
      icon: <Trash2 className="h-10 w-10 text-green-500" />,
      title: "大型ゴミ処理",
      description: "自治体で回収できない大型家具、家電などを適切に処分します。"
    },
    {
      icon: <Truck className="h-10 w-10 text-green-500" />,
      title: "引越し廃品回収",
      description: "引越し時の不用品を一括回収し、新生活をスムーズにスタート。"
    },
    {
      icon: <Recycle className="h-10 w-10 text-green-500" />,
      title: "リサイクル処理",
      description: "回収した廃品は可能な限りリサイクルし、環境負荷を軽減します。"
    },
    {
      icon: <Calendar className="h-10 w-10 text-green-500" />,
      title: "定期回収プラン",
      description: "事業所向けに定期的な回収プランをご用意しています。"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-600">幅広い廃品回収</span>サービスを提供
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            家庭用品からオフィス家具まで、あらゆる不用品の回収・処分をサポートします。
            環境に配慮した適切な処理で、お客様の廃品処理の悩みを解決します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeInUp}
          className="mt-16 bg-green-50 dark:bg-green-900/20 rounded-xl p-6 md:p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">回収可能品目例</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "家具類", "家電製品", "オフィス家具", "パソコン・IT機器", "厨房機器",
              "衣類・布団", "書籍・紙類", "金属製品", "プラスチック製品", "自転車"
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-card rounded-lg p-3 text-center shadow-sm">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}