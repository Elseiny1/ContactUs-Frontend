document.addEventListener("DOMContentLoaded", function () {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

    const showForm1Btn = document.querySelector(".info .btn-container button:first-child");
    const showForm3Btn = document.querySelector(".info .btn-container button:last-child");

    // إخفاء الفورمات عند بداية التحميل
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";

    // إظهار form1 وإخفاء الباقي
    showForm1Btn.addEventListener("click", function () {
        form1.style.display = "block";
        form2.style.display = "none";
        form3.style.display = "none";
        form1.scrollIntoView({ behavior: "smooth" });
    });

    // إظهار form3 (تسجيل دخول الأدمن) وإخفاء الباقي
    showForm3Btn.addEventListener("click", function () {
        form3.style.display = "block";
        form1.style.display = "none";
        form2.style.display = "none";
        form3.scrollIntoView({ behavior: "smooth" });
    });

    // زر إضافة رأيك داخل form1 بيظهر form2
    const showForm2Btn = form1.querySelector("button[type='submit']");
    showForm2Btn.addEventListener("click", function (e) {
        e.preventDefault(); // منع الإرسال الحقيقي للفورم
        form2.style.display = "block";
        form1.style.display = "block";
        form3.style.display = "none";
        form2.scrollIntoView({ behavior: "smooth" });
    });
});



    
    
      