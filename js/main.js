function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

window.addEventListener('load', () => {
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.dataset.target);
        animateCounter(stat, target);
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const wasActive = faqItem.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!wasActive) {
            faqItem.classList.add('active');
        }
    });
});

function generateCode() {
    const randomNum = Math.floor(Math.random() * 99999).toString().padStart(5, '0');
    const codeDisplay = document.getElementById('code-display');

    let counter = 0;
    const interval = setInterval(() => {
        const tempNum = Math.floor(Math.random() * 99999).toString().padStart(5, '0');
        codeDisplay.textContent = `NT-${tempNum}`;
        counter++;

        if (counter > 20) {
            clearInterval(interval);
            codeDisplay.textContent = `NT-${randomNum}`;

            codeDisplay.style.animation = 'shimmer 1s ease-in-out';
            setTimeout(() => {
                codeDisplay.style.animation = '';
            }, 1000);
        }
    }, 50);
}

window.addEventListener('load', () => {
    generateCode();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

let clickCount = 0;
document.querySelector('.hero h1').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert('🎉 Chúc mừng! Bạn đã mở khóa thành tựu "Người ủng hộ nhiệt tình"!\n\nPhần thưởng: Không có gì cả, nhưng cảm ơn bạn đã click! 😂');
        clickCount = 0;
    }
});

setInterval(() => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach(t => t.style.transform = '');

    const random = Math.floor(Math.random() * testimonials.length);
    testimonials[random].style.transform = 'scale(1.02)';
    testimonials[random].style.transition = 'transform 0.5s ease';
}, 5000);

function showParodyMessage() {
    alert('😄 Cảm ơn bạn đã quan tâm!\n\n🎭 Đây là website PARODY/MEME\n\n⚠️ VUI LÒNG KHÔNG chuyển tiền thật!\n\nWebsite này được tạo ra nhằm mục đích giải trí và châm biếm, không phải là dự án thiện nguyện thật sự.\n\nNếu bạn muốn làm từ thiện, hãy tìm các tổ chức uy tín và minh bạch! 💝');
}
