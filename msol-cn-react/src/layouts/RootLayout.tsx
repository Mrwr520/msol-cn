import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { BackToTop } from '../components/common/BackToTop';

/** 全局布局：Header + 页面内容 + Footer + 回到顶部按钮，路由切换时回到页面顶部 */
export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-[60px] lg:pt-[76px]">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
