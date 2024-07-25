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

`,
   2:`

<h6>(علوم البيئة والصحة)</h6>

<p>يُعتبر تخصص علوم البيئة والصحة من التخصصات المتاحة في العديد من الجامعات، مثل:</p> <ul>
    <li>جامعة صلاح الدين</li>
    <li>جامعة زاخو</li>
    <li>جامعة حلبجة</li>
    <li>جامعة السليمانية</li>
    <li>بالإضافة إلى العديد من الجامعات الحكومية والخاصة الأخرى.</li>
</ul>

<p>في جامعة صلاح الدين، يمتد برنامج هذا التخصص لأربع سنوات حتى التخرج، وهو مناسب للطلاب الراغبين في تعزيز مهاراتهم في التمريض وفهم الجوانب المتعلقة بالماء، الهواء، التربة، بالإضافة إلى الكائنات الحية وغير الحية. يُتاح للخريجين فرص العمل في المستشفيات، شركات النفط، وكذلك كمراقبي بيئة.</p>

<p>يحتاج الطلاب في هذا التخصص إلى معدل يتراوح بين 60 إلى 75. يُعتمد نظام الكورسات في التدريس، حيث يتم تقديم مواد دراسية مختلفة في كل كورس من السنة الدراسية. يتم تدريس المواد عادةً باللغة الإنجليزية، ولكن لغة الشرح قد تختلف حسب الأستاذ، وقد تكون الكردية السورانية، العربية، أو الإنجليزية.</p>

<p>يمكن للطلاب الناجحين في هذا التخصص التقدم إلى قسم هندسة السدود بشرط توافر الشروط التالية:</p>
<ul>
    <li>أن يكون الطالب الأول في دفعته.</li>
    <li>أن يكون معدله عاليًا، غالبًا 75 أو أكثر، مع إمكانية التغيير حسب قرارات الجامعة.</li>
</ul>

<p><strong>مواد السنة الأولى:</strong></p>
<ul>
    <li>Principles of Environmental Science</li>
    <li>Zoology</li>
    <li>Kurdology</li>
    <li>Public Health</li>
    <li>Analytical Chemistry</li>
    <li>English</li>
    <li>Academic Skills</li>
    <li>Botany</li>
    <li>Environmental Awareness</li>
    <li>Natural Products</li>
    <li>Computer Skills</li>
</ul>

<p><strong>مواد السنة الثانية:</strong></p>
<ul>
    <li>Water Microbiology</li>
    <li>Meteorology</li>
    <li>Limnology</li>
    <li>Ecostatistics</li>
    <li>Biodiversity</li>
    <li>Soil Microbiology</li>
    <li>Environmental Radiation</li>
    <li>Phycology</li>
    <li>Environmental Indices</li>
    <li>Insect Ecology</li>
</ul>

<p><strong>مواد السنة الثالثة:</strong></p>
<ul>
    <li>Water Pollution</li>
    <li>Environmental Toxicity</li>
    <li>HSE (Health, Safety, Environmental)</li>
    <li>Petroleum Science</li>
    <li>Environmental Engineering</li>
    <li>Air Pollution</li>
    <li>Waste Management</li>
    <li>Industrial Hygiene</li>
    <li>Instrumental Analysis</li>
    <li>Forest Ecology</li>
</ul>

<p><strong>مواد السنة الرابعة:</strong></p>
<ul>
    <li>Human Physiology</li>
    <li>Molecular Biology</li>
    <li>Soil Sciences</li>
    <li>Environmental Impact Assessment</li>
    <li>Geographical Information System</li>
    <li>Research Project</li>
</ul>


`,
   3:`



<h6>(العلاقات الدولية والدبلوماسية)</h6>

<p>يُعتبر القسم من الفروع المهمة في العلوم الإنسانية، حيث يركز على دراسة السياسات الدولية والدبلوماسية وما يتعلق بالأمور البروتوكولية. في الفصل الأول من المرحلة الأولى، يتم تدريس مهارات أكاديمية فقط، ويتبع الفرع نظام الكورسات في الدراسة.</p>
<p>مدة الدراسة أربع سنوات، ويتم تقديم هذا التخصص في الجامعات التالية:</p>
<ul>
    <li>جامعة صلاح الدين</li>
    <li>جامعة السليمانية</li>
    <li>جامعة زاخو</li>
    <li>جامعة دهوك</li>
    <li>كما يتوفر هذا التخصص في العديد من الجامعات الخاصة.</li>
