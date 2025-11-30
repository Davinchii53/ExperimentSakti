// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ABK Information Data
const abkData = {
    'autisme': {
        title: 'Autisme',
        description: 'Autisme adalah kondisi perkembangan saraf yang mempengaruhi bagaimana seseorang berkomunikasi, berinteraksi, dan melihat dunia. Anak autis mungkin memiliki pola perilaku yang berbeda, mengalami tantangan dalam komunikasi sosial, dan memiliki minat yang intens. Setiap anak autis unik dengan kekuatan dan tantangan yang berbeda-beda. Dengan pemahaman dan dukungan yang tepat, anak autis dapat berkembang sesuai potensi mereka.'
    },
    'adhd': {
        title: 'ADHD',
        description: 'ADHD (Attention Deficit Hyperactivity Disorder) adalah kondisi yang menyebabkan kesulitan dalam mempertahankan perhatian, mengontrol impuls, dan mengelola hiperaktivitas. Anak dengan ADHD mungkin kesulitan fokus, mudah terganggu, impulsif, dan sangat aktif secara fisik. Dengan dukungan yang tepat dan strategi khusus, anak ADHD dapat berkembang optimal dan mencapai potensi penuh mereka.'
    },
    'disleksia': {
        title: 'Disleksia',
        description: 'Disleksia adalah kesulitan belajar yang terutama mempengaruhi kemampuan membaca, menulis, dan mengeja. Disleksia bukan hasil dari gangguan penglihatan atau kecerdasan rendah, tetapi cara otak memproses informasi bahasa. Dengan identifikasi dini dan dukungan yang tepat, anak disleksia dapat belajar dengan efektif dan mengembangkan strategi kompensasi yang kuat.'
    },
    'speech-delay': {
        title: 'Speech Delay',
        description: 'Speech Delay atau keterlambatan berbicara adalah kondisi di mana anak lambat dalam mengembangkan kemampuan berbicara dan bahasa dibandingkan dengan anak seusia. Ini dapat meliputi kesulitan dalam memahami atau menghasilkan suara, kata-kata, dan kalimat. Stimulasi tepat dan intervensi dini sangat penting untuk mendukung perkembangan bahasa anak dan membantu mereka berkomunikasi lebih efektif.'
    },
    'down-syndrome': {
        title: 'Down Syndrome',
        description: 'Down Syndrome adalah kondisi genetik yang terjadi ketika seseorang memiliki salinan tambahan kromosom 21. Ini mempengaruhi perkembangan fisik, kognitif, dan kesehatan anak. Anak dengan Down Syndrome memiliki kemampuan belajar yang beragam dan dapat mencapai banyak pencapaian penting dengan dukungan, pendidikan, dan cinta yang tepat dari keluarga dan komunitas.'
    },
    'tunagrahita': {
        title: 'Tunagrahita',
        description: 'Tunagrahita merujuk pada hambatan intelektual atau keterbatasan dalam fungsi kognitif dan perilaku adaptif. Ini mempengaruhi kemampuan belajar, komunikasi, dan kemandirian anak. Dengan program pendidikan khusus, terapi, dan dukungan keluarga yang komprehensif, anak tunagrahita dapat mengembangkan potensi maksimal mereka dan menjadi bagian produktif dari masyarakat.'
    },
    'tuna-rungu': {
        title: 'Tuna Rungu',
        description: 'Tuna rungu atau gangguan pendengaran adalah kondisi di mana seseorang mengalami kehilangan pendengaran sebagian atau total. Ini dapat mempengaruhi perkembangan bahasa, komunikasi, dan interaksi sosial anak. Dengan alat bantu dengar, teknologi pendukung, dan strategi komunikasi yang tepat, anak tuna rungu dapat berkembang dengan baik dan mengakses pendidikan yang sama dengan teman sebayanya.'
    },
    'bahasa-isyarat': {
        title: 'Bahasa Isyarat',
        description: 'Bahasa Isyarat Indonesia (BISINDO) adalah bahasa visual yang digunakan oleh komunitas Tuli di Indonesia. Ini adalah bahasa penuh dengan tata bahasa sendiri yang berbeda dari bahasa Indonesia lisan. Mempelajari bahasa isyarat penting bagi keluarga anak Tuli untuk memfasilitasi komunikasi yang efektif, inklusi sosial yang lebih baik, dan pengembangan identitas yang sehat.'
    }
};

