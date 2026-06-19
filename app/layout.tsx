import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioLingo｜为中文母语者设计的英语学习课",
  description: "从自然拼读到中级语法，通过观察、辨析、检索练习与自主产出，把英语规则转化为真实表达能力。",
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
