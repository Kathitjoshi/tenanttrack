import { cn } from '@/lib/utils';

interface OrganizationAvatarProps {
  name: string;
  logo?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-lg',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function getColorFromName(name: string): string {
  const colors = [
    'bg-primary',
    'bg-plan-enterprise',
    'bg-warning',
    'bg-destructive',
    'bg-success',
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

export function OrganizationAvatar({ name, logo, size = 'md', className }: OrganizationAvatarProps) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className={cn(
          'rounded-lg object-cover',
          sizeClasses[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'rounded-lg flex items-center justify-center font-semibold text-primary-foreground',
        sizeClasses[size],
        getColorFromName(name),
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}
