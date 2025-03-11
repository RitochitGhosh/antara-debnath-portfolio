"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto font-sans flex flex-col mt-24 sm:mt-32">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/posts" className="hover:text-gray-900">Posts</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Financial Statement Analysis</span>
      </nav>

      {/* Header Image */}
      <Image
        src="/images/posts/financial-analysis.jpg"
        alt="Financial Analysis"
        width={800}
        height={400}
        className="w-full max-w-full h-48 sm:h-[400px] object-cover rounded-lg mb-8"
        style={{ maxWidth: '100%' }}
        priority
      />

      {/* Title */}
      <h1 className="title text-4xl sm:text-4xl font-bold mb-4">Financial Statement Analysis: A Comprehensive Guide for Commerce Students</h1>
      <div className="flex flex-wrap gap-x-2 gap-y-1 justify-start items-center py-2 sm:py-8">
        <div className="flex items-center gap-x-2">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=AD" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <span className="text-gray-500 font-semibold">Antara Debnath</span>
        </div>
        <div className="flex items-center gap-x-1">
          <Calendar className="size-4" />
          <span>December 24, 2024</span>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter mt-6 sm:mt-8">Introduction</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Financial statement analysis is a crucial skill for commerce students and business professionals. It involves examining financial statements to evaluate a company&quot;s performance, stability, and potential for growth. This guide will walk you through the fundamental concepts and techniques.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">Key Components of Financial Statements</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
        <li><strong className="bg-orange-300 px-1 rounded dark:bg-orange-900">Balance Sheet</strong> - Shows assets, liabilities, and shareholders&quot; equity</li>
        <li><strong className="bg-orange-300 px-1 rounded dark:bg-orange-900">Income Statement</strong> - Details revenues, expenses, and profit/loss</li>
        <li><strong className="bg-orange-300 px-1 rounded dark:bg-orange-900">Cash Flow Statement</strong> - Tracks cash movements</li>
      </ul>

      {/* <Image 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        alt="Financial Analysis Charts" 
        width={800} 
        height={400} 
        className="w-full h-48 sm:h-[400px] object-cover rounded-lg my-8" 
        priority 
      /> */}

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">Important Financial Ratios</h2>
      <div className="mt-2 sm:mt-3 text-gray-700 dark:text-gray-300">
        <h3 className="text-lg sm:text-xl font-medium mt-4 sm:mt-6">1. Liquidity Ratios</h3>
        <CodeBlock
          code={`Current Ratio = Current Assets / Current Liabilities
Quick Ratio = (Current Assets - Inventory) / Current Liabilities`}
        />

        <h3 className="text-lg sm:text-xl font-medium mt-4 sm:mt-6">2. Profitability Ratios</h3>
        <CodeBlock
          code={`Gross Profit Margin = (Revenue - COGS) / Revenue × 100
Net Profit Margin = Net Profit / Revenue × 100`}
        />
      </div>

      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
        &quot;Financial statements are like a company&quot;s report card. They tell us about its health, performance, and future potential.&quot;<br />— Warren Buffett
      </blockquote>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">Practical Applications</h2>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Understanding financial statement analysis helps in:
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
        <li><strong className="bg-blue-300 px-1 rounded dark:bg-blue-900">Investment Decisions</strong> - Evaluating potential investments</li>
        <li><strong className="bg-blue-300 px-1 rounded dark:bg-blue-900">Credit Analysis</strong> - Assessing creditworthiness</li>
        <li><strong className="bg-blue-300 px-1 rounded dark:bg-blue-900">Business Strategy</strong> - Making informed business decisions</li>
        <li><strong className="bg-blue-300 px-1 rounded dark:bg-blue-900">Performance Evaluation</strong> - Comparing with competitors</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">Conclusion</h2>
      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        Mastering financial statement analysis is essential for commerce students. It provides the foundation for understanding business performance and making informed financial decisions. Keep practicing with real-world examples to strengthen your analytical skills.
      </p>
    </div>
  );
}