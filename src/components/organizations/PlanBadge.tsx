import { SubscriptionPlan } from '@/types/organization';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PlanBadgeProps {
  plan: SubscriptionPlan;
  className?: string;
}

const planStyles: Record<SubscriptionPlan, string> = {
  free: 'bg-secondary text-muted-foreground border-border',
  pro: 'bg-primary/10 text-primary border-primary/20',
  enterprise: 'bg-plan-enterprise/10 text-plan-enterprise border-plan-enterprise/20',
};

const planLabels: Record<SubscriptionPlan, string> = {
  free: 'Free',
  pro: 'Pro',
  enterprise: 'Enterprise',
};

export function PlanBadge({ plan, className }: PlanBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'font-medium text-xs px-2.5 py-0.5 border',
        planStyles[plan],
        className
      )}
    >
      {planLabels[plan]}
    </Badge>
  );
}