</ul>

<p>يُدرَّس هذا التخصص باللغة الإنجليزية في جامعة صلاح الدين، بينما تُستخدم اللغتان العربية والكردية في الجامعات الأخرى. يتراوح معدل القبول في هذا التخصص بين 70 و77، ويمكن أن يتغير من سنة إلى أخرى.</p>

<p><strong>مواد السنة الأولى</strong></p>
<p><strong>الفصل الأول</strong></p>
<ul>
    <li>مهارات الكمبيوتر</li>
    <li>مهارات أكاديمية</li>
    <li>مهارات القراءة الأكاديمية</li>
    <li>مهارات الكتابة الأكاديمية</li>
    <li>الدراسات السياسية الكردستانية</li>
</ul>

<p><strong>الفصل الثاني</strong></p>
<ul>
    <li>مقدمة في العلوم السياسية</li>
    <li>مقدمة في القانون</li>
    <li>الفكر السياسي القديم</li>
    <li>مقدمة في الاقتصاد</li>
    <li>مقدمة في العلاقات الدولية</li>
    <li>مهارات أكاديمية</li>
</ul>

<p><strong>مواد السنة الثانية</strong></p>
<p><strong>الفصل الأول</strong></p>
<ul>
    <li>الاقتصاد السياسي الدولي</li>
    <li>تاريخ الدبلوماسية والعلاقات القنصلية</li>
    <li>الإعلام السياسي والرأي العام</li>
    <li>الفكر السياسي في العصور الوسطى</li>
    <li>العلاقات الدولية قبل وبعد الحرب الباردة</li>
    <li>الاستراتيجية: المبادئ والنظريات</li>
    <li>النظم السياسية</li>
</ul>

<p><strong>الفصل الثاني</strong></p>
<ul>
    <li>الجيوبوليتك (الجغرافية السياسية)</li>
    <li>السياسة الخارجية لدول الخليج</li>
    <li>المنظمات الدولية</li>
    <li>الدبلوماسية والعلاقات القنصلية</li>
    <li>صنع القرار في السياسة الخارجية</li>
    <li>القانون الدولي العام</li>
    <li>الإرهاب الدولي</li>
</ul>

<p><strong>مواد السنة الثالثة</strong></p>
<p><strong>الفصل الأول</strong></p>
<ul>
    <li>السياسة الخارجية للدول الإفريقية</li>
    <li>الفكر السياسي المعاصر</li>
    <li>السياسات البيئية</li>
    <li>العلاقات الخارجية لإقليم كردستان</li>
    <li>السياسة الخارجية للاتحاد الأوروبي</li>
    <li>المنظمات الإقليمية الدولية</li>
    <li>المنهجية العلمية: المبادئ والأسس</li>
</ul>

<p><strong>الفصل الثاني</strong></p>
<ul>
    <li>المنهجية في العلوم السياسية</li>
    <li>الأيديولوجيات السياسية المعاصرة</li>
    <li>الصراع والتعاون الدولي</li>
    <li>السياسات الخارجية في شرق آسيا</li>
    <li>السياسة العالمية</li>
    <li>العولمة</li>
    <li>السياسة الخارجية العراقية</li>
</ul>

<p><strong>مواد السنة الرابعة</strong></p>
<p><strong>الفصل الأول</strong></p>
<ul>
    <li>النظرية السياسية للنسوية</li>
    <li>السياسة الخارجية للولايات المتحدة</li>
    <li>المفاوضات وإدارة الصراعات الدولية</li>
    <li>نظريات الأمن القومي</li>
    <li>النظريات المعاصرة للعلاقات الدولية</li>
    <li>مشروع البحث</li>
    <li>السياسات الخارجية للصين</li>
    <li>الإتيكيت والبروتوكول الدبلوماسي</li>

</ul>

