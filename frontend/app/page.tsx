"use client";

import { useState } from "react";
import axios from "axios";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import PromptBox from "@/components/PromptBox";
import ResultCard from "@/components/ResultCard";

export default function Home() {
  const [request, setRequest] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const [currentStep, setCurrentStep] = useState(0);

  async function generateDocument() {
    if (!request.trim()) {
      alert("Please enter your request.");
      return;
    }

    setLoading(true);
    setResult(null);
    setCurrentStep(1);

    // Planner
    setTimeout(() => setCurrentStep(2), 800);

    // Executor
    setTimeout(() => setCurrentStep(3), 1800);

    // Reviewer
    setTimeout(() => setCurrentStep(4), 3000);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/agent",
        {
          request,
        }
      );

      setResult(response.data);

      // DOCX Ready
      setCurrentStep(5);

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      setCurrentStep(0);

    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6">

        <Hero />

        <PromptBox
          request={request}
          setRequest={setRequest}
          loading={loading}
          onGenerate={generateDocument}
        />

        <Workflow currentStep={currentStep} />

        <ResultCard result={result} />

      </div>

    </main>
  );
}