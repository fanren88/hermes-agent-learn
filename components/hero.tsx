"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TerminalMock } from "@/components/terminal-mock";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">
          Observatory Terminal
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.25rem]">
          学会部署和使用
          <br />
          <span className="text-[var(--accent-gold)]">Hermes Agent</span>
        </h1>
        <p className="mt-4 max-w-lg text-lg text-[var(--text-secondary)]">
          中文实战教程：从安装到消息网关、自动化与项目案例。不是完整参考手册，而是带你走通的学习路径。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/learn/install"
            className="inline-flex items-center rounded-[var(--radius-md)] bg-[var(--accent-gold)] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#f0c96a]"
          >
            从安装开始
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:border-[rgba(232,184,75,0.4)]"
          >
            查看学习路径
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <TerminalMock />
      </motion.div>
    </section>
  );
}