<p><strong>الفصل الثاني</strong></p>
<ul>
    <li>السياسة الخارجية لروسيا</li>
    <li>الفكر السياسي المعاصر</li>
    <li>القانون الدولي الخاص</li>
    <li>السياسات والنماذج المعاصرة لقضايا الأمن القومي</li>
    <li>السياسة الدولية لأمريكا اللاتينية</li>
    <li>الدراسات المستقبلية</li>
</ul>
`,

4:`
<h6>(قسم الأشعة)</h6>

<p>يتوفر القسم في عدة جامعات ومعاهد، منها:</p>
<ul>
    <li>معهد هولير الطبي</li>
    <li>معهد السليمانية</li>
    <li>جامعة جيهان وجامعة قيوان الاهلية</li>
</ul>

<p><strong>قسم الأشعة في معهد هولير الطبي</strong></p>
<p>مدة الدراسة في قسم الأشعة بمعهد هولير الطبي سنتان، وهو قسم تطبيقي يبدأ الطلاب فيه بالتدريب العملي من أول سنة دراسية. يُدرس هذا القسم باللغة الإنجليزية، حيث تكون جميع المحاضرات باللغة الإنجليزية، ولكن أغلب الشرح يتم باللغة السورانية.</p>

<p>معدل القبول في هذا القسم يتغير من سنة إلى أخرى، ولكنه عادة ما يكون أعلى من 70. يعتمد القسم نظام بولوني، مما يعني أن المواد تختلف من فصل لآخر.</p>

<p><strong>فرص التوظيف والترقية</strong></p>
<p>طلاب السنة الأولى والثانية والثالثة في معهد هولير الطبي يمكنهم العمل كمعلمين في المعهد، وكذلك لديهم فرصة للترقية إلى قسم العلاج الطبيعي. الطلاب الذين يحققون ترتيبًا بين العشرة الأوائل يمكنهم التقديم لقسم العلاج الطبيعي أيضًا بنظام "پاراليل".</p>

<p><strong>متطلبات القسم</strong></p>
<p>يحتاج قسم الأشعة إلى جهد وتركيز عاليين من الطلاب، نظرًا للتعرض المستمر للأشعة التي قد تسبب أضرارًا صحية مثل السرطان.</p>

<p><strong>التدريب العملي</strong></p>
<p>في السنة الأولى: يوم واحد في الأسبوع في مستشفى جمهوري.</p>
<p>في السنة الثانية: ثلاثة أيام في الأسبوع في المستشفيات.</p>

<p><strong>التدريب الصيفي</strong></p>
<p>في نهاية السنة الثانية، يتوجب على الطلاب القيام بتدريب صيفي في سبعة مستشفيات حكومية.</p>

<p><strong>المواد الدراسية</strong></p>
<p><strong>السنة الأولى</strong></p>

<ul>
    <li>كردولوجيا</li>
    <li>اللغة الإنجليزية</li>
    <li>الكمبيوتر</li>
    <li>التشريح وعلم وظائف الأعضاء</li>
    <li>تصوير الأشعة</li>
    <li>أساسيات فيزياء الإشعاع</li>
    <li>أساسيات التمريض</li>
</ul>

<p><strong>السنة الثانية</strong></p>

<ul>
    <li>تصوير الأشعة</li>
    <li>تقنيات وإجراءات التصوير الشعاعي</li>
    <li>تقنيات أجهزة التصوير الشعاعي</li>
    <li>الحماية من الإشعاع</li>
    <li>التشريح الشعاعي</li>
    <li>بحث التخرج</li>
</ul>

`,

5:`


<h6>(قسم الإعلام)</h6>

<p>هو أحد الأقسام الأكاديمية التي تُقدم برامج دراسات عليا وتعليمية متخصصة في مجال الاتصال والإعلام. يشمل القسم دراسة وتحليل وسائل الإعلام المختلفة، مثل الصحافة، والإذاعة، والتلفزيون، ووسائل الإعلام الجديدة والرقمية. يهدف هذا القسم إلى تزويد الطلاب بالمعرفة والمهارات اللازمة لفهم وتحليل وتطبيق مفاهيم وسائل الإعلام المتنوعة وتأثيرها على المجتمع والجمهور.</p>

