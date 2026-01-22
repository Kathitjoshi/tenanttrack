export type SubscriptionPlan = 'free' | 'pro' | 'enterprise';
export type OrganizationStatus = 'active' | 'inactive' | 'suspended';

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  plan: SubscriptionPlan;
  status: OrganizationStatus;
  memberCount: number;
  createdAt: string;
  updatedAt: string;
  settings: OrganizationSettings;
}

export interface OrganizationSettings {
  primaryColor?: string;
  maxUsers: number;
  maxProjects: number;
  features: string[];
}

export const PLAN_LIMITS: Record<SubscriptionPlan, { maxUsers: number; maxProjects: number; features: string[] }> = {
  free: {
    maxUsers: 5,
    maxProjects: 3,
    features: ['Basic analytics', 'Email support'],
  },
  pro: {
    maxUsers: 25,
    maxProjects: 20,
    features: ['Advanced analytics', 'Priority support', 'API access', 'Custom integrations'],
  },
  enterprise: {
    maxUsers: -1, // unlimited
    maxProjects: -1,
    features: ['Unlimited everything', 'Dedicated support', 'SSO/SAML', 'Custom contracts', 'SLA'],
  },
};
