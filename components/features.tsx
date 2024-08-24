"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Code className="h-8 w-8 mb-2" />,
      title: "Clean Code",
      description: "Write maintainable and efficient code that's easy to understand and scale."
    },
    {
      icon: <Palette className="h-8 w-8 mb-2" />,
      title: "Modern Design",
      description: "Create visually appealing interfaces that follow the latest design trends."
    },
    {
      icon: <Zap className="h-8 w-8 mb-2" />,
      title: "Fast Performance",
      description: "Optimize for speed to ensure quick load times and smooth user experiences."
    },
    {
      icon: <Shield className="h-8 w-8 mb-2" />,
      title: "Secure Solutions",
      description: "Implement robust security measures to protect user data and prevent vulnerabilities."
    }
  ];

  return (
    <section className="mx-auto max-w-5xl py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {feature.icon}
                <span className="ml-2">{feature.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}