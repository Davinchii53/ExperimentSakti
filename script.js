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

// ABK Information Data - LENGKAP DENGAN INTRO, CIRI, CARA, & JURNAL
const abkData = {
    'tuna-rungu': {
        title: 'Tuna Rungu',
        intro: 'Tuna rungu adalah istilah yang digunakan untuk menggambarkan individu yang mengalami hambatan pada indera pendengarannya, baik sebagian (hard of hearing) maupun secara keseluruhan (deaf). Hambatan ini dapat terjadi sejak lahir (kongenital) maupun setelah lahir (akuisita). Tuna rungu bukan sekadar ketidakmampuan mendengar, tetapi memengaruhi cara seseorang berkomunikasi, memproses informasi, dan berinteraksi dengan lingkungan.\n\nDalam konteks sosial dan pendidikan, tuna rungu sering menghadapi keterbatasan akses informasi. Namun, penting untuk dipahami bahwa tuna rungu bukan ketidakmampuan intelektual. Mereka memiliki potensi yang sama dengan orang lain, serta dapat berkomunikasi secara efektif menggunakan berbagai metode seperti bahasa isyarat, membaca gerak bibir, hingga alat bantu dengar.',
        ciri: [
            'Tidak merespons suara keras atau panggilan.',
            'Sering meningkatkan volume TV/HP secara berlebihan.',
            'Mengalami keterlambatan berbicara (khususnya tuna rungu sejak lahir).',
            'Mengandalkan penglihatan untuk memahami situasi (visual learner).',
            'Lebih banyak menggunakan ekspresi wajah, gestur, atau tulisan dalam berkomunikasi.',
            'Kesulitan mengikuti percakapan tanpa kontak visual.'
        ],
        cara: [
            'Gunakan kontak mata dan posisi tubuh menghadap mereka, karena mereka banyak mengandalkan visual.',
            'Bicara dengan jelas, tidak perlu terlalu lambat, cukup artikulatif agar mudah dibaca dari bibir.',
            'Kurangi kebisingan latar jika mereka menggunakan alat bantu dengar.',
            'Gunakan media visual seperti tulisan, gambar, atau gesture sederhana.',
            'Belajar bahasa isyarat dasar, karena hal ini menunjukkan penghargaan sekaligus memudahkan komunikasi.',
            'Jangan berteriak, karena teriakan tidak membantu bagi orang dengan kehilangan pendengaran total.',
            'Sabar dan tidak menganggap keterlambatan komunikasinya sebagai ketidakmampuan berpikir.'
        ],
        jurnal: 'Mitchell, R. E. (2004). National Deaf Education Network and Clearinghouse. Gallaudet University Press.'
    },
    'bahasa-isyarat': {
        title: 'Bahasa Isyarat',
        intro: 'Bahasa isyarat adalah sistem komunikasi visual-gestural yang digunakan oleh komunitas Tuli/tuna rungu untuk bertukar informasi. Bahasa ini bukan sekadar "gerakan tangan", tetapi punya tata bahasa, struktur kalimat, kosakata, dan budaya linguistik tersendiri. Di Indonesia, bahasa isyarat yang digunakan adalah BISINDO (Bahasa Isyarat Indonesia) dan SIBI (Sistem Isyarat Bahasa Indonesia).\n\nBahasa isyarat membantu penggunanya mengekspresikan gagasan secara penuh dan alami, tanpa bergantung pada suara. Penelitian menunjukkan bahwa anak Tuli yang mendapat akses bahasa isyarat sejak dini cenderung memiliki perkembangan kognitif dan komunikasi yang lebih optimal.',
        ciri: [
            'Menggunakan kombinasi gerakan tangan, bentuk tangan, orientasi tangan, lokasi gerakan, dan ekspresi wajah.',
            'Memiliki struktur tata bahasa sendiri, tidak mengikuti urutan Bahasa Indonesia lisan.',
            'Bersifat visual, sehingga membutuhkan kontak mata.',
            'Disertai mimik/ekspresi yang menjadi bagian dari makna (misal: tingkat emosi, pertanyaan, penegasan).',
            'Bahasa isyarat berbeda-beda tiap negara (ASL, BSL, BISINDO, dll).'
        ],
        cara: [
            'Mulai dari dasar seperti salam, terima kasih, maaf, kamu-saya, angka 1-10.',
            'Pelajari etika komunikasi Tuli misalnya memanggil dengan melambaikan tangan atau mengetuk meja.',
            'Jaga kontak mata - melihat tangan saja tidak cukup, karena ekspresi wajah penting.',
            'Gunakan gerakan yang jelas dan tidak terburu-buru.',
            'Hormati keragaman bahasa isyarat misalnya tidak memaksa pengguna BISINDO memakai SIBI.',
            'Jangan menganggap bahasa isyarat itu universal karena setiap negara memiliki sistemnya sendiri.'
        ],
        jurnal: 'Ismawati, N., & Prahutama, R. (2019). BISINDO as a Natural Language of the Indonesian Deaf. Lingua, 228, 102-115.'
    },
    'autisme': {
        title: 'Autisme',
        intro: 'Autisme adalah kondisi perkembangan saraf yang mempengaruhi bagaimana seseorang berkomunikasi, berinteraksi, dan melihat dunia. Anak autis mungkin memiliki pola perilaku yang berbeda, mengalami tantangan dalam komunikasi sosial, dan memiliki minat yang intens. Setiap anak autis unik dengan kekuatan dan tantangan yang berbeda-beda.\n\nDengan pemahaman dan dukungan yang tepat, anak autis dapat berkembang sesuai potensi mereka. Deteksi dini dan intervensi yang tepat sangat penting untuk mendukung perkembangan optimal mereka di lingkungan keluarga dan sekolah.',
        ciri: [
            'Kesulitan dalam interaksi sosial dan komunikasi',
            'Pola perilaku repetitif atau minat yang sangat fokus',
            'Sensitivitas terhadap rangsangan sensorik (suara, cahaya, tekstur)',
            'Kesulitan memahami emosi atau perspektif orang lain',
            'Preferensi untuk rutinitas dan kepastian'
        ],
        cara: [
            'Fokus pada kekuatan dan minat anak, bukan hanya defisit',
            'Praktikkan kesabaran dan penerimaan tanpa syarat',
            'Advokasi untuk hak dan kebutuhan anak di sekolah dan komunitas',
            'Self-care untuk pengasuh karena merawat anak dengan autisme dapat menantang',
            'Ciptakan lingkungan yang terstruktur dan dapat diprediksi'
        ],
        jurnal: 'American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders DSM-5. Arlington, VA: American Psychiatric Publishing.'
    },
    'adhd': {
        title: 'ADHD',
        intro: 'ADHD (Attention Deficit Hyperactivity Disorder) adalah gangguan perkembangan neurobiologis yang ditandai oleh pola kurang perhatian (inattention), hiperaktivitas (hyperactivity), dan impulsivitas (impulsivity) yang bertahan lama. Kondisi ini dimulai sejak masa kanak-kanak dan berdampak pada fungsi sosial, akademik, atau pekerjaan.\n\nADHD dapat terbagi menjadi tiga tipe: Predominantly Inattentive Type, Predominantly Hyperactive-Impulsive Type, dan Combined Type. Dengan strategi dan dukungan yang tepat, anak dengan ADHD dapat belajar dan berkembang dengan baik.',
        ciri: [
            'Mudah terdistraksi oleh rangsangan luar',
            'Sulit mempertahankan perhatian pada tugas',
            'Tidak bisa duduk diam dalam waktu lama',
            'Berbicara berlebihan dan sulit menunggu giliran',
            'Menjawab sebelum pertanyaan selesai atau menyela orang lain'
        ],
        cara: [
            'Membuat jadwal harian yang terstruktur dan jelas',
            'Mengurangi distraksi di lingkungan (meja rapi, tempat tenang)',
            'Memberikan instruksi singkat, jelas, dan bertahap',
            'Menggunakan reward system untuk perilaku positif',
            'Komunikasi rutin dengan guru dan profesional kesehatan'
        ],
        jurnal: 'American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders DSM-5. Arlington, VA: American Psychiatric Publishing.'
    },
    'disleksia': {
        title: 'Disleksia',
        intro: 'Disleksia adalah gangguan belajar spesifik yang mempengaruhi kemampuan seseorang dalam membaca, menulis, dan memproses bahasa secara akurat serta cepat. Kondisi ini bukan disebabkan oleh kurangnya kecerdasan, motivasi, maupun gangguan penglihatan dan pendengaran. Orang dengan disleksia umumnya memiliki kecerdasan normal atau bahkan di atas rata-rata.\n\nDengan dukungan yang tepat, seperti metode pembelajaran multisensori, pelatihan fonologi, serta lingkungan belajar yang suportif, individu dengan disleksia dapat berkembang optimal. Intervensi dini sangat penting untuk membantu mereka mengatasi hambatan akademik.',
        ciri: [
            'Sulit mengenali huruf atau membedakan huruf yang mirip (misalnya b-d atau p-q)',
            'Membaca sangat lambat dan sering melakukan kesalahan meskipun kata tersebut sederhana',
            'Kesulitan memecah kata menjadi bunyi (phonemic awareness)',
            'Sulit mengeja, terutama kata-kata baru atau kata tidak beraturan',
            'Kesulitan mengingat urutan (hari, angka, instruksi)',
            'Menyukai aktivitas visual atau praktis tetapi menghindari tugas membaca/menulis'
        ],
        cara: [
            'Gunakan bahasa yang jelas, sederhana, dan instruksi langkah demi langkah',
            'Berikan waktu tambahan untuk membaca atau menyelesaikan tugas',
            'Sediakan media belajar yang beragam (audio, visual, gambar, warna)',
            'Hindari menghakimi atau menganggap mereka malas - fokus pada upaya, bukan kecepatan membaca',
            'Berikan pujian atas kemajuan kecil untuk meningkatkan rasa percaya diri'
        ],
        jurnal: 'Snowling, M. J. (2013). Early identification and interventions for dyslexia: A contemporary view. Journal of Research in Special Educational Needs, 13(1), 7-14.'
    },
    'speech-delay': {
        title: 'Speech Delay',
        intro: 'Speech Delay atau keterlambatan bicara adalah kondisi di mana anak lambat dalam mengembangkan kemampuan berbicara dan bahasa dibandingkan dengan anak seusia. Ini dapat meliputi kesulitan dalam memahami atau menghasilkan suara, kata-kata, dan kalimat. Kondisi ini relatif umum terjadi, dengan prevalensi sekitar 5-10% pada anak usia prasekolah.\n\nStimulasi tepat dan intervensi dini sangat penting untuk mendukung perkembangan bahasa anak. Kebanyakan anak dengan speech delay dapat mencapai perkembangan bahasa normal dengan dukungan yang tepat dari keluarga dan profesional.',
        ciri: [
            'Tidak mengoceh atau membuat suara konsonan pada usia 12-18 bulan',
            'Tidak mengatakan kata pertama pada usia 15-18 bulan',
            'Memiliki kosakata kurang dari 50 kata pada usia 2 tahun',
            'Tidak menggabungkan dua kata (misalnya "mau makan", "mama pergi")',
            'Bicara yang sangat tidak jelas dan sulit dipahami oleh orang tua',
            'Lebih banyak menggunakan gestur daripada kata-kata'
        ],
        cara: [
            'Konsultasi dengan dokter anak untuk skrining awal dan pemeriksaan pendengaran',
            'Evaluasi oleh speech-language pathologist (terapis wicara)',
            'Bicara dengan anak sepanjang hari tentang apa yang Anda lakukan',
            'Baca buku bersama setiap hari, tunjuk dan beri nama gambar',
            'Nyanyikan lagu anak-anak dan rhymes untuk melatih ritme bahasa',
            'Ciptakan kesempatan bermain interaktif yang melibatkan komunikasi'
        ],
        jurnal: 'American Speech-Language-Hearing Association. (2016). Speech Sound Disorders: Articulation and Phonology. ASHA Practice Portal.'
    },
    'down-syndrome': {
        title: 'Down Syndrome',
        intro: 'Down Syndrome adalah kondisi genetik yang terjadi ketika seseorang memiliki salinan tambahan kromosom 21 (trisomi 21). Ini mempengaruhi perkembangan fisik, kognitif, dan kesehatan anak. Anak dengan Down Syndrome memiliki kemampuan belajar yang beragam dan dapat mencapai banyak pencapaian penting dengan dukungan, pendidikan, dan cinta yang tepat.\n\nDengan perawatan kesehatan yang baik, pendidikan inklusif, dan dukungan keluarga yang kuat, individu dengan Down Syndrome dapat mencapai kemandirian yang signifikan dan berkontribusi pada masyarakat.',
        ciri: [
            'Karakteristik fisik tertentu seperti mata sipit, telinga kecil, dan otot yang lebih lembut',
            'Keterlambatan dalam perkembangan motorik (duduk, berjalan)',
            'Kesulitan dalam perkembangan bahasa dan komunikasi',
            'Hambatan intelektual dengan tingkat keparahan yang bervariasi',
            'Risiko lebih tinggi terhadap masalah kesehatan tertentu (jantung, mata, telinga)'
        ],
        cara: [
            'Terapi dini (early intervention) untuk mendukung perkembangan motorik dan bahasa',
            'Pendidikan inklusi dengan dukungan khusus yang sesuai',
            'Monitoring kesehatan rutin dan pemeriksaan spesialis yang diperlukan',
            'Fokus pada kemandirian dan keterampilan hidup sehari-hari',
            'Dukungan emosional dan sosial dari keluarga dan komunitas'
        ],
        jurnal: 'Roizen, N. J., Patterson, D. (2003). Down Syndrome. The Lancet, 361(9365), 1281-1289.'
    },
    'tunagrahita': {
        title: 'Tunagrahita',
        intro: 'Tunagrahita merujuk pada hambatan intelektual atau keterbatasan dalam fungsi kognitif dan perilaku adaptif. Ini mempengaruhi kemampuan belajar, komunikasi, dan kemandirian anak. Hambatan intelektual dapat terjadi karena berbagai penyebab, termasuk faktor genetik, trauma, atau kondisi kesehatan.\n\nDengan program pendidikan khusus, terapi, dan dukungan keluarga yang komprehensif, anak tunagrahita dapat mengembangkan potensi maksimal mereka dan menjadi bagian produktif dari masyarakat.',
        ciri: [
            'Kesulitan dalam pemecahan masalah dan pemikiran abstrak',
            'Perkembangan bahasa yang lambat dan kesulitan komunikasi',
            'Kesulitan dalam kemandirian dalam tugas sehari-hari',
            'Keterlambatan dalam perkembangan motorik',
            'Kesulitan dalam interaksi sosial dan memahami aturan sosial'
        ],
        cara: [
            'Assessmen komprehensif untuk menentukan tingkat dan kebutuhan spesifik',
            'Program pendidikan khusus yang disesuaikan dengan kemampuan individual',
            'Pelatihan keterampilan hidup sehari-hari (personal hygiene, makan, berpakaian)',
            'Strategi komunikasi yang jelas dan sederhana dengan repetisi',
            'Dukungan berkelanjutan untuk integrasi sosial dan vocational training'
        ],
        jurnal: 'Schalock, R. L., Luckasson, R. (2015). Intellectual disability: Definition, classification, and systems of supports. AAIDD.'
    }
};

