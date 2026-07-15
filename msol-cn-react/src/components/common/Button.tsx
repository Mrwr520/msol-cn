import type { ReactNode } from 'react';
import { Arrow } from './Arrow';

type ButtonVariant = 'darkblue' | 'inverted' | 'darkblue-inverted';
type ButtonSize = 'medium' | 'large' | 'grand';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  onClick?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  target?: never;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const SIZE_MAP: Record<ButtonSize, string> = {
  medium: 'py-4 md:py-[17px]',
  large: 'py-[19px] md:py-[23px]',
  grand: 'py-[14px] md:py-[18px]',
};

const VARIANT_MAP: Record<ButtonVariant, string> = {
  // 渐变双色背景，hover 时 background-position 从 right 滑到 left（对应原站 -darkblue 动画）
  darkblue:
    'bg-gradient-to-r from-primary-mid from-50% to-primary-dark to-50% bg-[length:200%_100%] bg-right text-white lg:hover:bg-left',
  inverted: 'bg-white text-ink border border-line',
  'darkblue-inverted':
    'bg-gradient-to-r from-primary-mid from-50% to-white to-50% bg-[length:200%_100%] bg-right text-ink lg:hover:bg-left lg:hover:text-white',
};

/**
 * 还原原站 .c-button 系列组件：背景渐变滑动 hover 动效 + 箭头位移。
 * PC 端（lg 及以上）才触发 hover 动效，对应原站 `@media print, screen and (min-width: 64em)` 判定。
 */
export function Button(props: ButtonProps) {
  const {
    variant = 'darkblue',
    size = 'medium',
    withArrow = true,
    className = '',
    children,
  } = props;

  const classes = `group relative block w-full overflow-hidden rounded px-5 text-center font-bold leading-normal transition-[background-position,color] duration-400 ease-msol ${SIZE_MAP[size]} ${VARIANT_MAP[variant]} ${className}`;

  const content = (
    <span className="relative z-10 inline-flex items-center justify-center">
      {children}
      {withArrow && <Arrow color={variant === 'inverted' ? 'ink' : 'accent'} />}
    </span>
  );

  if ('href' in props && props.href) {
    return (
      <a href={props.href} target={props.target} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={classes}>
      {content}
    </button>
  );
}
