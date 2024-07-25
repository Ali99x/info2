// Star animation
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.stars').appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let numStars = 100;
const starSpeed = 0.7;

function initStars() {
    stars = []; // إعادة تعيين النجوم لتجنب تراكمها
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width
        });
    }
}

function moveStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        stars[i].z -= starSpeed;
        if (stars[i].z <= 0) {
            stars[i].z = canvas.width;
        }

        const k = 128.0 / stars[i].z;
        const px = stars[i].x * k + canvas.width / 2;
        const py = stars[i].y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const size = (1 - stars[i].z / canvas.width) * 5;
            const shade = parseInt((1 - stars[i].z / canvas.width) * 255);
            ctx.fillStyle = `rgb(${shade}, ${shade}, 255)`;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    requestAnimationFrame(moveStars);
}

initStars();
moveStars();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars(); // إعادة تهيئة النجوم عند تغيير حجم النافذة
});




// إعدادات النافذة المنبثقة
const modal = document.getElementById('info-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');
const infoSelect = document.getElementById('info-select');

// معلومات النصوص
const infoText = {
   
   1:`

<h6> ( العلاج الطبيعي ) </h6>

<p>
    العلاج الطبيعي هو فرع طبي يهتم بأداء الإنسان الوظيفي والحركي، ويسهم في تطوير الصحة العامة. يهدف العلاج الطبيعي إلى استعادة أو تحسين القدرات الجسدية للفرد، ويعمل على تخفيف آثار المرض والآلام دون الحاجة للتدخل الجراحي. تستمر مدة الدراسة في هذا المجال لأربع سنوات، ويمكن للطالب الأول في المرحلة الأولى الانتقال إلى كلية الطب العام.
</p>

<p>
    حتى دفعة 2020-2021، كان نظام الدراسة يعتمد على الكورسات، لكنه تحول إلى نظام بولونيا للدفعات الجديدة.
</p>

<strong>برنامج وخطة العلاج</strong>
<p>
    تبدأ عملية العلاج الطبيعي بتقييم وفحص وتشخيص حالة المريض من قبل المعالج. تشمل العلاجات المستخدمة ما يلي:
</p>
<ul>
    <li>التمارين الرياضية (تمارين تقوية، الإطالة، وغيرها)</li>
    <li>الأجهزة الكهربائية (مثل Ultrasound, TENS, Laser)</li>
    <li>العلاج الحراري</li>
    <li>العلاج اليدوي</li>
    <li>الإبر الصينية</li>
    <li>استخدام المساج</li>
</ul>
<p><strong>ملاحظة:</strong> العلاج الطبيعي ليس مساجًا فقط.</p>

<strong>تخصصات العلاج الطبيعي</strong>
<ul>
    <li>Musculoskeletal Physiotherapy</li>
    <li>Neurology Physiotherapy</li>
    <li>Cardiorespiratory Physiotherapy</li>
    <li>Pediatric Physiotherapy</li>
    <li>Sports Physiotherapy</li>
    <li>Geriatric Physiotherapy</li>
    <li>Rehabilitation and Pain Management</li>
</ul>

<strong>أماكن العمل</strong>
<ul>
    <li>المستشفيات</li>
    <li>مراكز إعادة التأهيل</li>
    <li>الزيارات المنزلية</li>
    <li>صالات الرياضة</li>
</ul>

<strong>مواد السنة الأولى (كورس الأول والثاني)</strong>
<ul>
    <li>English Language and Medical Terminology</li>
    <li>Human Anatomy</li>
    <li>Human Physiology</li>
    <li>Academic Debates</li>
    <li>Computer Studies</li>
    <li>Kurdish Studies</li>
    <li>Basic Life Support</li>
    <li>Fundamentals of Physiotherapy</li>
</ul>

<strong>مواد السنة الثانية (كورس الأول والثاني)</strong>
<ul>
    <li>Human Anatomy</li>
    <li>Human Physiology</li>
    <li>Biomechanics</li>
    <li>Fundamentals of Physiotherapy</li>
    <li>Orthotics & Prosthetics</li>
    <li>Psychology</li>
    <li>Patient Safety</li>
    <li>Communication Skills</li>
    <li>Musculoskeletal Physiotherapy</li>
    <li>Pharmacology</li>
    <li>Pathophysiology</li>
    <li>Sociology</li>
</ul>

<strong>مواد السنة الثالثة (كورس الأول والثاني)</strong>
<ul>
    <li>Musculoskeletal Physiotherapy</li>
    <li>Cardiopulmonary Physiotherapy</li>
    <li>Neurology Physiotherapy</li>
    <li>Electro & Radio Therapy</li>
    <li>Nutrition & Diet Therapy</li>
    <li>Ethics</li>
    <li>Pediatric Physiotherapy</li>
    <li>Biostatistics</li>
    <li>Research Methods</li>
    <li>Clinical Placement</li>
</ul>

<strong>مواد السنة الرابعة</strong>
<ul>
    <li>Medical Rehabilitation</li>
    <li>Clinical Placement</li>
    <li>Instrumental Therapy</li>
    <li>Sports Therapy</li>
    <li>Research Project</li>
    <li>Evidence-Based Physiotherapy</li>
</ul>




  `
};

// عرض النافذة المنبثقة
infoSelect.addEventListener('change', (event) => {
    const value = event.target.value;
    if (infoText[value]) {
        modalBody.innerHTML = infoText[value];
        modal.style.display = 'flex';
    }
});

// إغلاق النافذة المنبثقة
closeBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('hide');
    }, 0);
});

// إغلاق النافذة عند النقر خارجها
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeBtn.click();
        modal.classList.remove('hide');
    }
});



const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    
    // فتح القائمة الجانبية عند الضغط على زر القائمة
    menuButton.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    // إغلاق القائمة الجانبية عند النقر في أي مكان داخل الموقع
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && e.target !== menuButton) {
            sideMenu.classList.remove('open');
        }
    });

    // دالة لفتح صفحات الويب عند النقر على أزرار القائمة
    function openPage(url) {
        window.open(url, '_blank');
    }

    // استماع لحدث النقر على أزرار القائمة وفتح الصفحات المناسبة
    sideMenu.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.url;
            if (url) {
                openPage(url);
            }
        });
 

 });
function openPage(url) {
    window.location.href = url;
}

// script.js
window.onload = function() {
    const message = document.getElementById('welcomeMessage');

    // عرض الرسالة
    message.classList.add('show');

    // إخفاء الرسالة بعد 4 ثوانٍ
    setTimeout(() => {
        message.classList.remove('show');
        message.classList.add('hide');
    }, 4000);
};




// منع النسخ
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// منع استخدام قائمة السياق (النقر بزر الفأرة الأيمن)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع تحديد النصوص
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'v')) {
        e.preventDefault();
    }
});
