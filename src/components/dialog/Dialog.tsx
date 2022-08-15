import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { XIcon } from 'components/icons';
import ButtonIcon from 'components/button-icon';
import Logo from 'components/logo';

type DialogRootProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof DialogPrimitive.Root>;

type DialogTriggerProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof DialogPrimitive.Trigger>;

type DialogContentProps = {
  children: React.ReactNode;
  title: string;
} & React.ComponentProps<typeof DialogPrimitive.Content>;

const s = {
  overlay: /*tw:*/ `fixed inset-0 bg-black bg-opacity-75 rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out`,
  content: /*tw:*/ `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-[#1E2229] pt-12 px-8 pb-14 rounded-3xl rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out`,
  title: /*tw:*/ `flex flex-col items-center font-industry text-[22px] font-semibold uppercase text-white`,
};

const DialogRoot = ({ children, ...props }: DialogRootProps) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

const DialogTrigger = ({ children, ...props }: DialogTriggerProps) => {
  return <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>;
};

const DialogContent = ({ children, title, ...props }: DialogContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={s.overlay} />
      <DialogPrimitive.Content className={s.content} {...props}>
        <div className="relative">
          <DialogPrimitive.Title className={s.title}>
            <Logo />
            {title}
          </DialogPrimitive.Title>
          <div className="absolute top-0 right-0">
            <DialogPrimitive.Close asChild>
              <ButtonIcon variant="subtle" size="sm">
                <XIcon className="h-full w-full" />
              </ButtonIcon>
            </DialogPrimitive.Close>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

DialogRoot.Trigger = DialogTrigger;
DialogRoot.Content = DialogContent;

export default DialogRoot;
