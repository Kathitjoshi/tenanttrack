import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Organization } from '@/types/organization';
import { AlertTriangle } from 'lucide-react';

interface DeleteOrganizationDialogProps {
  organization: Organization | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (org: Organization) => void;
}

export function DeleteOrganizationDialog({
  organization,
  open,
  onOpenChange,
  onConfirm,
}: DeleteOrganizationDialogProps) {
  const [confirmText, setConfirmText] = useState('');

  if (!organization) return null;

  const isConfirmed = confirmText === organization.name;

  const handleConfirm = () => {
    if (isConfirmed) {
      onConfirm(organization);
      setConfirmText('');
      onOpenChange(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-destructive/10">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <AlertDialogTitle>Delete Organization</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="pt-2">
            This action cannot be undone. This will permanently delete{' '}
            <span className="font-semibold text-foreground">{organization.name}</span> and remove
            all associated data including members and projects.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="py-4">
          <Label htmlFor="confirm" className="text-sm">
            Type <span className="font-semibold">{organization.name}</span> to confirm
          </Label>
          <Input
            id="confirm"
            className="mt-2"
            placeholder="Enter organization name"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setConfirmText('')}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={!isConfirmed}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50"
          >
            Delete Organization
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