<p><strong>برنامج الدراسة</strong></p>
<p>مدة الدراسة في قسم الإعلام أربع سنوات، المنهاج يُقدم باللغة الكردية ولكن يمكن للطلاب الذين يدرسون باللغة العربية تقديم الامتحانات بهذه اللغة، حيث تُقدم الأسئلة باللغتين الكردية والعربية. يعتمد القسم نظام الكورسات، حيث تتغير المواد الدراسية في كل كورس لتشمل موضوعات جديدة ومختلفة.</p>

<p><strong>المواد الدراسية</strong></p>
<p>تشمل المواد الدراسية مجموعة متنوعة من المواضيع والمجالات، بما في ذلك:</p>
<ul>
    <li>الصحافة والإعلام الرقمي</li>
    <li>تاريخ الصحافة</li>
    <li>كوردناسي</li>
    <li>الإعلام الاستقصائي</li>
    <li>الاقتصاد الإعلامي</li>
    <li>الخطاب الإعلامي</li>
    <li>فنون الإعلام</li>
    <li>الرأي العام</li>
    <li>الإعلام وإدارة الأزمات</li>
    <li>الإذاعة والتلفزيون</li>
    <li>العلاقات العامة</li>
    <li>الإعلام والسياسة</li>
    <li>الإعلام الاجتماعي</li>
</ul>
<p>بالإضافة إلى التعليم النظري، تتضمن برامج الإعلام الجوانب العملية مثل ورش العمل والتدريب على استخدام الأدوات الإعلامية والتقنيات الحديثة، ومنها:</p>
<ul>
    <li>التصوير التلفزيوني</li>
    <li>فنون الراديو والتلفزيون</li>
    <li>البحث العلمي</li>
    <li>التصميم الصحفي</li>
    <li>تقنية الراديو والتلفزيون</li>
    <li>الحملات الإعلامية</li>
</ul>
<p>المواد التي تُدرس في كل كورس وكل سنة ليست ثابتة، وغالبًا ما يتم تغييرها أو تعديل مضمونها وفقًا للمدرس.</p>

<p><strong>فرص العمل</strong></p>
<p>خريجو قسم الإعلام يمكنهم العمل في مجموعة متنوعة من المجالات، بما في ذلك:</p>
<ul>
    <li>الصحافة: العمل كصحفيين في الصحف، المجلات، والمواقع الإخبارية.</li>
    <li>الإعلام التلفزيوني والإذاعي: تقديم البرامج، إعداد النشرات الإخبارية، إنتاج المحتوى التلفزيوني والإذاعي.</li>
    <li>العلاقات العامة: تنظيم الفعاليات، إدارة العلاقات مع وسائل الإعلام، إعداد البيانات الصحفية.</li>
    <li>التسويق: العمل في مجال التسويق والإعلان، وإنشاء حملات إعلانية فعالة.</li>
    <li>الإنتاج الإعلامي: صناعة المحتوى المرئي والسمعي، مثل الأفلام الوثائقية والبرامج التلفزيونية.</li>
    <li>الإعلام الرقمي: العمل في مجال الوسائط الاجتماعية، إدارة المحتوى على الإنترنت، تطوير استراتيجيات الوسائط الرقمية.</li>
    <li>البحث الإعلامي: البحث والتحليل في مجالات الإعلام والاتصال.</li>
    <li>التعليم والتدريب: العمل كمدرسين أو مدربين في مجالات الإعلام والاتصال في المؤسسات التعليمية.</li>
    <li>التصميم الصحفي: تخطيط وتنسيق المحتوى الإعلامي في الصحف والمجلات ووسائل الإعلام المطبوعة.</li>
    <li>التصوير التلفزيوني: إنتاج وتنفيذ المحتوى التلفزيوني باستخدام تقنيات التصوير والإخراج والإنتاج الصوتي.</li>
    <li>العمل الحر: بناء مسار مهني مستقل من خلال الكتابة الحرة، التصوير، وإدارة مشاريع إعلامية خاصة.</li>
</ul>
<p>قسم الإعلام يوفر للطلاب فرصة اكتساب معرفة واسعة ومتنوعة، مما يؤهلهم للعمل في مجموعة كبيرة من الوظائف داخل وخارج القطاع الإعلامي.</p>

`,

6:`

