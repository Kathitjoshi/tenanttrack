import { OrganizationStatus } from '@/types/organization';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: OrganizationStatus;
  className?: string;
}

const statusStyles: Record<OrganizationStatus, string> = {
  active: 'bg-success/10 text-success border-success/20',
  inactive: 'bg-secondary text-muted-foreground border-border',
  suspended: 'bg-destructive/10 text-destructive border-destructive/20',
};

const statusLabels: Record<OrganizationStatus, string> = {
  active: 'Active',
  inactive: 'Inactive',
  suspended: 'Suspended',
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'font-medium text-xs px-2.5 py-0.5 border',
        statusStyles[status],
        className
      )}
    >
      <span className={cn(
        'w-1.5 h-1.5 rounded-full mr-1.5',
        status === 'active' && 'bg-success',
        status === 'inactive' && 'bg-muted-foreground',
        status === 'suspended' && 'bg-destructive'
      )} />
      {statusLabels[status]}
    </Badge>
  );
}