// Combined function: Show ABK Info AND Filter Journal
function showABKAndJournal(category) {
    const abkInfoContainer = document.getElementById('abk-info');
    const info = abkData[category];

    if (info) {
        let ciritems = info.ciri.map(c => `<li>${c}</li>`).join('');
        let caraitems = info.cara.map(c => `<li>${c}</li>`).join('');

        abkInfoContainer.innerHTML = `
            <h3 class="info-title">${info.title}</h3>
            <p class="info-description">${info.intro}</p>
            <h4 class="info-subtitle">Ciri-ciri ${info.title}</h4>
            <ul class="info-list">
                ${ciritems}
            </ul>
            <h4 class="info-subtitle">Cara Memahami & Mendukung</h4>
            <ul class="info-list">
                ${caraitems}
            </ul>
            <div class="info-jurnal">
                <strong>Studi Literatur:</strong> ${info.jurnal}
            </div>
        `;
    }

    // Filter Journal Cards
    const journalCards = document.querySelectorAll('.journal-card');
    const journalTitle = document.getElementById('journal-title');

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

    journalCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category || card.dataset.category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize - Show default placeholder text
document.addEventListener('DOMContentLoaded', () => {
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

    loadComments();
});

// Function to add comment
function addComment(name, email, message) {
    const commentsContainer = document.getElementById('comments-container');

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

    if (commentsContainer.querySelector('.no-comments')) {
        commentsContainer.innerHTML = '';
    }
    commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);

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