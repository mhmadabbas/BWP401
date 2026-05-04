document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. التحقق من نموذج الاتصال ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const alertBox = document.getElementById('alertMessage');
            alertBox.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    شكراً لك يا ${name}، تم استلام رسالتك بنجاح!
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            this.reset();
        });
    }

    // --- 2. الوضع الليلي (Dark Mode) ---
    const themeBtn = document.getElementById('themeToggle');
    
    // تحميل التفضيل المحفوظ من المتصفح 
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            // حفظ التفضيل [cite: 119, 120]
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 3. زر العودة للأعلى (Scroll-to-top) ---
    const backBtn = document.getElementById('backToTop');
    
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backBtn.style.display = "block";
        } else {
            backBtn.style.display = "none";
        }
    };

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // عودة سلسة للأعلى 
        });
    }
});