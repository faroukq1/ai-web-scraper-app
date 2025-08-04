'use client';

import { cn } from '@/lib/utils';
import { DialogTitle } from '@radix-ui/react-dialog';
import { LucideIcon } from 'lucide-react';
import { Separator } from './ui/separator';

interface Props {
  icon?: LucideIcon;
  title?: string;
  subTitle?: string;
  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

const CustomDialogHeader = ({
  icon: Icon,
  title,
  subTitle,
  iconClassName,
  titleClassName,
  subTitleClassName,
}: Props) => {
  return (
    <DialogTitle className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
          {Icon && (
            <Icon size={40} className={cn('stroke-primary', iconClassName)} />
          )}
          {title && (
            <p className={cn('text-xl text-primary', titleClassName)}>
              {title}
            </p>
          )}

          {subTitle && (
            <p className={cn('text-xl text-primary', subTitleClassName)}>
              {subTitle}
            </p>
          )}
        </div>
      </DialogTitle>
      <Separator className="my-4" />
    </DialogTitle>
  );
};

export default CustomDialogHeader;