<h6>علوم الهندسة الزراعية</h6>

<p><strong>تعريف التخصص</strong><br>
تخصص الهندسة الزراعية هو مجال علمي يهتم بدراسة المشاكل المتعلقة بالإنتاج الزراعي وتصميم وإنتاج الآلات الزراعية الحديثة. يهدف هذا التخصص إلى إدخال التطبيقات الهندسية في مجال الزراعة، حيث يعمل المهندسون الزراعيون على تطبيق الوسائل الهندسية الحديثة لحل مشاكل الإنتاج الزراعي، إضافةً إلى التخطيط الاستراتيجي والإشراف الزراعي وتطوير الطرق للحفاظ على الموارد الطبيعية مثل المياه والتربة الزراعية.</p>

<p><strong>مدة الدراسة</strong><br>
مدة الدراسة في كلية علوم الهندسة الزراعية هي أربع سنوات، وبعدها يحصل الطالب على شهادة البكالوريوس. يتم تدريس المنهاج باللغة الإنجليزية ويعتمد نظام الكورسات.</p>

<p><strong>أقسام الكلية في أربيل كمثال:</strong></p>

    <p><strong>قسم علوم الأغذية</strong><br>
    يهتم هذا القسم بإعداد فنيين متخصصين في علوم الأغذية، ويشمل ثلاث محاور رئيسية:
    <ul>
        <li>تصنيع الأغذية والألبان</li>
        <li>كيمياء الأغذية والألبان</li>
        <li>الأحياء المجهرية في الأغذية والألبان</li>
    </ul>
    </li>
    <p><strong>قسم حماية (وقاية) النباتات</strong><br>
    يهدف إلى تخريج طلبة ذو كفاءة عالية في معرفة:
    <ul>
        <li>الآفات الحشرية: تشخيص، حياتية، بيئة، وطبيعة الأضرار ومكافحتها.</li>
        <li>أمراض النبات: مسببات، تطور، انتشار، خسائر، وطرق مكافحتها.</li>
        <li>الآفات الحيوانية غير الحشرية: الحلم، القوارض، الديدان الثعبانية.</li>
    </ul>
    </li>
    <p><strong>قسم الإنتاج الحيواني</strong><br>
    يرمي إلى إعداد ملاكات علمية مؤهلة في إدارة وإنتاج الحيوانات الزراعية مثل الأبقار، الأغنام، الماعز، الجاموس، والطيور الداجنة.</li>
    <p><strong>قسم البستنة</strong><br>
    يهتم بدراسة أشجار الفاكهة، محاصيل الخضر، ونباتات الزينة، بالإضافة إلى تربية وتحسين النباتات البستنية وتكنولوجيا ما بعد الحصاد.</li>
    <p><strong>قسم المحاصيل</strong><br>
    يشمل تدريب الطلبة على اكتساب الخبرات التطبيقية الزراعية بالإضافة إلى الأسس النظرية الأكاديمية.</li>
    <p><strong>قسم علوم التربة والموارد المائية</strong><br>
    يركز على حالة التربة الخصوبية، تقويمها، ومقدار ما تحتويه من عناصر غذائية جاهزة لإنتاج مثالي للمحاصيل المختلفة.</li>
    <p><strong>قسم الأسماك</strong><br>
    يتضمن ثلاثة محاور رئيسية:
    <ul>
        <li>دراسة البيئة المائية وتلوثها</li>
        <li>المصائد السمكية</li>
        <li>الاستزراع المائي</li>
    </ul>
    </li>


<p><strong>مجالات العمل</strong><br>
خريجو تخصص الهندسة الزراعية يمكنهم العمل في مجالات متنوعة، منها:
<ul>
    <li>العمل في الشركات والمؤسسات الزراعية.</li>
    <li>العمل في مشاريع شق الترع والطرق الملاحية.</li>
    <li>العمل كمهندس زراعي.</li>
    <li>العمل في مجال التصنيع الغذائي.</li>
    <li>مهندس تصميم الأرض الزراعية.</li>
    <li>العمل في مراكز البحوث.</li>
    <li>العمل في المحميات الطبيعية.</li>
    <li>مهندس تقني في مجال العلوم الغذائية.</li>
</ul>
</p>











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
