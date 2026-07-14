import { IconType } from 'react-icons';
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa6';

/* Maps a social label (e.g. "X / Twitter", "LinkedIn") to a real brand icon. */
const MAP: { match: (l: string) => boolean; Icon: IconType }[] = [
  { match: (l) => l.includes('linkedin'), Icon: FaLinkedinIn },
  { match: (l) => l.includes('twitter') || l === 'x' || l.startsWith('x '), Icon: FaXTwitter },
  { match: (l) => l.includes('instagram'), Icon: FaInstagram },
  { match: (l) => l.includes('facebook'), Icon: FaFacebookF },
  { match: (l) => l.includes('github'), Icon: FaGithub },
];

export function resolveSocialIcon(label: string): IconType | null {
  const key = label.trim().toLowerCase();
  return MAP.find((m) => m.match(key))?.Icon ?? null;
}

/** Renders the brand icon for a social label; falls back to the label text. */
export default function SocialIcon({ label, className }: { label: string; className?: string }) {
  const Icon = resolveSocialIcon(label);
  return Icon ? <Icon className={className} aria-hidden="true" /> : <span>{label}</span>;
}
