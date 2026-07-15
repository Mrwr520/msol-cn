import type { ElementType, ReactNode } from 'react';
import { motion } from 'motion/react';

type RevealType = 'fade' | 'swipe';
type RevealSpeed = 'default' | 'slow' | 'superslow';

const DURATION_SEC: Record<RevealSpeed, number> = {
  default: 0.25,
  slow: 0.4,
  superslow: 0.85,
};

// 对应原站 cubic-bezier(0.215, 0.61, 0.355, 1)
const MSOL_EASE = [0.215, 0.61, 0.355, 1] as const;

type RevealProps = {
  /** fade = 原站 u-fade-in；swipe = 原站 u-swipe-in（下方 20px 位移淡入） */
  type?: RevealType;
  /** 对应原站 -delay01 ~ -delay20，数值 1~20，每级 0.1s */
  delay?: number;
  /** 对应原站 -slow(400ms) / -superslow(850ms)，默认 250ms */
  speed?: RevealSpeed;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * 滚动进入动画：还原原站 js-scrollup + u-fade-in / u-swipe-in。
 * 用 motion 的 whileInView 一次性触发（viewport.once=true），
 * 不需要手写 IntersectionObserver 和清理逻辑。
 */
export function Reveal({
  type = 'fade',
  delay = 0,
  speed = 'default',
  as = 'div',
  className = '',
  children,
}: RevealProps) {
  const duration = DURATION_SEC[speed];
  const delaySec = delay > 0 ? delay * 0.1 : 0;
  // motion 是按标签名做 Proxy 的对象（motion.div / motion.section / ...），
  // 需要用 as 传入的标签名动态取组件，而不是给 motion.div 传 as prop
  const Comp =
    (motion as unknown as Record<string, ElementType>)[as as string] ?? motion.div;

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: type === 'swipe' ? 20 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration, delay: delaySec, ease: MSOL_EASE }}
    >
      {children}
    </Comp>
  );
}

type RevealEachProps = {
  /** 需要逐项级联淡入的子节点数组（每个数组项会包一层 span/div 做 stagger） */
  items: ReactNode[];
  /** 每项之间的级联间隔，单位秒，默认 0.08s */
  stagger?: number;
  speed?: RevealSpeed;
  as?: ElementType;
  itemAs?: ElementType;
  className?: string;
  itemClassName?: string;
};

/**
 * 逐项级联淡入：还原原站 u-fade-each（标题逐字/逐段淡入)。
 * 用 motion 的 staggerChildren 实现，比手写 stagger 逻辑更精确、更省代码。
 */
export function RevealEach({
  items,
  stagger = 0.08,
  speed = 'default',
  as = 'div',
  itemAs = 'span',
  className = '',
  itemClassName = '',
}: RevealEachProps) {
  const duration = DURATION_SEC[speed];
  const Container =
    (motion as unknown as Record<string, ElementType>)[as as string] ?? motion.div;
  const Item =
    (motion as unknown as Record<string, ElementType>)[itemAs as string] ?? motion.span;

  return (
    <Container
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {items.map((item, i) => (
        <Item
          key={i}
          className={itemClassName}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration, ease: MSOL_EASE },
            },
          }}
        >
          {item}
        </Item>
      ))}
    </Container>
  );
}
