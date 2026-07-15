type ArrowProps = {
  direction?: 'right' | 'left' | 'bottom';
  color?: 'accent' | 'ink' | 'white';
  className?: string;
};

const COLOR_MAP: Record<NonNullable<ArrowProps['color']>, string> = {
  accent: 'border-accent',
  ink: 'border-ink',
  white: 'border-white',
};

const ROTATE_MAP: Record<NonNullable<ArrowProps['direction']>, string> = {
  right: 'rotate-45',
  left: '-rotate-[135deg]',
  bottom: 'rotate-[135deg]',
};

/**
 * 还原原站 .c-arrow.-right.-yellow 等箭头图标：
 * 8x8px 边框三角，hover 时随父元素（button/a）位移 4px。
 * 用 group-hover 让父级容器加 `group` class 即可触发位移动画。
 */
export function Arrow({
  direction = 'right',
  color = 'accent',
  className = '',
}: ArrowProps) {
  return (
    <i
      className={`inline-block h-2 w-2 border-t-2 border-r-2 ${COLOR_MAP[color]} ${ROTATE_MAP[direction]} relative -top-[0.05em] ml-[3px] align-middle transition-transform duration-250 ease-msol lg:group-hover:translate-x-1 ${className}`}
    />
  );
}
