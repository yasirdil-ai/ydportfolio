export interface AIOutcome {
  campaignName: string;
  audienceStrategy: string;
  keyMessaging: string[];
  channels: string[];
  ctaExamples: string[];
  positioningHooks: string[];
  insights: {
    recommendedChannels: string;
    audienceBehavior: string;
    suggestedWorkflow: string;
    engagementPotential: string;
  };
}

export const generateMarketingIntelligence = async (
  topic: string, 
  module: 'campaign' | 'crm' | 'growth' | 'storytelling', 
  tone: string = 'professional', 
  audience: string = 'general'
): Promise<AIOutcome> => {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic, module, tone, audience }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Strategy generation failed with status ${response.status}`);
  }

  return response.json();
};
