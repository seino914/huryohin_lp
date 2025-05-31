"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "お名前を入力してください" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  phone: z.string().min(10, { message: "有効な電話番号を入力してください" }),
  address: z.string().min(5, { message: "住所を入力してください" }),
  serviceType: z.string(),
  preferredDate: z.string(),
  message: z.string().optional(),
});

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "home",
      preferredDate: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // 実際のAPI呼び出しの代わりに、タイムアウトを使用してフォーム送信をシミュレート
    setTimeout(() => {
      toast({
        title: "お問い合わせありがとうございます",
        description: "担当者より早急にご連絡いたします。",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactInfo = [
    {
      icon: <PhoneCall className="h-6 w-6 text-green-500" />,
      title: "お電話",
      details: ["0120-123-456", "（受付時間：9:00〜20:00）"]
    },
    {
      icon: <Mail className="h-6 w-6 text-green-500" />,
      title: "メール",
      details: ["info@eco-clean.example.com"]
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-500" />,
      title: "所在地",
      details: ["〒123-4567", "東京都新宿区新宿1-1-1"]
    },
    {
      icon: <Clock className="h-6 w-6 text-green-500" />,
      title: "営業時間",
      details: ["年中無休", "9:00〜20:00"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-background">
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
            <span className="text-green-600">お問い合わせ</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            廃品回収のご依頼・お見積りはこちらから。
            お客様のご要望に合わせた最適なプランをご提案いたします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                      {info.icon}
                    </div>
                    <h3 className="font-bold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className={i === 0 ? "font-medium" : "text-muted-foreground text-sm"}>
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="aspect-video relative overflow-hidden rounded-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030880551!2d139.6996933!3d35.6895014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c981ec29895%3A0x61fc4cf08c7f2085!2z5paw5a6_6aeF!5e0!3m2!1sja!2sjp!4v1689472724040!5m2!1sja!2sjp"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">お見積もり・お問い合わせフォーム</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>お名前 <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="山田 太郎" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>メールアドレス <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="your-email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>電話番号 <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="090-1234-5678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>住所 <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="東京都新宿区..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>サービスタイプ</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="home" id="home" />
                                  <FormLabel htmlFor="home" className="font-normal cursor-pointer">家庭用不用品</FormLabel>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="office" id="office" />
                                  <FormLabel htmlFor="office" className="font-normal cursor-pointer">オフィス・事業所</FormLabel>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="moving" id="moving" />
                                  <FormLabel htmlFor="moving" className="font-normal cursor-pointer">引越し関連</FormLabel>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>希望日</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="希望日を選択" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="asap">できるだけ早く</SelectItem>
                                <SelectItem value="week">1週間以内</SelectItem>
                                <SelectItem value="twoweeks">2週間以内</SelectItem>
                                <SelectItem value="month">1ヶ月以内</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              具体的な日時は追ってご連絡いたします
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>詳細・ご要望</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="回収品目や数量、特別なご要望などがございましたらご記入ください。" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isSubmitting}>
                      {isSubmitting ? "送信中..." : "無料お見積もり依頼"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}