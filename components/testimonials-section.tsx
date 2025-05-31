"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "佐藤 健太",
      location: "東京都世田谷区",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 5,
      text: "引っ越しの際に利用しました。大量の不用品があり困っていましたが、迅速に対応してくれて助かりました。スタッフの方々も丁寧で、安心してお任せできました。"
    },
    {
      name: "田中 美咲",
      location: "神奈川県横浜市",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5,
      text: "実家の片付けで大量の不用品が出ました。重いものばかりでしたが、手際よく運び出してくれて感謝しています。料金も明確で追加料金もなく、とても良心的でした。"
    },
    {
      name: "山田 誠",
      location: "埼玉県さいたま市",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      rating: 4,
      text: "オフィスの移転に伴い利用しました。大量の書類や古いデスクなど、すべて適切に処分してくれました。急な依頼にも関わらず対応してくれて非常に助かりました。"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/40">
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
            <span className="text-green-600">お客様の声</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            実際にサービスをご利用いただいたお客様からの声をご紹介します。
            お客様満足度96%の実績があります。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter className="border-t pt-4 flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}