// Combined function: Show ABK Info AND Filter Journal
function showABKAndJournal(category) {
    // Update ABK Information
    const abkInfoContainer = document.getElementById('abk-info');
    const info = abkData[category];

    if (info) {
        abkInfoContainer.innerHTML = `
            <h3 class="info-title">${info.title}</h3>
            <p class="info-description">${info.description}</p>
        `;
    }

    // Filter Journal Cards
    const journalCards = document.querySelectorAll('.journal-card');
    const journalTitle = document.getElementById('journal-title');

    // Update journal title
    const titles = {
        'autisme': 'Autisme',
        'adhd': 'ADHD',
        'disleksia': 'Disleksia',
        'speech-delay': 'Speech Delay',
        'down-syndrome': 'Down Syndrome',
        'tunagrahita': 'Tunagrahita',
        'tuna-rungu': 'Tuna Rungu',
        'bahasa-isyarat': 'Bahasa Isyarat'
    };

    journalTitle.textContent = titles[category] || 'Semua Kategori';

    // Filter journal cards
    journalCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category || card.dataset.category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Feedback Form Handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    const abkInfoContainer = document.getElementById('abk-info');
    if (abkInfoContainer) {
        abkInfoContainer.innerHTML = `
            <h3 class="info-placeholder">Pilih jenis anak istimewa di atas untuk melihat penjelasan lengkap</h3>
        `;
    }

    // Feedback form submission
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('feedback-name').value;
            const email = document.getElementById('feedback-email').value;
            const message = document.getElementById('feedback-message').value;

            if (name && message) {
                addComment(name, email, message);
                feedbackForm.reset();
            } else {
                alert('Mohon isi nama dan pesan Anda');
            }
        });
    }

    // Load existing comments from localStorage
    loadComments();
});

// Function to add comment
function addComment(name, email, message) {
    const commentsContainer = document.getElementById('comments-container');

    // Create comment element
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-item';

    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    commentDiv.innerHTML = `
        <div class="comment-name">${name}</div>
        <div class="comment-date">${dateStr}</div>
        <div class="comment-text">${message}</div>
    `;

    // Add to beginning of comments
    if (commentsContainer.querySelector('.no-comments')) {
        commentsContainer.innerHTML = '';
    }
    commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);

    // Save to localStorage
    saveComment(name, email, message);
}

// Function to save comment to localStorage
function saveComment(name, email, message) {
    let comments = JSON.parse(localStorage.getItem('sakti-comments')) || [];

    const comment = {
        name: name,
        email: email,
        message: message,
        date: new Date().toISOString()
    };

    comments.unshift(comment);

    // Keep only last 50 comments
    if (comments.length > 50) {
        comments = comments.slice(0, 50);
    }

    localStorage.setItem('sakti-comments', JSON.stringify(comments));
}

// Function to load comments from localStorage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('sakti-comments')) || [];
    const commentsContainer = document.getElementById('comments-container');

    if (comments.length === 0) {
        commentsContainer.innerHTML = '<p class="no-comments">Jadilah yang pertama memberikan feedback!</p>';
        return;
    }

    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-item';

        const date = new Date(comment.date);
        const dateStr = date.toLocaleDateString('id-ID', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        commentDiv.innerHTML = `
            <div class="comment-name">${comment.name}</div>
            <div class="comment-date">${dateStr}</div>
            <div class="comment-text">${comment.message}</div>
        `;

        commentsContainer.appendChild(commentDiv);
    });
}