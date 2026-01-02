// CreoDest ウェブサイト JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // モバイルメニューの切り替え
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // ハンバーガーメニューのアニメーション
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    
    // スクロールアニメーション
    const scrollElements = document.querySelectorAll('.scroll-animation, .fade-in');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    
    // 初期表示時にもアニメーション要素をチェック
    handleScrollAnimation();
    
    // スクロール時のアニメーション
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // ページ遷移時にスクロール位置をリセット
    window.scrollTo(0, 0);
});
