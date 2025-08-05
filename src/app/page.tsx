"use client";

import { useState } from 'react';
import { CopilotSidebar } from "@copilotkit/react-ui";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Heart, Activity, Apple, Calendar, User } from 'lucide-react';

export default function HealthDashboard() {
  const [themeColor] = useState("#8499B1"); // Claude's orange color

  return (
    <main style={{ "--copilot-kit-primary-color": themeColor } as any}>
      <YourMainContent themeColor={themeColor} />
      <CopilotSidebar
        clickOutsideToClose={false}
        defaultOpen={true}
        labels={{
          title: "Health Assistant",
          initial: "👋 Hi there! I'm your AI health assistant powered by Agno. I can help you track your health data, monitor your mood, log glucose readings, and plan your meals.\n\nTry asking me about:\n- **Authentication**: \"My name is John Smith\" or \"User ID: 12345\"\n- **Mood Tracking**: \"I'm feeling great today!\"\n- **Glucose Monitoring**: \"My glucose reading is 120\"\n- **Food Logging**: \"I ate grilled chicken with vegetables\"\n- **Dashboard**: \"Show my health dashboard\"\n- **Meal Planning**: \"Generate a meal plan for tomorrow\"\n\nI'll help you manage your health journey with personalized insights and support!"
        }}
      />
    </main>
  );
}

function YourMainContent({ themeColor }: { themeColor: string }) {
  return (
    <div
      style={{ backgroundColor: themeColor }}
      className="h-screen w-screen flex justify-center items-center flex-col transition-colors duration-300"
    >
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Health Assistant Dashboard</h1>
        <p className="text-gray-200 text-center italic mb-8">Your comprehensive health tracking and management system 🏥</p>
        
        {/* Health Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <div className="flex items-center">
              <Activity className="h-6 w-6 text-orange-300" />
              <div className="ml-3">
                <p className="text-sm font-medium text-white/80">CGM Average</p>
                <p className="text-xl font-bold text-white">-- mg/dL</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-amber-300" />
              <div className="ml-3">
                <p className="text-sm font-medium text-white/80">Mood Score</p>
                <p className="text-xl font-bold text-white">--/10</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <div className="flex items-center">
              <Apple className="h-6 w-6 text-yellow-300" />
              <div className="ml-3">
                <p className="text-sm font-medium text-white/80">Daily Calories</p>
                <p className="text-xl font-bold text-white">-- kcal</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-orange-200" />
              <div className="ml-3">
                <p className="text-sm font-medium text-white/80">Days Tracked</p>
                <p className="text-xl font-bold text-white">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">How to get started:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/90 mb-2"><strong>🔐 Authentication:</strong></p>
              <p className="text-white/70 font-mono bg-white/10 p-2 rounded">"My name is John Smith"</p>
            </div>
            <div>
              <p className="text-white/90 mb-2"><strong>😊 Mood Tracking:</strong></p>
              <p className="text-white/70 font-mono bg-white/10 p-2 rounded">"I'm feeling great today!"</p>
            </div>
            <div>
              <p className="text-white/90 mb-2"><strong>🩸 Glucose Logging:</strong></p>
              <p className="text-white/70 font-mono bg-white/10 p-2 rounded">"My glucose reading is 120"</p>
            </div>
            <div>
              <p className="text-white/90 mb-2"><strong>🍽️ Food Logging:</strong></p>
              <p className="text-white/70 font-mono bg-white/10 p-2 rounded">"I ate grilled chicken with vegetables"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}