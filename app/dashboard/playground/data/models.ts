export const types = ["GPT-3", "GPT-4", "Codex"] as const;

export type ModelType = (typeof types)[number];

export interface Model<Type = string> {
  id: string;
  name: string;
  description: string;
  strengths?: string;
  type: Type;
}

export const models: Model<ModelType>[] = [
  {
    id: "c305f976-8e38-42b1-9fb7-d21b2e34f0da",
    name: "Audience Apex Predictor",
    description:
      "The Audience Apex Predictor is a state-of-the-art LLM tool designed to forecast Television Rating Points (TRP) with remarkable accuracy. This tool analyzes a vast array of data points, including historical viewership trends, demographic information, and contemporary viewing habits, to provide precise TRP predictions. It helps content creators and broadcasters tailor their programming to maximize audience engagement and viewership.",
    type: "GPT-4",
    strengths:
      "Data-Driven Insights, Audience Targeting Precision, Content Optimization",
  },
  {
    id: "464a47c3-7ab5-44d7-b669-f9cb5a9e8465",
    name: "Brand Sync Scanner",
    description:
      "The Brand Sync Scanner is an advanced LLM tool specialized in assessing and improving the alignment between television programs and their associated brands. This tool evaluates various factors such as brand values, audience perceptions, and content themes to ensure a harmonious and impactful integration of brand messages within programs. It's an essential tool for optimizing brand presence and reinforcing advertising effectiveness in broadcast content.",
    type: "GPT-4",
    strengths:
      "Brand-Content Alignment, Enhanced Advertising Impact, Strategic Brand Positioning",
  },
];
