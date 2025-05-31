import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Recycle, PhoneCall, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold">エコクリーン</span>
            </div>
            <p className="text-gray-400 mb-4">
              環境に優しい廃品回収サービスを提供しています。
              不用品の適切な処理で、より良い未来へ。
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  家庭不用品回収
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  オフィス・事務所
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  大型ゴミ処理
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  引越し廃品回収
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  リサイクル処理
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  お客様の声
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">0120-123-456</p>
                  <p className="text-sm text-gray-400">受付時間: 9:00〜20:00（年中無休）</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <div>
                  <p className="break-all">info@eco-clean.example.com</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Button className="w-full bg-green-500 hover:bg-green-600" asChild>
                <Link href="#contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} エコクリーン. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}