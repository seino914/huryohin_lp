"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // 基本料金プラン
  const basicPlans = [
    {
      name: "ミニマムプラン",
      description: "少量の不用品回収に最適",
      price: "5,000",
      features: [
        "軽トラック1/4程度",
        "小型家具2〜3点",
        "作業員1名",
        "30分以内の作業"
      ]
    },
    {
      name: "スタンダードプラン",
      description: "一般的な量の不用品回収に",
      price: "15,000",
      features: [
        "軽トラック満載程度",
        "家具・家電5〜8点",
        "作業員2名",
        "60分以内の作業",
        "分別・仕分けサービス"
      ],
      highlighted: true
    },
    {
      name: "大量回収プラン",
      description: "引越しや大掃除に最適",
      price: "30,000",
      features: [
        "2トントラック程度",
        "家具・家電10点以上",
        "作業員2〜3名",
        "120分以内の作業",
        "分別・仕分けサービス",
        "清掃サービス付き"
      ]
    }
  ];

  // 特殊品目の料金表
  const specialItems = [
    { item: "冷蔵庫（大型）", price: "5,000円〜" },
    { item: "洗濯機", price: "3,000円〜" },
    { item: "エアコン", price: "4,000円〜" },
    { item: "テレビ（40インチ以上）", price: "4,000円〜" },
    { item: "ソファ（3人掛け）", price: "6,000円〜" },
    { item: "ベッド（シングル）", price: "5,000円〜" },
    { item: "ベッド（ダブル以上）", price: "7,000円〜" },
    { item: "タンス・食器棚", price: "4,000円〜" },
    { item: "ピアノ", price: "15,000円〜" },
    { item: "パソコン・モニター", price: "2,000円〜" }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-background">
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
            <span className="text-green-600">明確な料金</span>で安心サービス
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            わかりやすい料金体系で、追加料金の心配なし。お客様のニーズに合わせた最適なプランをご用意しています。
            まずはお見積りからお気軽にご相談ください。
          </p>
        </motion.div>

        <Tabs defaultValue="plans" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="plans">回収プラン</TabsTrigger>
              <TabsTrigger value="special">特殊品目料金表</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="plans" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {basicPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeInUp}
                >
                  <Card className={`h-full relative ${plan.highlighted ? 'border-green-500 shadow-lg' : ''}`}>
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-0 right-0 flex justify-center">
                        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          人気プラン
                        </span>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">¥{plan.price}</span>
                        <span className="text-muted-foreground ml-1">（税込）〜</span>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${plan.highlighted ? 'bg-green-500 hover:bg-green-600' : ''}`} asChild>
                        <Link href="#contact">見積もり依頼</Link>
                      </Button>
                    </CardFooter>
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
              className="bg-muted p-6 rounded-lg text-center"
            >
              <p className="text-muted-foreground">
                ※料金は目安です。実際の料金は回収物の量や状態、作業の難易度によって変わる場合があります。<br />
                詳細なお見積りをご希望の方は、お気軽にご連絡ください。
              </p>
            </motion.div>
          </TabsContent>

          <TabsContent value="special">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
              className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-6 py-3 text-left text-sm font-medium">品目</th>
                      <th className="px-6 py-3 text-right text-sm font-medium">料金目安</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {specialItems.map((item, index) => (
                      <tr key={index} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm">{item.item}</td>
                        <td className="px-6 py-4 text-sm text-right">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-muted p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  ※家電リサイクル法対象品目は、リサイクル料金が別途かかります。<br />
                  詳しくはお問い合わせください。
                </p>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}