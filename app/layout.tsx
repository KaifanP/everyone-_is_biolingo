import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioLingo｜英语与韩语学习课",
  description: "为中文母语者设计的英语语法、自然拼读与韩语入门课程。通过观察、辨析、检索练习与自主产出，把语言规则转化为真实表达能力。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
