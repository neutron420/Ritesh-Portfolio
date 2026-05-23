import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type SocialLinkProps = {
	icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
	href: string;
	label: string;
	brandColor?: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	socialLinks?: SocialLinkProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	socialLinks,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-card relative grid h-full w-full border-0 md:border md:shadow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:rounded-3xl overflow-hidden',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6 hidden lg:block text-muted-foreground/30" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6 hidden lg:block text-muted-foreground/30" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 hidden lg:block text-muted-foreground/30" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 hidden lg:block text-muted-foreground/30" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-4 py-6 sm:p-8 md:p-10">
					<h1 className="text-2xl sm:text-3xl font-extrabold md:text-4xl lg:text-5xl tracking-tight">
						{title}
					</h1>
					<p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed">
						{description}
					</p>
					<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-2">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
					{socialLinks && socialLinks.length > 0 && (
						<div className="pt-6 border-t border-border/10 flex flex-wrap gap-3">
							{socialLinks.map((social, index) => {
								const Icon = social.icon;
								return (
									<a
										key={index}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 rounded-xl bg-muted/40 border border-border/40 hover:border-border/80 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95"
										title={social.label}
									>
										<Icon className="w-5 h-5 transition-colors duration-300" style={{ color: social.brandColor }} />
									</a>
								);
							})}
						</div>
					)}
				</div>
			</div>
			<div
				className={cn(
					'bg-muted/20 flex h-full w-full items-center border-t border-border/10 p-5 sm:p-6 md:col-span-1 md:border-t-0 md:border-l',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-3 py-3', className)} {...props}>
			<div className="bg-muted/40 rounded-lg p-3">
				<Icon className="h-5 w-5" />
			</div>
			<div>
				<p className="font-medium">{label}</p>
				<p className="text-muted-foreground text-xs">{value}</p>
			</div>
		</div>
	);
}
